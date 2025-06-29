"use client";

import React from "react";
import { useCart } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { formatCurrency } from "@/lib/stripe";
import {
  CartContainer,
  CartHeader,
  CartTitle,
  CartEmpty,
  CartEmptyTitle,
  CartEmptyText,
  ContinueShoppingButton,
  CartContent,
  CartItems,
  CartItem,
  CartItemDetails,
  CartItemName,
  CartItemPrice,
  CartItemSubtext,
  CartItemQuantity,
  QuantityButton,
  QuantityInput,
  RemoveButton,
  CartSummary,
  SummaryTitle,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
  SummaryTotal,
  CheckoutButton,
  CartItemImagePlaceholder,
} from "./CartPageClient.styles";

const parsePrice = (price: number | string | null | undefined): number => {
  if (typeof price === "number") return price;
  if (typeof price === "string")
    return parseFloat(price.replace(/[^\d.]/g, ""));
  return 0; // fallback for null/undefined/other
};

const CartPageClient: React.FC = () => {
  const { state, updateQuantity, removeItem } = useCart();
  const router = useRouter();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
  };

  const handleContinueShopping = () => {
    router.push("/shop");
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  if (state.items.length === 0) {
    return (
      <CartContainer>
        <CartEmpty>
          <CartEmptyTitle>Your cart is empty</CartEmptyTitle>
          <CartEmptyText>
            Looks like you haven&apos;t added any items to your cart yet.
          </CartEmptyText>
          <ContinueShoppingButton onClick={handleContinueShopping}>
            Continue Shopping
          </ContinueShoppingButton>
        </CartEmpty>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>Shopping Cart ({state.itemCount} items)</CartTitle>
      </CartHeader>

      <CartContent>
        <CartItems>
          {state.items.map((item) => {
            const unitPrice = parsePrice(item.price);
            const totalPrice = unitPrice * item.quantity;
            return (
              <CartItem key={item.id}>
                <CartItemImagePlaceholder $bgColor={item.imageColor}>
                  {item.name}
                </CartItemImagePlaceholder>

                <CartItemDetails>
                  <CartItemName>{item.name}</CartItemName>
                  <CartItemPrice>
                    {formatCurrency(unitPrice * 100)}
                  </CartItemPrice>
                  <CartItemSubtext>{item.priceSubtext}</CartItemSubtext>
                </CartItemDetails>

                <CartItemQuantity>
                  <QuantityButton
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </QuantityButton>
                  <QuantityInput
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e: { target: { value: string } }) =>
                      handleQuantityChange(
                        item.id,
                        parseInt(e.target.value) || 0
                      )
                    }
                  />
                  <QuantityButton
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </QuantityButton>
                </CartItemQuantity>

                <CartItemPrice>
                  {formatCurrency(totalPrice * 100)}
                </CartItemPrice>

                <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                  Remove
                </RemoveButton>
              </CartItem>
            );
          })}
        </CartItems>

        <CartSummary>
          <SummaryTitle>Order Summary</SummaryTitle>

          <SummaryRow>
            <SummaryLabel>Subtotal ({state.itemCount} items)</SummaryLabel>
            <SummaryValue>{formatCurrency(state.total * 100)}</SummaryValue>
          </SummaryRow>

          <SummaryRow>
            <SummaryLabel>Shipping</SummaryLabel>
            <SummaryValue>Free</SummaryValue>
          </SummaryRow>

          <SummaryTotal>
            <SummaryLabel>Total</SummaryLabel>
            <SummaryValue>{formatCurrency(state.total * 100)}</SummaryValue>
          </SummaryTotal>

          <CheckoutButton onClick={handleCheckout}>
            Proceed to Checkout
          </CheckoutButton>
        </CartSummary>
      </CartContent>
    </CartContainer>
  );
};

export default CartPageClient;
