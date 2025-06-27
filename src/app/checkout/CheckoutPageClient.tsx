"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckoutContainer,
  CheckoutHeader,
  CheckoutTitle,
  CheckoutContent,
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
  WhatsAppSection,
  WhatsAppTitle,
  WhatsAppDescription,
  WhatsAppButton,
  WhatsAppIcon,
  BackToCartButton,
  EmptyCartMessage,
  EmptyCartTitle,
  EmptyCartText,
} from "./CheckoutPageClient.styles";

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

const CheckoutPageClient: React.FC = () => {
  const { state, clearCart } = useCart();
  const router = useRouter();
  const {
    register,
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

  const handleWhatsAppOrder = (customerInfo: CustomerInfo) => {
    if (state.items.length === 0) return;

    try {
      // Format order details for WhatsApp
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

      // Ensure phone number has country code
      const phoneNumber = "60146491165";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      // Try multiple approaches to open WhatsApp
      try {
        // Method 1: Direct window.open
        const newWindow = window.open(whatsappUrl, "_blank");

        if (!newWindow) {
          // Method 2: Try with location.href
          window.location.href = whatsappUrl;
        }
      } catch (error) {
        console.error("Error opening WhatsApp:", error);
        // Method 3: Create a temporary link and click it
        const tempLink = document.createElement("a");
        tempLink.href = whatsappUrl;
        tempLink.target = "_blank";
        tempLink.rel = "noopener noreferrer";
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
      }

      // Clear cart after sending to WhatsApp
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

      <CheckoutContent>
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
                  ${(item.price * item.quantity).toFixed(2)}
                </OrderItemPrice>
              </OrderItem>
            ))}
          </OrderItems>
          <OrderTotal>
            <TotalRow>
              <TotalLabel>Subtotal ({state.itemCount} items)</TotalLabel>
              <TotalValue>${state.total.toFixed(2)}</TotalValue>
            </TotalRow>
            <TotalRow>
              <TotalLabel>Shipping</TotalLabel>
              <TotalValue>Free</TotalValue>
            </TotalRow>
            <TotalAmount>
              <TotalLabel>Total</TotalLabel>
              <TotalValue>${state.total.toFixed(2)}</TotalValue>
            </TotalAmount>
          </OrderTotal>
        </OrderSummary>

        <CustomerInfo>
          <CustomerInfoTitle>Customer Information</CustomerInfoTitle>
          <CustomerInfoForm>
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
            <WhatsAppSection>
              <WhatsAppTitle>Complete Your Order</WhatsAppTitle>
              <WhatsAppDescription>
                Click the button below to send your order directly to us via
                WhatsApp. We&apos;ll confirm your order and provide payment
                instructions.
              </WhatsAppDescription>
              <WhatsAppButton
                type="button"
                onClick={() => {
                  // Get form values manually
                  const name =
                    (
                      document.querySelector(
                        'input[name="name"]'
                      ) as HTMLInputElement
                    )?.value || "";
                  const email =
                    (
                      document.querySelector(
                        'input[name="email"]'
                      ) as HTMLInputElement
                    )?.value || "";
                  const phone =
                    (
                      document.querySelector(
                        'input[name="phone"]'
                      ) as HTMLInputElement
                    )?.value || "";
                  const address =
                    (
                      document.querySelector(
                        'textarea[name="address"]'
                      ) as HTMLTextAreaElement
                    )?.value || "";
                  const notes =
                    (
                      document.querySelector(
                        'textarea[name="notes"]'
                      ) as HTMLTextAreaElement
                    )?.value || "";

                  // Check if required fields are filled
                  if (!name || !email || !phone || !address) {
                    alert(
                      "Please fill in all required fields (Name, Email, Phone, Address)"
                    );
                    return;
                  }

                  const formData = { name, email, phone, address, notes };
                  handleWhatsAppOrder(formData);
                }}
              >
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
            </WhatsAppSection>
          </CustomerInfoForm>
        </CustomerInfo>
      </CheckoutContent>
    </CheckoutContainer>
  );
};

export default CheckoutPageClient;
