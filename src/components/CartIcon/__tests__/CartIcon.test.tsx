import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "../../../__tests__/test-utils";
import { useRouter } from "next/navigation";
import { CartProvider, CartState } from "../../../contexts/CartContext";
import CartIcon from "../CartIcon";

// Mock Next.js router
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();

describe("CartIcon", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const renderCartIcon = (
    initialCartState: CartState = { items: [], itemCount: 0, total: 0 }
  ) => {
    return render(
      <CartProvider initialState={initialCartState}>
        <CartIcon />
      </CartProvider>
    );
  };

  describe("Cart Display", () => {
    it("should display cart icon without count when cart is empty", () => {
      renderCartIcon();

      const cartIcon = screen.getByTestId("cart-icon-button");
      expect(cartIcon).toBeInTheDocument();
      expect(screen.queryByTestId("cart-count")).not.toBeInTheDocument();
    });

    it("should display cart count when items are in cart", () => {
      const mockCartState = {
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 10,
            quantity: 2,
            imageColor: "#000",
            priceSubtext: "Test",
          },
          {
            id: "2",
            name: "Another Product",
            price: 15,
            quantity: 1,
            imageColor: "#111",
            priceSubtext: "Another",
          },
        ],
        itemCount: 3,
        total: 35,
      };

      renderCartIcon(mockCartState);

      expect(screen.getByTestId("cart-count")).toHaveTextContent("3");
    });

    it("should display correct count for single item", () => {
      const mockCartState = {
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 10,
            quantity: 1,
            imageColor: "#000",
            priceSubtext: "Test",
          },
        ],
        itemCount: 1,
        total: 10,
      };

      renderCartIcon(mockCartState);

      expect(screen.getByTestId("cart-count")).toHaveTextContent("1");
    });
  });

  describe("Navigation", () => {
    it("should navigate to cart page when clicked", () => {
      renderCartIcon();

      const cartIcon = screen.getByTestId("cart-icon-button");
      fireEvent.click(cartIcon);

      expect(mockPush).toHaveBeenCalledWith("/cart");
    });

    it("should be clickable when cart is empty", () => {
      renderCartIcon();

      const cartIcon = screen.getByTestId("cart-icon-button");
      expect(cartIcon).toBeInTheDocument();

      fireEvent.click(cartIcon);
      expect(mockPush).toHaveBeenCalledWith("/cart");
    });

    it("should be clickable when cart has items", () => {
      const mockCartState = {
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 10,
            quantity: 1,
            imageColor: "#000",
            priceSubtext: "Test",
          },
        ],
        itemCount: 1,
        total: 10,
      };

      renderCartIcon(mockCartState);

      const cartIcon = screen.getByTestId("cart-icon-button");
      expect(cartIcon).toBeInTheDocument();

      fireEvent.click(cartIcon);
      expect(mockPush).toHaveBeenCalledWith("/cart");
    });
  });

  describe("Toast Notifications", () => {
    it("should show toast when item count increases", async () => {
      const { rerender } = renderCartIcon({
        items: [],
        itemCount: 0,
        total: 0,
      });

      // Simulate item count increase
      const mockCartStateWithItems = {
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 10,
            quantity: 1,
            imageColor: "#000",
            priceSubtext: "Test",
          },
        ],
        itemCount: 1,
        total: 10,
      };

      rerender(
        <CartProvider initialState={mockCartStateWithItems}>
          <CartIcon />
        </CartProvider>
      );

      await waitFor(() => {
        expect(screen.getByTestId("cart-toast")).toBeInTheDocument();
      });
    });

    it("should not show toast on initial render", () => {
      const mockCartState = {
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 10,
            quantity: 1,
            imageColor: "#000",
            priceSubtext: "Test",
          },
        ],
        itemCount: 1,
        total: 10,
      };

      renderCartIcon(mockCartState);

      expect(screen.queryByTestId("cart-toast")).not.toBeInTheDocument();
    });

    it("should not show toast when item count decreases", async () => {
      const mockCartStateWithItems = {
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 10,
            quantity: 2,
            imageColor: "#000",
            priceSubtext: "Test",
          },
          {
            id: "2",
            name: "Another Product",
            price: 15,
            quantity: 1,
            imageColor: "#111",
            priceSubtext: "Another",
          },
        ],
        itemCount: 3,
        total: 35,
      };

      const { rerender } = renderCartIcon(mockCartStateWithItems);

      // Simulate item count decrease
      const mockCartStateReduced = {
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 10,
            quantity: 1,
            imageColor: "#000",
            priceSubtext: "Test",
          },
        ],
        itemCount: 1,
        total: 10,
      };

      rerender(
        <CartProvider initialState={mockCartStateReduced}>
          <CartIcon />
        </CartProvider>
      );

      await waitFor(() => {
        expect(screen.queryByTestId("cart-toast")).not.toBeInTheDocument();
      });
    });

    it("should hide toast after 3 seconds", async () => {
      const { rerender } = renderCartIcon({
        items: [],
        itemCount: 0,
        total: 0,
      });

      // Simulate item count increase
      const mockCartStateWithItems = {
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 10,
            quantity: 1,
            imageColor: "#000",
            priceSubtext: "Test",
          },
        ],
        itemCount: 1,
        total: 10,
      };

      rerender(
        <CartProvider initialState={mockCartStateWithItems}>
          <CartIcon />
        </CartProvider>
      );

      await waitFor(() => {
        expect(screen.getByTestId("cart-toast")).toBeInTheDocument();
      });

      // Fast-forward time
      jest.advanceTimersByTime(3000);

      await waitFor(() => {
        expect(screen.queryByTestId("cart-toast")).not.toBeInTheDocument();
      });
    });

    it("should show correct item count in toast message", async () => {
      const { rerender } = renderCartIcon({
        items: [],
        itemCount: 0,
        total: 0,
      });

      // Simulate item count increase to 5
      const mockCartStateWithItems = {
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 10,
            quantity: 3,
            imageColor: "#000",
            priceSubtext: "Test",
          },
          {
            id: "2",
            name: "Another Product",
            price: 15,
            quantity: 2,
            imageColor: "#111",
            priceSubtext: "Another",
          },
        ],
        itemCount: 5,
        total: 60,
      };

      rerender(
        <CartProvider initialState={mockCartStateWithItems}>
          <CartIcon />
        </CartProvider>
      );

      await waitFor(() => {
        expect(screen.getByTestId("cart-toast")).toHaveTextContent(
          "Item added to cart! (5 items)"
        );
      });
    });
  });

  describe("Accessibility", () => {
    it("should have proper button role and tabIndex", () => {
      renderCartIcon();

      const cartIcon = screen.getByTestId("cart-icon-button");
      expect(cartIcon).toHaveAttribute("role", "button");
      expect(cartIcon).toHaveAttribute("tabIndex", "0");
    });

    it("should be keyboard accessible", () => {
      renderCartIcon();

      const cartIcon = screen.getByTestId("cart-icon-button");

      // Test Enter key
      fireEvent.keyDown(cartIcon, { key: "Enter", code: "Enter" });
      expect(mockPush).toHaveBeenCalledWith("/cart");

      // Test Space key
      fireEvent.keyDown(cartIcon, { key: " ", code: "Space" });
      expect(mockPush).toHaveBeenCalledWith("/cart");
    });

    it("should have proper focus management", () => {
      renderCartIcon();

      const cartIcon = screen.getByTestId("cart-icon-button");
      cartIcon.focus();

      expect(cartIcon).toHaveFocus();
    });
  });

  describe("SVG Icon", () => {
    it("should render cart SVG icon", () => {
      renderCartIcon();

      const cartIcon = screen.getByTestId("cart-icon-button");
      const svg = cartIcon.querySelector("svg");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("width", "24");
      expect(svg).toHaveAttribute("height", "24");
      expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
    });

    it("should have proper SVG paths", () => {
      renderCartIcon();

      const cartIcon = screen.getByTestId("cart-icon-button");
      const svg = cartIcon.querySelector("svg");
      const paths = svg?.querySelectorAll("path");

      expect(paths).toHaveLength(3);
    });
  });

  describe("Edge Cases", () => {
    it("should handle very large item counts", () => {
      const mockCartState = {
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 10,
            quantity: 999,
            imageColor: "#000",
            priceSubtext: "Test",
          },
        ],
        itemCount: 999,
        total: 9990,
      };

      renderCartIcon(mockCartState);

      expect(screen.getByTestId("cart-count")).toHaveTextContent("999");
    });

    it("should handle zero item count correctly", () => {
      const mockCartState = {
        items: [],
        itemCount: 0,
        total: 0,
      };

      renderCartIcon(mockCartState);

      expect(screen.queryByTestId("cart-count")).not.toBeInTheDocument();
    });

    it("should handle rapid item count changes", async () => {
      const { rerender } = renderCartIcon({
        items: [],
        itemCount: 0,
        total: 0,
      });

      // Rapid changes
      const states = [
        {
          items: [
            {
              id: "1",
              name: "Product",
              price: 10,
              quantity: 1,
              imageColor: "#000",
              priceSubtext: "Test",
            },
          ],
          itemCount: 1,
          total: 10,
        },
        {
          items: [
            {
              id: "1",
              name: "Product",
              price: 10,
              quantity: 2,
              imageColor: "#000",
              priceSubtext: "Test",
            },
          ],
          itemCount: 2,
          total: 20,
        },
        {
          items: [
            {
              id: "1",
              name: "Product",
              price: 10,
              quantity: 3,
              imageColor: "#000",
              priceSubtext: "Test",
            },
          ],
          itemCount: 3,
          total: 30,
        },
      ];

      for (const state of states) {
        rerender(
          <CartProvider initialState={state}>
            <CartIcon />
          </CartProvider>
        );
      }

      // Should show the latest count
      expect(screen.getByTestId("cart-count")).toHaveTextContent("3");
    });
  });

  describe("Integration with Cart Context", () => {
    it("should update when cart context changes", async () => {
      const { rerender } = renderCartIcon({
        items: [],
        itemCount: 0,
        total: 0,
      });

      // Initial state - no count
      expect(screen.queryByTestId("cart-count")).not.toBeInTheDocument();

      // Add items
      const updatedState = {
        items: [
          {
            id: "1",
            name: "Test Product",
            price: 10,
            quantity: 2,
            imageColor: "#000",
            priceSubtext: "Test",
          },
        ],
        itemCount: 2,
        total: 20,
      };

      rerender(
        <CartProvider initialState={updatedState}>
          <CartIcon />
        </CartProvider>
      );

      expect(screen.getByTestId("cart-count")).toHaveTextContent("2");
    });

    it("should handle cart context with multiple items", () => {
      const mockCartState = {
        items: [
          {
            id: "1",
            name: "Product 1",
            price: 10,
            quantity: 2,
            imageColor: "#000",
            priceSubtext: "Test",
          },
          {
            id: "2",
            name: "Product 2",
            price: 15,
            quantity: 1,
            imageColor: "#111",
            priceSubtext: "Another",
          },
          {
            id: "3",
            name: "Product 3",
            price: 20,
            quantity: 3,
            imageColor: "#222",
            priceSubtext: "Third",
          },
        ],
        itemCount: 6,
        total: 100,
      };

      renderCartIcon(mockCartState);

      expect(screen.getByTestId("cart-count")).toHaveTextContent("6");
    });
  });
});
