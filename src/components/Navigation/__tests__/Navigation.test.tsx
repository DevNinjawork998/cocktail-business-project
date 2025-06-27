import React from "react";
import { render, screen, fireEvent } from "@/test-utils";
import Navigation from "../NavigationMain/Navigation";
import "@testing-library/jest-dom";

describe("Navigation", () => {
  beforeEach(() => {
    // Clear any previous renders
    jest.clearAllMocks();
  });

  it("renders navigation component with logo", () => {
    render(<Navigation />);

    // Check if logo is rendered
    expect(screen.getByText("COCKTAIL")).toBeInTheDocument();
    expect(screen.getByText("CO")).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Navigation />);

    // Check if all navigation links are present (use getAllByText to handle multiple instances)
    const homeLinks = screen.getAllByText("Home");
    const shopLinks = screen.getAllByText("Shop");
    const foundersLinks = screen.getAllByText("Founders");

    expect(homeLinks.length).toBeGreaterThan(0);
    expect(shopLinks.length).toBeGreaterThan(0);
    expect(foundersLinks.length).toBeGreaterThan(0);
  });

  it("renders mobile menu button", () => {
    render(<Navigation />);

    const mobileMenuButton = screen.getByLabelText("Toggle mobile menu");
    expect(mobileMenuButton).toBeInTheDocument();
  });

  it("mobile menu button is clickable", () => {
    render(<Navigation />);

    const mobileMenuButton = screen.getByLabelText("Toggle mobile menu");
    expect(mobileMenuButton).toBeInTheDocument();

    // Test that clicking doesn't throw an error
    expect(() => fireEvent.click(mobileMenuButton)).not.toThrow();
  });

  it("has correct navigation links with proper hrefs", () => {
    render(<Navigation />);

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
    render(<Navigation />);

    const logoLink = screen.getByText("COCKTAIL").closest("a");
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("has proper accessibility attributes", () => {
    render(<Navigation />);

    const mobileMenuButton = screen.getByLabelText("Toggle mobile menu");
    expect(mobileMenuButton).toHaveAttribute(
      "aria-label",
      "Toggle mobile menu"
    );
  });
});
