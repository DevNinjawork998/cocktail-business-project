import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { styledTheme as baseStyledTheme } from "../theme/styled-theme";

// Mock localStorage to prevent JSON parsing errors in tests
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
  writable: true,
});

// Patch styledTheme for tests to include currentSemantic and mode
const styledTheme = {
  ...baseStyledTheme,
  mode: "light" as const,
  currentSemantic: {
    ...baseStyledTheme.semantic,
    borderLight: "#eee",
    surface: "#fff",
  },
};

// Custom render function that includes providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={styledTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from "@testing-library/react";

// Override render method
export { customRender as render };

// Test data helpers
export const mockProduct = {
  id: "1",
  name: "Test Cocktail",
  description: "A delicious test cocktail",
  price: 29.99,
  image: "/test-image.jpg",
  category: "test-category",
  ingredients: ["test-ingredient-1", "test-ingredient-2"],
  healthBenefits: ["benefit-1", "benefit-2"],
};

export const mockProducts = [
  mockProduct,
  {
    ...mockProduct,
    id: "2",
    name: "Test Cocktail 2",
  },
];

// Common test constants
export const TEST_IDS = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
  BUTTON: "button",
  INPUT: "input",
  CARD: "card",
  MODAL: "modal",
} as const;
