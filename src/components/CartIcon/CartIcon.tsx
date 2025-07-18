"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import {
  CartIconContainer,
  CartIconWrapper,
  CartCount,
  CartIcon as StyledCartIcon,
  Toast,
} from "./CartIcon.styles";

const CartIcon: React.FC = () => {
  const { state } = useCart();
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const prevItemCount = React.useRef(state.itemCount);

  useEffect(() => {
    if (state.itemCount > prevItemCount.current && prevItemCount.current > 0) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
    prevItemCount.current = state.itemCount;
  }, [state.itemCount]);

  const handleCartClick = () => {
    router.push("/cart");
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleCartClick();
    }
  };

  return (
    <CartIconContainer data-testid="cart-icon-container">
      <CartIconWrapper
        role="button"
        tabIndex={0}
        data-testid="cart-icon-button"
        onClick={handleCartClick}
        onKeyDown={handleKeyDown}
        aria-label="View cart"
      >
        <StyledCartIcon>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledCartIcon>
        {state.itemCount > 0 && (
          <CartCount data-testid="cart-count">{state.itemCount}</CartCount>
        )}
      </CartIconWrapper>
      {showToast && (
        <Toast data-testid="cart-toast">
          Item added to cart! ({state.itemCount} items)
        </Toast>
      )}
    </CartIconContainer>
  );
};

export default CartIcon;
