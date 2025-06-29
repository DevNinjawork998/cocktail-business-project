"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loadStripe } from "@stripe/stripe-js";
import type { Stripe } from "@stripe/stripe-js";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutTitle,
  OrderSummary,
  SummaryTitle,
  OrderItems,
  OrderItem,
  OrderItemDetails,
  OrderItemName,
  OrderItemPrice,
  OrderItemQuantity,
  OrderItemSubtext,
  OrderItemImagePlaceholder,
  OrderTotal,
  TotalRow,
  TotalLabel,
  TotalValue,
  TotalAmount,
  CustomerInfo,
  CustomerInfoTitle,
  CustomerInfoForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  PaymentSection,
  PaymentTitle,
  PaymentDescription,
  PaymentOptions,
  PaymentOption,
  PaymentOptionButton,
  PaymentOptionIcon,
  PaymentOptionText,
  PaymentOptionDescription,
  WhatsAppButton,
  WhatsAppIcon,
  BackToCartButton,
  EmptyCartMessage,
  EmptyCartTitle,
  EmptyCartText,
  LoadingSpinner,
} from "./CheckoutPageClient.styles";
import styled from "styled-components";
import { formatCurrency } from "@/lib/stripe";

const customerInfoSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(
      (val) => /^\+?[0-9\-\s\(\)]{7,20}$/.test(val),
      "Please enter a valid phone number"
    ),
  address: z.string().min(1, "Delivery address is required"),
  notes: z.string().max(200, "Notes must be 200 characters or less").optional(),
});

type CustomerInfo = z.infer<typeof customerInfoSchema>;

// Add a wrapper for the two-column layout
const CheckoutGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 2.5rem;
  }
`;

const LeftColumn = styled.div`
  flex: 1 1 40%;
  min-width: 320px;
`;

const RightColumn = styled.div`
  flex: 1 1 60%;
  min-width: 340px;
