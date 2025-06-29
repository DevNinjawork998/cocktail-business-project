import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "../../../__tests__/test-utils";
import CheckoutPageClient from "../CheckoutPageClient";
import { CartProvider } from "../../../contexts/CartContext";
import "@jest/globals";

// Mock useCart hook
const mockUseCart = jest.fn();
jest.mock("../../../contexts/CartContext", () => ({
  ...jest.requireActual("../../../contexts/CartContext"),
  useCart: () => mockUseCart(),
}));

// Mock window.open
const mockOpen = jest.fn();
Object.defineProperty(window, "open", {
  writable: true,
  value: mockOpen,
});

const renderWithCart = (component: React.ReactElement) => {
  return render(<CartProvider>{component}</CartProvider>);
};

beforeAll(() => {
  window.alert = jest.fn();
});

describe("CheckoutPageClient", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockOpen.mockReturnValue({ closed: false });
  });

  describe("Empty Cart", () => {
    beforeEach(() => {
      const mockCartState = {
        items: [],
        total: 0,
        itemCount: 0,
      };
      mockUseCart.mockReturnValue({
        state: mockCartState,
        clearCart: jest.fn(),
      });
    });

    it("shows empty cart message when cart is empty", () => {
      renderWithCart(<CheckoutPageClient />);

      expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
      expect(
        screen.getByText(
          "You need to add items to your cart before proceeding to checkout."
        )
      ).toBeInTheDocument();
      expect(screen.getByText("Back to Cart")).toBeInTheDocument();
    });

    it("navigates to cart when back button is clicked", () => {
      const mockPush = jest.fn();
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      jest.spyOn(require("next/navigation"), "useRouter").mockReturnValue({
        push: mockPush,
      });

      renderWithCart(<CheckoutPageClient />);

      fireEvent.click(screen.getByText("Back to Cart"));
      expect(mockPush).toHaveBeenCalledWith("/cart");
    });
  });

  describe("Payment Method Selection", () => {
    beforeEach(() => {
      // Mock cart with items
      const mockCartState = {
        items: [
          {
            id: "1",
            name: "Test Cocktail",
            price: 29.99,
            quantity: 2,
            imageColor: "#ff0000",
            priceSubtext: "Premium quality",
          },
        ],
        total: 59.98,
        itemCount: 2,
      };

      mockUseCart.mockReturnValue({
        state: mockCartState,
        clearCart: jest.fn(),
      });
    });

    it("renders payment method selection by default", () => {
      renderWithCart(<CheckoutPageClient />);

      expect(screen.getByText("Checkout")).toBeInTheDocument();
      expect(screen.getByText("Choose Payment Method")).toBeInTheDocument();
      expect(screen.getByText("Pay with Card")).toBeInTheDocument();
      expect(screen.getByText("Pay via WhatsApp")).toBeInTheDocument();
    });

    it("shows customer form when WhatsApp payment is selected", () => {
      renderWithCart(<CheckoutPageClient />);

      // Click on WhatsApp payment option
      fireEvent.click(screen.getByText("Pay via WhatsApp"));

      // Now the form should be visible
      expect(screen.getByText("Customer Information")).toBeInTheDocument();
      expect(screen.getByLabelText("Full Name *")).toBeInTheDocument();
      expect(screen.getByLabelText("Email Address *")).toBeInTheDocument();
      expect(screen.getByLabelText("Phone Number *")).toBeInTheDocument();
      expect(screen.getByLabelText("Delivery Address *")).toBeInTheDocument();
      expect(screen.getByLabelText("Special Instructions")).toBeInTheDocument();
    });
  });

  describe("Form Validation", () => {
    beforeEach(() => {
      // Mock cart with items
      const mockCartState = {
        items: [
          {
            id: "1",
            name: "Test Cocktail",
            price: 29.99,
            quantity: 2,
            imageColor: "#ff0000",
            priceSubtext: "Premium quality",
          },
        ],
        total: 59.98,
        itemCount: 2,
      };

      mockUseCart.mockReturnValue({
        state: mockCartState,
        clearCart: jest.fn(),
      });
    });

    it("shows validation error for empty required fields", async () => {
      renderWithCart(<CheckoutPageClient />);

      // First select WhatsApp payment to show the form
      fireEvent.click(screen.getByText("Pay via WhatsApp"));

      // Submit the form without filling required fields
      fireEvent.submit(screen.getByRole("form"));

      await waitFor(() => {
        expect(screen.getByText("Full name is required")).toBeInTheDocument();
        expect(screen.getByText("Invalid email address")).toBeInTheDocument();
        expect(
          screen.getByText("Phone number is required")
        ).toBeInTheDocument();
        expect(
          screen.getByText("Delivery address is required")
        ).toBeInTheDocument();
      });
    });

    it("validates email format", async () => {
      renderWithCart(<CheckoutPageClient />);

      // First select WhatsApp payment to show the form
      fireEvent.click(screen.getByText("Pay via WhatsApp"));

      const emailInput = screen.getByLabelText("Email Address *");
      fireEvent.change(emailInput, { target: { value: "invalid-email" } });
      fireEvent.blur(emailInput);

      await waitFor(() => {
        expect(screen.getByText("Invalid email address")).toBeInTheDocument();
      });
    });

    it("validates phone number format", async () => {
      renderWithCart(<CheckoutPageClient />);

      // First select WhatsApp payment to show the form
      fireEvent.click(screen.getByText("Pay via WhatsApp"));

      const phoneInput = screen.getByLabelText("Phone Number *");
      fireEvent.change(phoneInput, { target: { value: "123" } });
      fireEvent.blur(phoneInput);

      await waitFor(() => {
        expect(
          screen.getByText("Please enter a valid phone number")
        ).toBeInTheDocument();
      });
    });

    it("accepts valid phone number formats", async () => {
      renderWithCart(<CheckoutPageClient />);

      // First select WhatsApp payment to show the form
      fireEvent.click(screen.getByText("Pay via WhatsApp"));

      const phoneInput = screen.getByLabelText("Phone Number *");
      fireEvent.change(phoneInput, { target: { value: "+60123456789" } });
      fireEvent.blur(phoneInput);

      await waitFor(() => {
        expect(
          screen.queryByText("Please enter a valid phone number")
        ).not.toBeInTheDocument();
      });
    });
  });

  describe("Order Summary", () => {
    beforeEach(() => {
      const mockCartState = {
        items: [
          {
            id: "1",
            name: "Mojito",
            price: 29.99,
            quantity: 2,
            imageColor: "#00ff00",
            priceSubtext: "Premium quality",
          },
          {
            id: "2",
            name: "Margarita",
            price: 34.99,
            quantity: 1,
            imageColor: "#ff00ff",
            priceSubtext: "Classic recipe",
          },
        ],
        total: 94.97,
        itemCount: 3,
      };

      mockUseCart.mockReturnValue({
        state: mockCartState,
        clearCart: jest.fn(),
      });
    });

    it("displays order summary section", () => {
      renderWithCart(<CheckoutPageClient />);

      expect(screen.getByText("Order Summary")).toBeInTheDocument();
    });

    it("displays multiple items correctly", () => {
      renderWithCart(<CheckoutPageClient />);

      expect(screen.getByText("Order Summary")).toBeInTheDocument();
      // Use getAllByText since there are multiple elements with the same product names
      const mojitoElements = screen.getAllByText("Mojito");
      const margaritaElements = screen.getAllByText("Margarita");
      expect(mojitoElements.length).toBeGreaterThan(0);
      expect(margaritaElements.length).toBeGreaterThan(0);
      expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
      expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
    });

    it("displays correct prices and totals", () => {
      renderWithCart(<CheckoutPageClient />);

      expect(screen.getByText("RM 59.98")).toBeInTheDocument(); // Mojito x2
      expect(screen.getByText("RM 34.99")).toBeInTheDocument(); // Margarita x1
      expect(screen.getByText("Subtotal (3 items)")).toBeInTheDocument();
      // Use getAllByText since there are multiple elements with the same total
      const totalElements = screen.getAllByText("RM 94.97");
      expect(totalElements.length).toBeGreaterThan(0);
    });

    it("shows free shipping", () => {
      renderWithCart(<CheckoutPageClient />);

      expect(screen.getByText("Shipping")).toBeInTheDocument();
      expect(screen.getByText("Free")).toBeInTheDocument();
    });
  });

  describe("WhatsApp Integration", () => {
    beforeEach(() => {
      const mockCartState = {
        items: [
          {
            id: "1",
            name: "Test Cocktail",
            price: 29.99,
            quantity: 1,
            imageColor: "#ff0000",
            priceSubtext: "Premium quality",
          },
        ],
        total: 29.99,
        itemCount: 1,
      };

      mockUseCart.mockReturnValue({
        state: mockCartState,
        clearCart: jest.fn(),
      });
    });

    it("displays WhatsApp button after selecting WhatsApp payment", () => {
      renderWithCart(<CheckoutPageClient />);

      // First select WhatsApp payment to show the form
      fireEvent.click(screen.getByText("Pay via WhatsApp"));

      const whatsappButton = screen.getByText("Send Order via WhatsApp");
      expect(whatsappButton).toBeInTheDocument();
    });

    it("requires form fields to be filled before sending", () => {
      renderWithCart(<CheckoutPageClient />);

      // First select WhatsApp payment to show the form
      fireEvent.click(screen.getByText("Pay via WhatsApp"));

      const whatsappButton = screen.getByText("Send Order via WhatsApp");

      // Try to click without filling required fields
      fireEvent.click(whatsappButton);

      // Should show validation errors instead of calling window.open
      expect(mockOpen).not.toHaveBeenCalled();
    });
  });

  describe("Form Interactions", () => {
    beforeEach(() => {
      const mockCartState = {
        items: [
          {
            id: "1",
            name: "Test Cocktail",
            price: 29.99,
            quantity: 1,
            imageColor: "#ff0000",
            priceSubtext: "Premium quality",
          },
        ],
        total: 29.99,
        itemCount: 1,
      };

      mockUseCart.mockReturnValue({
        state: mockCartState,
        clearCart: jest.fn(),
      });
    });

    it("allows typing in all form fields", () => {
      renderWithCart(<CheckoutPageClient />);

      // First select WhatsApp payment to show the form
      fireEvent.click(screen.getByText("Pay via WhatsApp"));

      const nameInput = screen.getByLabelText("Full Name *");
      const emailInput = screen.getByLabelText("Email Address *");
      const phoneInput = screen.getByLabelText("Phone Number *");
      const addressInput = screen.getByLabelText("Delivery Address *");
      const notesInput = screen.getByLabelText("Special Instructions");

      fireEvent.change(nameInput, { target: { value: "Test Name" } });
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(phoneInput, { target: { value: "+60123456789" } });
      fireEvent.change(addressInput, { target: { value: "Test Address" } });
      fireEvent.change(notesInput, { target: { value: "Test Notes" } });

      expect(nameInput).toHaveValue("Test Name");
      expect(emailInput).toHaveValue("test@example.com");
      expect(phoneInput).toHaveValue("+60123456789");
      expect(addressInput).toHaveValue("Test Address");
      expect(notesInput).toHaveValue("Test Notes");
    });

    it("limits notes to 200 characters", () => {
      renderWithCart(<CheckoutPageClient />);

      // First select WhatsApp payment to show the form
      fireEvent.click(screen.getByText("Pay via WhatsApp"));

      const notesInput = screen.getByLabelText("Special Instructions");
      expect(notesInput).toHaveAttribute("maxlength", "200");
    });
  });
});
