import React from "react";
import { render, screen, fireEvent } from "../../../../__tests__/test-utils";
import ProductPageClient from "../ProductPageClient";
import { Product } from "@/data/serverProductService";

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

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    fill,
  }: {
    src: string;
    alt: string;
    fill?: boolean;
    sizes?: string;
    style?: React.CSSProperties;
  }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  },
}));

// Mock formatCurrency
jest.mock("@/app/lib/stripe", () => ({
  formatCurrency: jest.fn((amount: number) => `RM ${(amount / 100).toFixed(2)}`),
}));

// Mock window.open
const mockWindowOpen = jest.fn();
window.open = mockWindowOpen;

const mockProduct: Product = {
  id: "1",
  name: "Test Cocktail",
  subtitle: "Test Subtitle",
  description: "Test Description",
  longDescription: "<p>Test Long Description</p>",
  price: "RM 29.99",
  priceSubtext: "Premium quality",
  imageColor: "#ff6b6b",
  imageUrl: "/test-image.jpg",
  features: [
    { text: "Feature 1", color: "#ff6b6b" },
    { text: "Feature 2", color: "#4ecdc4" },
  ],
  ingredients: ["Ingredient 1", "Ingredient 2", "Ingredient 3"],
  productBrief: "Test product brief",
  nutritionFacts: [
    { label: "Calories", value: "100" },
    { label: "Sugar", value: "5g" },
  ],
};

const mockOtherProducts: Product[] = [
  {
    id: "2",
    name: "Other Cocktail 1",
    subtitle: "Other Subtitle 1",
    description: "Other Description 1",
    longDescription: "Other Long Description 1",
    price: "RM 19.99",
    priceSubtext: "Refreshing",
    imageColor: "#4ecdc4",
    features: [{ text: "Other Feature", color: "#4ecdc4" }],
  },
  {
    id: "3",
    name: "Other Cocktail 2",
    subtitle: "Other Subtitle 2",
    description: "Other Description 2",
    longDescription: "Other Long Description 2",
    price: "RM 24.99",
    priceSubtext: "Delicious",
    imageColor: "#45b7d1",
    imageUrl: "/other-image.jpg",
    features: [{ text: "Another Feature", color: "#45b7d1" }],
  },
];

