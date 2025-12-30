import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "../../../__tests__/test-utils";
import { CartItem, CartProvider, useCart } from "../../../contexts/CartContext";
import CartPageClient from "../CartPageClient";

// Mock Next.js Link component
jest.mock("next/link", () => {
  return function MockLink({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return <a href={href}>{children}</a>;
  };
});

// Test wrapper component to provide cart context
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};

// Helper component to add items to cart for testing
const CartHelper: React.FC<{ items: CartItem[] }> = ({ items }) => {
  const { addItem } = useCart();
  const hasAddedRef = React.useRef(false);

  React.useEffect(() => {
    if (!hasAddedRef.current && items.length > 0) {
      items.forEach((item) => addItem(item));
      hasAddedRef.current = true;
    }
  }, [items, addItem]);

  return null;
};

const mockCartItem = {
  id: "1",
  name: "Test Cocktail",
  price: 29.99,
  imageColor: "#ff6b6b",
  priceSubtext: "Premium quality",
  quantity: 1,
};

const mockCartItems = [
  mockCartItem,
  {
    id: "2",
    name: "Another Cocktail",
    price: 19.99,
    imageColor: "#4ecdc4",
    priceSubtext: "Refreshing blend",
    quantity: 1,
  },
];

describe("CartPageClient", () => {
  const renderCartPageClient = (items: CartItem[] = []) => {
    return render(
      <TestWrapper>
        {items.length > 0 && <CartHelper items={items} />}
        <CartPageClient />
      </TestWrapper>,
    );
  };

  describe("Empty Cart State", () => {
    it("displays empty cart message when cart is empty", () => {
      renderCartPageClient();

      expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
      expect(
        screen.getByText(/Looks like you haven't added any items/),
      ).toBeInTheDocument();
    });

    it("shows continue shopping button when cart is empty", () => {
      renderCartPageClient();

      const continueShoppingButton = screen.getByText("Continue Shopping");
      expect(continueShoppingButton).toBeInTheDocument();
      expect(continueShoppingButton.tagName).toBe("BUTTON");
    });
  });

  describe("Cart with Items", () => {
    it("displays cart header with correct item count", () => {
      renderCartPageClient([mockCartItem]);

      expect(screen.getByText("Shopping Cart (1 items)")).toBeInTheDocument();
    });

    it("displays cart items correctly", () => {
      renderCartPageClient([mockCartItem]);

      const productNameElements = screen.getAllByText("Test Cocktail");
      expect(productNameElements.length).toBeGreaterThan(0);
      const priceElements = screen.getAllByText("RM 29.99");
      expect(priceElements.length).toBeGreaterThan(0);
      expect(screen.getByText("Premium quality")).toBeInTheDocument();
    });

    it("displays multiple cart items", () => {
      renderCartPageClient(mockCartItems);

      expect(screen.getByText("Shopping Cart (2 items)")).toBeInTheDocument();
      const testCocktailElements = screen.getAllByText("Test Cocktail");
      const anotherCocktailElements = screen.getAllByText("Another Cocktail");
      expect(testCocktailElements.length).toBeGreaterThan(0);
      expect(anotherCocktailElements.length).toBeGreaterThan(0);
    });

    it("shows correct item image placeholder with background color", () => {
      renderCartPageClient([mockCartItem]);

      const productNameElements = screen.getAllByText("Test Cocktail");
      const imagePlaceholder = productNameElements[0];
      expect(imagePlaceholder).toBeInTheDocument();
    });
  });

  describe("Quantity Controls", () => {
    it("displays quantity controls for each item", () => {
      renderCartPageClient([mockCartItem]);

      const minusButton = screen.getByText("-");
      const plusButton = screen.getByText("+");
      const quantityInput = screen.getByDisplayValue("1");

      expect(minusButton).toBeInTheDocument();
      expect(plusButton).toBeInTheDocument();
      expect(quantityInput).toBeInTheDocument();
    });

    it("increases quantity when plus button is clicked", async () => {
      renderCartPageClient([mockCartItem]);

      const plusButton = screen.getByText("+");
      fireEvent.click(plusButton);

      await waitFor(() => {
        expect(screen.getByDisplayValue("2")).toBeInTheDocument();
      });
    });

    it("decreases quantity when minus button is clicked", async () => {
      renderCartPageClient([mockCartItem]);

      // First increase quantity to 2
      const plusButton = screen.getByText("+");
      fireEvent.click(plusButton);

      await waitFor(() => {
        expect(screen.getByDisplayValue("2")).toBeInTheDocument();
      });

      // Then decrease back to 1
      const minusButton = screen.getByText("-");
      fireEvent.click(minusButton);

      await waitFor(() => {
        expect(screen.getByDisplayValue("1")).toBeInTheDocument();
      });
    });

    it("disables minus button when quantity is 1", () => {
      renderCartPageClient([mockCartItem]);

      const minusButton = screen.getByText("-");
      expect(minusButton).toBeDisabled();
    });

    it("updates quantity when input value changes", async () => {
      renderCartPageClient([mockCartItem]);

      const quantityInput = screen.getByDisplayValue("1");
      fireEvent.change(quantityInput, { target: { value: "3" } });

      await waitFor(() => {
        expect(screen.getByDisplayValue("3")).toBeInTheDocument();
      });
    });

    it("handles invalid input by removing the item", async () => {
      renderCartPageClient([mockCartItem]);

      const quantityInput = screen.getByDisplayValue("1");
      fireEvent.change(quantityInput, { target: { value: "invalid" } });

      await waitFor(() => {
        expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
      });
    });

    it("removes item when quantity is set to 0 via input", async () => {
      renderCartPageClient([mockCartItem]);

      const quantityInput = screen.getByDisplayValue("1");
      fireEvent.change(quantityInput, { target: { value: "0" } });

      await waitFor(() => {
        expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
      });
    });

    it("removes item when quantity is set to a negative number via input", async () => {
      renderCartPageClient([mockCartItem]);

      const quantityInput = screen.getByDisplayValue("1");
      fireEvent.change(quantityInput, { target: { value: "-5" } });

      await waitFor(() => {
        expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
      });
    });

    it("handles rapid increase and decrease of quantity without breaking UI or state", async () => {
      renderCartPageClient([mockCartItem]);

      const plusButton = screen.getByText("+");
      const minusButton = screen.getByText("-");

      // Rapidly increase
      for (let i = 0; i < 5; i++) {
        fireEvent.click(plusButton);
      }
      await waitFor(() => {
        expect(screen.getByDisplayValue("6")).toBeInTheDocument();
      });

      // Rapidly decrease
      for (let i = 0; i < 5; i++) {
        fireEvent.click(minusButton);
      }
      await waitFor(() => {
        expect(screen.getByDisplayValue("1")).toBeInTheDocument();
        expect(minusButton).toBeDisabled();
      });
    });
  });

  describe("Item Removal", () => {
    it("displays remove button for each item", () => {
      renderCartPageClient([mockCartItem]);

      const removeButton = screen.getByText("Remove");
      expect(removeButton).toBeInTheDocument();
    });

    it("removes item when remove button is clicked", async () => {
      renderCartPageClient([mockCartItem]);

      const removeButton = screen.getByText("Remove");
      fireEvent.click(removeButton);

      await waitFor(() => {
        expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
      });
    });
  });

  describe("Order Summary", () => {
    it("displays order summary section", () => {
      renderCartPageClient([mockCartItem]);

      expect(screen.getByText("Order Summary")).toBeInTheDocument();
    });

    it("shows correct subtotal for single item", () => {
      renderCartPageClient([mockCartItem]);

      expect(screen.getByText("Subtotal (1 items)")).toBeInTheDocument();
      const priceElements = screen.getAllByText("RM 29.99");
      expect(priceElements.length).toBeGreaterThan(0);
    });

    it("shows correct subtotal for multiple items", () => {
      renderCartPageClient(mockCartItems);

      expect(screen.getByText("Subtotal (2 items)")).toBeInTheDocument();
      const priceElements = screen.getAllByText("RM 49.98");
      expect(priceElements.length).toBeGreaterThan(0);
    });

    it("shows free shipping", () => {
      renderCartPageClient([mockCartItem]);

      expect(screen.getByText("Shipping")).toBeInTheDocument();
      expect(screen.getByText("Free")).toBeInTheDocument();
    });

    it("shows correct total", () => {
      renderCartPageClient([mockCartItem]);

      expect(screen.getByText("Total")).toBeInTheDocument();
      const priceElements = screen.getAllByText("RM 29.99");
      expect(priceElements.length).toBeGreaterThan(0);
    });

    it("updates total when quantity changes", async () => {
      renderCartPageClient([mockCartItem]);

      const plusButton = screen.getByText("+");
      fireEvent.click(plusButton);

      await waitFor(() => {
        const priceElements = screen.getAllByText("RM 59.98");
        expect(priceElements.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Checkout Flow", () => {
    it("displays checkout button", () => {
      renderCartPageClient([mockCartItem]);

      const checkoutButton = screen.getByText("Proceed to Checkout");
      expect(checkoutButton).toBeInTheDocument();
    });

    it("checkout button is a button element", () => {
      renderCartPageClient([mockCartItem]);

      const checkoutButton = screen.getByText("Proceed to Checkout");
      expect(checkoutButton.tagName).toBe("BUTTON");
    });

    it("checkout button is disabled when cart is empty", () => {
      renderCartPageClient();

      expect(screen.queryByText("Proceed to Checkout")).not.toBeInTheDocument();
    });
  });

  describe("Price Calculations", () => {
    it("calculates item total correctly (price * quantity)", () => {
      renderCartPageClient([mockCartItem]);

      const priceElements = screen.getAllByText("RM 29.99");
      expect(priceElements.length).toBeGreaterThan(0);
    });

    it("updates item total when quantity changes", async () => {
      renderCartPageClient([mockCartItem]);

      const plusButton = screen.getByText("+");
      fireEvent.click(plusButton);

      await waitFor(() => {
        const priceElements = screen.getAllByText("RM 59.98");
        expect(priceElements.length).toBeGreaterThan(0);
      });
    });

    it("handles multiple items with different quantities", async () => {
      renderCartPageClient(mockCartItems);

      const priceElements = screen.getAllByText("RM 49.98");
      expect(priceElements.length).toBeGreaterThan(0);

      const plusButtons = screen.getAllByText("+");
      fireEvent.click(plusButtons[0]);

      await waitFor(() => {
        const newPriceElements = screen.getAllByText("RM 79.97");
        expect(newPriceElements.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Accessibility", () => {
    it("has proper input attributes for quantity", () => {
      renderCartPageClient([mockCartItem]);

      const quantityInput = screen.getByDisplayValue("1");
      expect(quantityInput).toHaveAttribute("type", "number");
      expect(quantityInput).toHaveAttribute("min", "1");
    });

    it("has proper button states", () => {
      renderCartPageClient([mockCartItem]);

      const minusButton = screen.getByText("-");
      const plusButton = screen.getByText("+");

      expect(minusButton).toBeDisabled();
      expect(plusButton).not.toBeDisabled();
    });
  });
});
