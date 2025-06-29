"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import {
  SuccessContainer,
  SuccessContent,
  SuccessIcon,
  SuccessTitle,
  SuccessMessage,
  OrderDetails,
  OrderDetailsTitle,
  OrderDetailsContent,
  OrderItem,
  OrderItemName,
  OrderItemQuantity,
  OrderItemPrice,
  OrderTotal,
  CustomerInfo,
  CustomerInfoTitle,
  CustomerInfoContent,
  CustomerInfoRow,
  CustomerInfoLabel,
  CustomerInfoValue,
  BackToShopButton,
  LoadingMessage,
} from "./SuccessPageClient.styles";

interface CheckoutSession {
  id: string;
  amount_total: number;
  customer_details: {
    name: string;
    email: string;
    phone: string;
    address: {
      line1: string;
      line2?: string;
      city: string;
      state: string;
      postal_code: string;
      country: string;
    };
  };
  metadata: {
    customerName: string;
    customerPhone: string;
    customerAddress: string;
    customerNotes: string;
    orderItems: string;
  };
  line_items?: {
    data: Array<{
      description: string;
      quantity: number;
      amount_total: number;
    }>;
  };
}

type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

const SuccessPageClient: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { clearCart } = useCart();
  const [session, setSession] = useState<CheckoutSession | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cartCleared, setCartCleared] = useState(false);

  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (!sessionId) {
      setError("No session ID found");
      setLoading(false);
      return;
    }

    const fetchSession = async () => {
      try {
        const response = await fetch(
          `/api/checkout-session?session_id=${sessionId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch session details");
        }

        const data = await response.json();
        setSession(data.session);
      } catch (err) {
        setError("Failed to load order details");
        console.error("Error fetching session:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  useEffect(() => {
    if (session && !cartCleared) {
      clearCart();
      setCartCleared(true);
    }
  }, [session, clearCart, cartCleared]);

  if (loading) {
    return (
      <SuccessContainer>
        <LoadingMessage>Loading your order details...</LoadingMessage>
      </SuccessContainer>
    );
  }

  if (error || !session) {
    return (
      <SuccessContainer>
        <SuccessContent>
          <SuccessTitle>Something went wrong</SuccessTitle>
          <SuccessMessage>
            {error ||
              "Unable to load order details. Please contact support if you have any questions."}
          </SuccessMessage>
          <BackToShopButton onClick={() => router.push("/shop")}>
            Back to Shop
          </BackToShopButton>
        </SuccessContent>
      </SuccessContainer>
    );
  }

  const orderItems: OrderItem[] = session.metadata?.orderItems
    ? JSON.parse(session.metadata.orderItems)
    : [];

  return (
    <SuccessContainer>
      <SuccessContent>
        <SuccessIcon>✅</SuccessIcon>
        <SuccessTitle>Payment Successful!</SuccessTitle>
        <SuccessMessage>
          Thank you for your order! We&apos;ve received your payment and will
          begin processing your order shortly. You&apos;ll receive a
          confirmation email with your order details.
        </SuccessMessage>

        <OrderDetails>
          <OrderDetailsTitle>Order Details</OrderDetailsTitle>
          <OrderDetailsContent>
            {orderItems.map((item: OrderItem, index: number) => (
              <OrderItem key={index}>
                <OrderItemName>{item.name}</OrderItemName>
                <OrderItemQuantity>Qty: {item.quantity}</OrderItemQuantity>
                <OrderItemPrice>
                  ${(item.price * item.quantity).toFixed(2)}
                </OrderItemPrice>
              </OrderItem>
            ))}
            <OrderTotal>
              <strong>Total: ${(session.amount_total / 100).toFixed(2)}</strong>
            </OrderTotal>
          </OrderDetailsContent>
        </OrderDetails>

        <CustomerInfo>
          <CustomerInfoTitle>Delivery Information</CustomerInfoTitle>
          <CustomerInfoContent>
            <CustomerInfoRow>
              <CustomerInfoLabel>Name:</CustomerInfoLabel>
              <CustomerInfoValue>
                {session.metadata.customerName}
              </CustomerInfoValue>
            </CustomerInfoRow>
            <CustomerInfoRow>
              <CustomerInfoLabel>Phone:</CustomerInfoLabel>
              <CustomerInfoValue>
                {session.metadata.customerPhone}
              </CustomerInfoValue>
            </CustomerInfoRow>
            <CustomerInfoRow>
              <CustomerInfoLabel>Address:</CustomerInfoLabel>
              <CustomerInfoValue>
                {session.metadata.customerAddress}
              </CustomerInfoValue>
            </CustomerInfoRow>
            {session.metadata.customerNotes && (
              <CustomerInfoRow>
                <CustomerInfoLabel>Notes:</CustomerInfoLabel>
                <CustomerInfoValue>
                  {session.metadata.customerNotes}
                </CustomerInfoValue>
              </CustomerInfoRow>
            )}
          </CustomerInfoContent>
        </CustomerInfo>

        <BackToShopButton onClick={() => router.push("/shop")}>
          Continue Shopping
        </BackToShopButton>
      </SuccessContent>
    </SuccessContainer>
  );
};

export default SuccessPageClient;
