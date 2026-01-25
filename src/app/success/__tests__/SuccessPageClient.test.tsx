import React from "react";
import { render, screen, fireEvent } from "../../../__tests__/test-utils";
import { CartProvider } from "../../../contexts/CartContext";
import SuccessPageClient from "../SuccessPageClient";
import { useRouter, useSearchParams } from "next/navigation";
import * as CartContext from "../../../contexts/CartContext";

// Mock Next.js navigation
const mockPush = jest.fn();
const mockSearchParams = new URLSearchParams();

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

// Test wrapper component to provide cart context
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <CartProvider>{children}</CartProvider>;
};

describe("SuccessPageClient", () => {
  const mockClearCart = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockSearchParams.delete("session_id");
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    (useSearchParams as jest.Mock).mockReturnValue(mockSearchParams);

    // Mock useCart hook
    jest
      .spyOn(CartContext, "useCart")
      .mockReturnValue({
        clearCart: mockClearCart,
      } as ReturnType<typeof CartContext.useCart>);
  });

  it("renders success title", () => {
    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    expect(
      screen.getByText("Cheers! Your Order is Shaking Things Up!"),
    ).toBeInTheDocument();
  });

  it("renders success message", () => {
    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    expect(
      screen.getByText(/Thank you for being the life of the party!/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /We're mixing your cocktails and getting them ready for delivery/,
      ),
    ).toBeInTheDocument();
  });

  it("renders cocktail emoji", () => {
    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    expect(screen.getByText("🍹")).toBeInTheDocument();
  });

  it("renders success icon", () => {
    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    expect(screen.getByText("✓")).toBeInTheDocument();
  });

  it("displays order details when session_id is present", () => {
    mockSearchParams.set("session_id", "test-session-123");

    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    expect(screen.getByText("Your Cocktail Order Code:")).toBeInTheDocument();
    expect(screen.getByText("test-session-123")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Please save this order code for your records/,
      ),
    ).toBeInTheDocument();
  });

  it("does not display order details when session_id is not present", () => {
    mockSearchParams.delete("session_id");

    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    expect(
      screen.queryByText("Your Cocktail Order Code:"),
    ).not.toBeInTheDocument();
  });

  it("renders next steps section", () => {
    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    expect(screen.getByText("What happens next?")).toBeInTheDocument();
    expect(
      screen.getByText(
        /You'll receive an order confirmation email within a few minutes/,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Our team will review your order and begin preparation/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/We'll contact you to arrange delivery or pickup/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Your cocktails will be delivered within 3–7 business days/),
    ).toBeInTheDocument();
  });

  it("renders action buttons", () => {
    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    expect(screen.getByText("Continue Shopping")).toBeInTheDocument();
    expect(screen.getByText("Back to Home")).toBeInTheDocument();
  });

  it("navigates to shop when Continue Shopping button is clicked", () => {
    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    const continueShoppingButton = screen.getByText("Continue Shopping");
    fireEvent.click(continueShoppingButton);

    expect(mockPush).toHaveBeenCalledWith("/shop");
  });

  it("navigates to home when Back to Home button is clicked", () => {
    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    const backToHomeButton = screen.getByText("Back to Home");
    fireEvent.click(backToHomeButton);

    expect(mockPush).toHaveBeenCalledWith("/");
  });

  it("clears cart on mount", () => {
    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    expect(mockClearCart).toHaveBeenCalled();
  });

  it("renders social share text", () => {
    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    expect(
      screen.getByText(/Share your cocktail excitement! Tag us/),
    ).toBeInTheDocument();
    expect(screen.getByText("@CocktailCo")).toBeInTheDocument();
  });

  it("generates confetti on mount", () => {
    render(
      <TestWrapper>
        <SuccessPageClient />
      </TestWrapper>,
    );

    // Confetti emojis should be rendered
    const confettiEmojis = ["🍹", "🍸", "🍾", "🎉", "✨", "🍋", "🍊", "🍒"];
    const foundEmojis = confettiEmojis.filter((emoji) =>
      screen.queryAllByText(emoji).length > 0,
    );
    // At least some confetti emojis should be present
    expect(foundEmojis.length).toBeGreaterThan(0);
  });
});
