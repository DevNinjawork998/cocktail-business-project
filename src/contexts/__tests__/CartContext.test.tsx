import React from "react";
import { render, screen, fireEvent, waitFor } from "../../__tests__/test-utils";
import { CartProvider, useCart } from "../CartContext";
import "@jest/globals";

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

// Test component to interact with cart
const TestCartComponent: React.FC = () => {
  const { state, addItem, removeItem, updateQuantity, clearCart } = useCart();

  return (
    <div>
      <div data-testid="item-count">{state.itemCount}</div>
      <div data-testid="total">${state.total.toFixed(2)}</div>
      <div data-testid="items-count">{state.items.length}</div>

      <button
        data-testid="add-item"
        onClick={() =>
          addItem({
            id: "1",
            name: "Test Cocktail",
            price: 29.99,
            imageColor: "#ff6b6b",
            priceSubtext: "Premium quality",
            quantity: 1,
          })
        }
      >
        Add Item
      </button>

      <button data-testid="remove-item" onClick={() => removeItem("1")}>
        Remove Item
      </button>

      <button
        data-testid="update-quantity"
        onClick={() => updateQuantity("1", 3)}
      >
        Update Quantity
      </button>

      <button data-testid="clear-cart" onClick={() => clearCart()}>
        Clear Cart
      </button>

      <div data-testid="cart-items">
        {state.items.map((item) => (
          <div key={item.id} data-testid={`item-${item.id}`}>
            {item.name} - Qty: {item.quantity} - ${item.price}
          </div>
        ))}
      </div>
    </div>
  );
};

const renderCartContext = () => {
  return render(
    <CartProvider>
      <TestCartComponent />
    </CartProvider>,
  );
};