`;

const CheckoutPageClient: React.FC = () => {
  const { state, clearCart } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [stripe, setStripe] = useState<Stripe | null>(null);
  const [useWhatsApp, setUseWhatsApp] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerInfo>({
    resolver: zodResolver(customerInfoSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      notes: "",
    },
  });

  // Load Stripe on component mount
  useEffect(() => {
    const loadStripeInstance = async () => {
      const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
      if (publishableKey) {
        const stripeInstance = await loadStripe(publishableKey);
        setStripe(stripeInstance);
      }
    };
    loadStripeInstance();
  }, []);

  const handleStripeCheckout = async () => {
    if (!stripe) {
      alert("Stripe is not loaded. Please try again.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: state.items,
          customerInfo: {}, // No customer info, Stripe will collect
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }
      const { sessionId } = await response.json();
      const { error } = await stripe.redirectToCheckout({ sessionId });
      if (error) {
        throw error;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("There was an error processing your payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppOrder = (customerInfo: CustomerInfo) => {
    if (state.items.length === 0) return;
    try {
      const orderItems = state.items
        .map(
          (item) =>
            `• ${item.name} x${item.quantity} - $${(
              item.price * item.quantity
            ).toFixed(2)}`
        )
        .join("\n");
      const customerDetails = customerInfo.name
        ? `\n\nCustomer Details:\nName: ${customerInfo.name}\nEmail: ${
            customerInfo.email
          }\nPhone: ${customerInfo.phone}\nAddress: ${
            customerInfo.address
          }\nNotes: ${customerInfo.notes || "None"}`
        : "";
      const message = `🍹 *New Cocktail Order*\n\n*Order Summary:*\n${orderItems}\n\n*Total: $${state.total.toFixed(
        2
      )}*\n${customerDetails}\n\nPlease confirm this order and provide payment instructions.`;
      const phoneNumber = "60146491165";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      try {
        const newWindow = window.open(whatsappUrl, "_blank");
        if (!newWindow) {
          window.location.href = whatsappUrl;
        }
      } catch (error) {
        console.error("Error opening WhatsApp:", error);
        const tempLink = document.createElement("a");
        tempLink.href = whatsappUrl;
        tempLink.target = "_blank";
        tempLink.rel = "noopener noreferrer";
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
      }
      clearCart();
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      console.error("Error sending order to WhatsApp:", error);
      alert("There was an error opening WhatsApp. Please try again.");
    }
  };

  if (state.items.length === 0) {
    return (
      <CheckoutContainer>
        <EmptyCartMessage>
          <EmptyCartTitle>Your cart is empty</EmptyCartTitle>
          <EmptyCartText>
            You need to add items to your cart before proceeding to checkout.
          </EmptyCartText>
          <BackToCartButton onClick={() => router.push("/cart")}>
            Back to Cart
          </BackToCartButton>
        </EmptyCartMessage>
      </CheckoutContainer>
    );
  }

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <CheckoutTitle>Checkout</CheckoutTitle>
      </CheckoutHeader>
      <CheckoutGrid>
        <LeftColumn>
          <OrderSummary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <OrderItems>
              {state.items.map((item) => (
                <OrderItem key={item.id}>
                  <OrderItemImagePlaceholder $bgColor={item.imageColor}>
                    {item.name}
                  </OrderItemImagePlaceholder>
                  <OrderItemDetails>
                    <OrderItemName>{item.name}</OrderItemName>
                    <OrderItemSubtext>{item.priceSubtext}</OrderItemSubtext>
                    <OrderItemQuantity>
                      Quantity: {item.quantity}
                    </OrderItemQuantity>
                  </OrderItemDetails>
                  <OrderItemPrice>
                    {formatCurrency(item.price * item.quantity * 100)}
                  </OrderItemPrice>
                </OrderItem>
              ))}
            </OrderItems>
            <OrderTotal>
              <TotalRow>
                <TotalLabel>Subtotal ({state.itemCount} items)</TotalLabel>
                <TotalValue>{formatCurrency(state.total * 100)}</TotalValue>
              </TotalRow>
              <TotalRow>
                <TotalLabel>Shipping</TotalLabel>
                <TotalValue>Free</TotalValue>
              </TotalRow>
              <TotalAmount>
                <TotalLabel>Total</TotalLabel>
                <TotalValue>{formatCurrency(state.total * 100)}</TotalValue>
              </TotalAmount>
            </OrderTotal>
          </OrderSummary>
        </LeftColumn>
        <RightColumn>
          <PaymentSection>
            <PaymentTitle>Choose Payment Method</PaymentTitle>
            <PaymentDescription>
              Select your preferred payment method to complete your order.
            </PaymentDescription>
            <PaymentOptions>
              <PaymentOption>
                <PaymentOptionButton
                  type="button"
                  onClick={handleStripeCheckout}
                  disabled={loading || !stripe}
                >
                  {loading ? (
                    <LoadingSpinner />
                  ) : (
                    <PaymentOptionIcon>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.831 3.47 1.426 3.47 2.338 0 .914-.796 1.431-2.127 1.431-1.72 0-4.516-.924-6.378-2.168l-.9 5.555C6.203 22.99 8.977 24 12.165 24c2.469 0 4.577-.624 6.078-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.792-7.305zM24 20.352c0 2.194-1.387 3.44-3.54 3.44-1.72 0-3.44-.916-4.516-2.194L15.9 24h-5.677l6.409-13.748C17.748 8.9 20.46 9.15 22.46 9.15c2.194 0 3.54 1.387 3.54 3.44z" />
                      </svg>
                    </PaymentOptionIcon>
                  )}
                  <PaymentOptionText>Pay with Card</PaymentOptionText>
                  <PaymentOptionDescription>
                    Secure payment with credit/debit card via Stripe
                  </PaymentOptionDescription>
                </PaymentOptionButton>
              </PaymentOption>
              <PaymentOption>
                <PaymentOptionButton
                  type="button"
                  onClick={() => setUseWhatsApp(true)}
                  disabled={loading}
                >
                  <PaymentOptionIcon>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </PaymentOptionIcon>
                  <PaymentOptionText>Pay via WhatsApp</PaymentOptionText>
                  <PaymentOptionDescription>
                    Send order to WhatsApp for manual payment processing
                  </PaymentOptionDescription>
                </PaymentOptionButton>
              </PaymentOption>
            </PaymentOptions>
          </PaymentSection>
          {useWhatsApp && (
            <CustomerInfo>
              <CustomerInfoTitle>Customer Information</CustomerInfoTitle>
              <CustomerInfoForm
                onSubmit={handleSubmit(handleWhatsAppOrder)}
                role="form"
              >
                <FormGroup>
                  <FormLabel htmlFor="name">Full Name *</FormLabel>
                  <FormInput
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Enter your full name"
                    required
                  />
                  {errors.name && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {errors.name.message}
                    </span>
                  )}
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="email">Email Address *</FormLabel>
                  <FormInput
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email address"
                    required
                  />
                  {errors.email && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {errors.email.message}
                    </span>
                  )}
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="phone">Phone Number *</FormLabel>
                  <FormInput
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="Enter your phone number"
                    required
                  />
                  {errors.phone && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {errors.phone.message}
                    </span>
                  )}
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="address">Delivery Address *</FormLabel>
                  <FormTextarea
                    id="address"
                    {...register("address")}
                    placeholder="Enter your delivery address"
                    rows={3}
                    required
                  />
                  {errors.address && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {errors.address.message}
                    </span>
                  )}
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="notes">Special Instructions</FormLabel>
                  <FormTextarea
                    id="notes"
                    {...register("notes")}
                    placeholder="Any special delivery instructions or notes"
                    rows={2}
                    maxLength={200}
                  />
                  {errors.notes && (
                    <span style={{ color: "red", fontSize: 12 }}>
                      {errors.notes.message}
                    </span>
                  )}
                </FormGroup>
                <WhatsAppButton type="submit">
                  <WhatsAppIcon>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </WhatsAppIcon>
                  Send Order via WhatsApp
                </WhatsAppButton>
              </CustomerInfoForm>
            </CustomerInfo>
          )}
        </RightColumn>
      </CheckoutGrid>
    </CheckoutContainer>
  );
};

export default CheckoutPageClient;
