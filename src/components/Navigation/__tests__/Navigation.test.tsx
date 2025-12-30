import React from "react";
import { render, screen, fireEvent } from "../../../__tests__/test-utils";
import Navigation from "../Navigation";
import { CartProvider } from "../../../contexts/CartContext";
import "@testing-library/jest-dom";
import "@jest/globals";

describe("Navigation", () => {
  beforeEach(() => {
    // Clear any previous renders
    jest.clearAllMocks();
  });

  const renderNavigation = () => {
    return render(
      <CartProvider>
        <Navigation />
      </CartProvider>,
    );
  };

  it("renders navigation component with logo", () => {
    renderNavigation();

    // Check if logo is rendered
    expect(screen.getByText("COCKTAIL")).toBeInTheDocument();
    expect(screen.getByText("CO")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    renderNavigation();

    // Check if all navigation links are present (use getAllByText to handle multiple instances)
    const homeLinks = screen.getAllByText("Home");
    const shopLinks = screen.getAllByText("Shop");
    const foundersLinks = screen.getAllByText("Founders");

    expect(homeLinks.length).toBeGreaterThan(0);
    expect(shopLinks.length).toBeGreaterThan(0);
    expect(foundersLinks.length).toBeGreaterThan(0);
  });

  it("renders mobile menu button", () => {
    renderNavigation();

    const mobileMenuButton = screen.getByLabelText("Toggle mobile menu");
    expect(mobileMenuButton).toBeInTheDocument();
  });

  it("mobile menu button is clickable", () => {
    renderNavigation();

    const mobileMenuButton = screen.getByLabelText("Toggle mobile menu");
    expect(mobileMenuButton).toBeInTheDocument();

    // Test that clicking doesn't throw an error
    expect(() => fireEvent.click(mobileMenuButton)).not.toThrow();
  });

  it("has correct navigation links with proper hrefs", () => {
    renderNavigation();

    // Use getAllByText and get the first instance for each link
    const homeLinks = screen.getAllByText("Home");
    const shopLinks = screen.getAllByText("Shop");
    const foundersLinks = screen.getAllByText("Founders");

    const homeLink = homeLinks[0].closest("a");
    const shopLink = shopLinks[0].closest("a");
    const foundersLink = foundersLinks[0].closest("a");

    expect(homeLink).toHaveAttribute("href", "/");
    expect(shopLink).toHaveAttribute("href", "/shop");
    expect(foundersLink).toHaveAttribute("href", "/founders");
  });

  it("logo links to home page", () => {
    renderNavigation();

    const logoLink = screen.getByText("COCKTAIL").closest("a");
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("has proper accessibility attributes", () => {
    renderNavigation();

    const mobileMenuButton = screen.getByLabelText("Toggle mobile menu");
    expect(mobileMenuButton).toHaveAttribute(
      "aria-label",
      "Toggle mobile menu",
    );
  });
});