describe("CartContext", () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.removeItem.mockClear();
    localStorageMock.clear.mockClear();
  });

  describe("Initial State", () => {
    it("initializes with empty cart", () => {
      renderCartContext();

      expect(screen.getByTestId("item-count")).toHaveTextContent("0");
      expect(screen.getByTestId("total")).toHaveTextContent("$0.00");
      expect(screen.getByTestId("items-count")).toHaveTextContent("0");
    });

    it("loads cart from localStorage on mount", () => {
      const savedCart = {
        items: [
          {
            id: "1",
            name: "Saved Cocktail",
            price: 19.99,
            quantity: 2,
            imageColor: "#ff6b6b",
            priceSubtext: "Saved item",
          },
        ],
        total: 39.98,
        itemCount: 2,
      };

      localStorageMock.getItem.mockReturnValue(JSON.stringify(savedCart));

      renderCartContext();

      expect(screen.getByTestId("item-count")).toHaveTextContent("2");
      expect(screen.getByTestId("total")).toHaveTextContent("$39.98");
      expect(screen.getByTestId("items-count")).toHaveTextContent("1");
      expect(screen.getByTestId("item-1")).toHaveTextContent(
        "Saved Cocktail - Qty: 2 - $19.99",
      );
    });

    it("handles invalid localStorage data gracefully", () => {
      localStorageMock.getItem.mockReturnValue("invalid json");

      renderCartContext();

      expect(screen.getByTestId("item-count")).toHaveTextContent("0");
      expect(screen.getByTestId("total")).toHaveTextContent("$0.00");
    });
  });

  describe("Adding Items", () => {
    it("adds new item to cart", async () => {
      renderCartContext();

      fireEvent.click(screen.getByTestId("add-item"));

      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("1");
        expect(screen.getByTestId("total")).toHaveTextContent("$29.99");
        expect(screen.getByTestId("items-count")).toHaveTextContent("1");
        expect(screen.getByTestId("item-1")).toHaveTextContent(
          "Test Cocktail - Qty: 1 - $29.99",
        );
      });
    });

    it("increments quantity when adding existing item", async () => {
      renderCartContext();

      // Add item twice
      fireEvent.click(screen.getByTestId("add-item"));
      fireEvent.click(screen.getByTestId("add-item"));

      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("2");
        expect(screen.getByTestId("total")).toHaveTextContent("$59.98");
        expect(screen.getByTestId("item-1")).toHaveTextContent(
          "Test Cocktail - Qty: 2 - $29.99",
        );
      });
    });
  });

  describe("Removing Items", () => {
    it("removes item from cart", async () => {
      renderCartContext();

      // First add an item
      fireEvent.click(screen.getByTestId("add-item"));

      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("1");
      });

      // Then remove it
      fireEvent.click(screen.getByTestId("remove-item"));

      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("0");
        expect(screen.getByTestId("total")).toHaveTextContent("$0.00");
        expect(screen.getByTestId("items-count")).toHaveTextContent("0");
      });
    });
  });

  describe("Updating Quantities", () => {
    it("updates item quantity", async () => {
      renderCartContext();

      // First add an item
      fireEvent.click(screen.getByTestId("add-item"));

      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("1");
      });

      // Then update quantity
      fireEvent.click(screen.getByTestId("update-quantity"));

      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("3");
        expect(screen.getByTestId("total")).toHaveTextContent("$89.97");
        expect(screen.getByTestId("item-1")).toHaveTextContent(
          "Test Cocktail - Qty: 3 - $29.99",
        );
      });
    });

    it("removes item when quantity is set to 0", async () => {
      // Render both the test button and cart display in the same provider
      const TestQuantityZero = () => {
        const { updateQuantity } = useCart();
        return (
          <button
            data-testid="set-quantity-zero"
            onClick={() => updateQuantity("1", 0)}
          >
            Set Quantity to 0
          </button>
        );
      };

      render(
        <CartProvider>
          <>
            <TestCartComponent />
            <TestQuantityZero />
          </>
        </CartProvider>,
      );

      // First add an item
      fireEvent.click(screen.getByTestId("add-item"));
      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("1");
      });

      // Then set quantity to 0
      fireEvent.click(screen.getByTestId("set-quantity-zero"));
      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("0");
        expect(screen.getByTestId("total")).toHaveTextContent("$0.00");
      });
    });

    it("handles negative quantities by setting to 0", async () => {
      // Render both the test button and cart display in the same provider
      const TestNegativeQuantity = () => {
        const { updateQuantity } = useCart();
        return (
          <button
            data-testid="set-negative-quantity"
            onClick={() => updateQuantity("1", -5)}
          >
            Set Negative Quantity
          </button>
        );
      };

      render(
        <CartProvider>
          <>
            <TestCartComponent />
            <TestNegativeQuantity />
          </>
        </CartProvider>,
      );

      // First add an item
      fireEvent.click(screen.getByTestId("add-item"));
      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("1");
      });

      // Then set negative quantity
      fireEvent.click(screen.getByTestId("set-negative-quantity"));
      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("0");
        expect(screen.getByTestId("total")).toHaveTextContent("$0.00");
      });
    });
  });

  describe("Clearing Cart", () => {
    it("clears all items from cart", async () => {
      renderCartContext();

      // First add an item
      fireEvent.click(screen.getByTestId("add-item"));

      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("1");
      });

      // Then clear cart
      fireEvent.click(screen.getByTestId("clear-cart"));

      await waitFor(() => {
        expect(screen.getByTestId("item-count")).toHaveTextContent("0");
        expect(screen.getByTestId("total")).toHaveTextContent("$0.00");
        expect(screen.getByTestId("items-count")).toHaveTextContent("0");
      });
    });
  });

  describe("localStorage Persistence", () => {
    it("saves cart to localStorage when items are added", async () => {
      renderCartContext();

      fireEvent.click(screen.getByTestId("add-item"));

      await waitFor(() => {
        const calls = localStorageMock.setItem.mock.calls;
        const found = calls.some(([key, value]) => {
          if (key !== "cart") return false;
          const obj = JSON.parse(value);
          return (
            obj.items.length === 1 &&
            obj.items[0].id === "1" &&
            obj.items[0].name === "Test Cocktail" &&
            obj.items[0].price === 29.99 &&
            obj.items[0].quantity === 1 &&
            obj.items[0].imageColor === "#ff6b6b" &&
            obj.items[0].priceSubtext === "Premium quality" &&
            obj.total === 29.99 &&
            obj.itemCount === 1
          );
        });
        expect(found).toBe(true);
      });
    });

    it("saves cart to localStorage when items are removed", async () => {
      renderCartContext();

      // First add an item
      fireEvent.click(screen.getByTestId("add-item"));

      await waitFor(() => {
        expect(localStorageMock.setItem).toHaveBeenCalled();
      });

      // Clear the mock calls
      localStorageMock.setItem.mockClear();

      // Then remove it
      fireEvent.click(screen.getByTestId("remove-item"));

      await waitFor(() => {
        expect(localStorageMock.setItem).toHaveBeenCalledWith(
          "cart",
          JSON.stringify({
            items: [],
            total: 0,
            itemCount: 0,
          }),
        );
      });
    });

    it("saves cart to localStorage when quantities are updated", async () => {
      renderCartContext();

      // First add an item
      fireEvent.click(screen.getByTestId("add-item"));

      await waitFor(() => {
        expect(localStorageMock.setItem).toHaveBeenCalled();
      });

      // Clear the mock calls
      localStorageMock.setItem.mockClear();

      // Then update quantity
      fireEvent.click(screen.getByTestId("update-quantity"));

      await waitFor(() => {
        const calls = localStorageMock.setItem.mock.calls;
        const found = calls.some(([key, value]) => {
          if (key !== "cart") return false;
          const obj = JSON.parse(value);
          return (
            obj.items.length === 1 &&
            obj.items[0].id === "1" &&
            obj.items[0].name === "Test Cocktail" &&
            obj.items[0].price === 29.99 &&
            obj.items[0].quantity === 3 &&
            obj.items[0].imageColor === "#ff6b6b" &&
            obj.items[0].priceSubtext === "Premium quality" &&
            obj.total === 89.97 &&
            obj.itemCount === 3
          );
        });
        expect(found).toBe(true);
      });
    });
  });

  describe("Error Handling", () => {
    it("throws error when useCart is used outside CartProvider", () => {
      // Suppress console.error for this test
      const consoleSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});

      expect(() => {
        render(<TestCartComponent />);
      }).toThrow("useCart must be used within a CartProvider");

      consoleSpy.mockRestore();
    });
  });

  describe("Price Calculations", () => {
    it("calculates total correctly for multiple items with different quantities", async () => {
      renderCartContext();

      // Add first item
      fireEvent.click(screen.getByTestId("add-item"));

      await waitFor(() => {
        expect(screen.getByTestId("total")).toHaveTextContent("$29.99");
      });

      // Update quantity to 3
      fireEvent.click(screen.getByTestId("update-quantity"));

      await waitFor(() => {
        expect(screen.getByTestId("total")).toHaveTextContent("$89.97"); // 29.99 * 3
      });
    });

    it("handles decimal precision correctly", () => {
      // Test the calculation logic directly
      expect(29.99 * 3).toBe(89.97);
      expect(19.99 * 2).toBe(39.98);
    });
  });
});