describe("ProductPageClient", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("renders product name and subtitle", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(screen.getByText("Test Cocktail")).toBeInTheDocument();
      expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    });

    it("renders product image when imageUrl is provided", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      const image = screen.getByAltText("Test Cocktail");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", "/test-image.jpg");
    });

    it("renders placeholder when imageUrl is not provided", () => {
      const productWithoutImage = {
        ...mockProduct,
        imageUrl: undefined,
      };

      render(
        <ProductPageClient
          product={productWithoutImage}
          otherProducts={mockOtherProducts}
        />,
      );

      expect(screen.getByText("Test Cocktail")).toBeInTheDocument();
    });

    it("renders product features", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(screen.getByText("Feature 1")).toBeInTheDocument();
      expect(screen.getByText("Feature 2")).toBeInTheDocument();
    });

    it("renders product price and subtext", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(screen.getByText("Premium quality")).toBeInTheDocument();
    });

    it("renders product long description", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(screen.getByText("Test Long Description")).toBeInTheDocument();
    });
  });

  describe("Product Info Section", () => {
    it("renders product brief when provided", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(screen.getByText("Test product brief")).toBeInTheDocument();
    });

    it("renders fallback text when product brief is not provided", () => {
      const productWithoutBrief = {
        ...mockProduct,
        productBrief: undefined,
      };

      render(
        <ProductPageClient
          product={productWithoutBrief}
          otherProducts={mockOtherProducts}
        />,
      );

      expect(
        screen.getByText("Product description coming soon..."),
      ).toBeInTheDocument();
    });

    it("renders ingredients when provided", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(screen.getByText(/Ingredients:/)).toBeInTheDocument();
      expect(screen.getByText(/Ingredient 1, Ingredient 2, Ingredient 3/)).toBeInTheDocument();
    });

    it("renders fallback text when ingredients are not provided", () => {
      const productWithoutIngredients = {
        ...mockProduct,
        ingredients: undefined,
      };

      render(
        <ProductPageClient
          product={productWithoutIngredients}
          otherProducts={mockOtherProducts}
        />,
      );

      expect(
        screen.getByText("Ingredients information coming soon..."),
      ).toBeInTheDocument();
    });

    it("renders nutrition facts when provided", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(screen.getByText("Nutrition Facts")).toBeInTheDocument();
      expect(screen.getByText("Calories")).toBeInTheDocument();
      expect(screen.getByText("100")).toBeInTheDocument();
      expect(screen.getByText("Sugar")).toBeInTheDocument();
      expect(screen.getByText("5g")).toBeInTheDocument();
    });

    it("renders fallback text when nutrition facts are not provided", () => {
      const productWithoutNutrition = {
        ...mockProduct,
        nutritionFacts: undefined,
      };

      render(
        <ProductPageClient
          product={productWithoutNutrition}
          otherProducts={mockOtherProducts}
        />,
      );

      expect(
        screen.getByText("Nutrition information coming soon..."),
      ).toBeInTheDocument();
    });

    it("renders feature icons", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(screen.getByText("🌾")).toBeInTheDocument();
      expect(screen.getByText("High Fiber")).toBeInTheDocument();
      expect(screen.getByText("🍬")).toBeInTheDocument();
      expect(screen.getByText("Less Sugar*")).toBeInTheDocument();
      expect(screen.getByText("🌱")).toBeInTheDocument();
      expect(screen.getByText("Vegan")).toBeInTheDocument();
    });
  });

  describe("Sidebar", () => {
    it("renders sidebar title", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(screen.getByText("Our Flavors")).toBeInTheDocument();
    });

    it("renders other products in sidebar", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(screen.getByText("Other Cocktail 1")).toBeInTheDocument();
      expect(screen.getByText("Other Cocktail 2")).toBeInTheDocument();
    });

    it("renders sidebar product links correctly", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      const link1 = screen.getByText("Other Cocktail 1").closest("a");
      expect(link1).toHaveAttribute("href", "/shop/2");
    });

    it("renders sidebar product images when imageUrl is provided", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      const image = screen.getByAltText("Other Cocktail 2");
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", "/other-image.jpg");
    });

    it("renders placeholder for sidebar products without imageUrl", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(screen.getByText("Other Cocktail 1")).toBeInTheDocument();
    });
  });

  describe("WhatsApp Button", () => {
    it("renders WhatsApp button", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      expect(
        screen.getByText("Send a text through WhatsApp"),
      ).toBeInTheDocument();
    });

    it("opens WhatsApp when button is clicked", () => {
      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      const whatsappButton = screen.getByText(
        "Send a text through WhatsApp",
      ).closest("button");

      if (whatsappButton) {
        fireEvent.click(whatsappButton);

        expect(mockWindowOpen).toHaveBeenCalledWith(
          expect.stringContaining("wa.me/60146491165"),
          "_blank",
        );
        expect(mockWindowOpen).toHaveBeenCalledWith(
          expect.stringContaining("Test Cocktail"),
          "_blank",
        );
      }
    });

    it("handles WhatsApp error gracefully", () => {
      const consoleErrorSpy = jest
        .spyOn(console, "error")
        .mockImplementation(() => {});
      const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

      mockWindowOpen.mockReturnValueOnce(null);

      render(
        <ProductPageClient product={mockProduct} otherProducts={mockOtherProducts} />,
      );

      const whatsappButton = screen.getByText(
        "Send a text through WhatsApp",
      ).closest("button");

      if (whatsappButton) {
        fireEvent.click(whatsappButton);

        // Should fallback to window.location.href
        expect(mockWindowOpen).toHaveBeenCalled();
      }

      consoleErrorSpy.mockRestore();
      alertSpy.mockRestore();
    });
  });
});
