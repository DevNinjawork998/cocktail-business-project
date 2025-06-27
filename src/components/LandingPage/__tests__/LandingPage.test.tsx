import React from "react";
import { render, screen } from "../../../__tests__/test-utils";
import LandingPage from "../LandingPage";
import "@jest/globals";

describe("LandingPage", () => {
  it("renders hero section", () => {
    render(<LandingPage />);
    expect(screen.getByText(/premium meets/i)).toBeInTheDocument();
  });

  it("renders features section", () => {
    render(<LandingPage />);
    const premiumIngredients = screen.getAllByText(/premium ingredients/i);
    const fastDelivery = screen.getAllByText(/fast delivery/i);
    expect(premiumIngredients.length).toBeGreaterThan(0);
    expect(fastDelivery.length).toBeGreaterThan(0);
  });

  it("renders founders section", () => {
    render(<LandingPage />);
    expect(screen.getByText(/meet the visionaries/i)).toBeInTheDocument();
    const alexElements = screen.getAllByText(/alex/i);
    const marcusElements = screen.getAllByText(/marcus/i);
    expect(alexElements.length).toBeGreaterThan(0);
    expect(marcusElements.length).toBeGreaterThan(0);
  });

  it("renders stats section", () => {
    render(<LandingPage />);
    const happyCustomers = screen.getAllByText(/happy customers/i);
    const cocktailRecipes = screen.getAllByText(/cocktail recipes/i);
    const averageRating = screen.getAllByText(/average rating/i);
    const support = screen.getAllByText(/support/i);
    expect(happyCustomers.length).toBeGreaterThan(0);
    expect(cocktailRecipes.length).toBeGreaterThan(0);
    expect(averageRating.length).toBeGreaterThan(0);
    expect(support.length).toBeGreaterThan(0);
  });

  it("renders testimonials section", () => {
    render(<LandingPage />);
    expect(screen.getByText(/testimonials/i)).toBeInTheDocument();
  });

  it("renders all CTA links", () => {
    render(<LandingPage />);
    expect(
      screen.getByRole("link", { name: /start your journey/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /meet our founders/i })
    ).toBeInTheDocument();
  });
});
