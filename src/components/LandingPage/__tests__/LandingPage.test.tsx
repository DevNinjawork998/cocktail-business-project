import React from "react";
import { render, screen } from "../../../__tests__/test-utils";
import LandingPage from "../LandingPage";
import "@jest/globals";

// Mock dynamic imports
jest.mock("../../RunningBanner/RunningBanner", () => {
  return function MockRunningBanner() {
    return <div data-testid="running-banner">Running Banner</div>;
  };
});

jest.mock("../../HeroSlideshow/HeroSlideshow", () => {
  return function MockHeroSlideshow() {
    return <div data-testid="hero-slideshow">Hero Slideshow</div>;
  };
});

describe("LandingPage", () => {
  it("renders badge text", () => {
    render(<LandingPage />);
    expect(screen.getByText(/Fresh. Functional. Delicious./i)).toBeInTheDocument();
  });

  it("renders main title", () => {
    render(<LandingPage />);
    expect(screen.getByText(/Mocktails that fuel/i)).toBeInTheDocument();
    expect(screen.getByText(/your day/i)).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<LandingPage />);
    expect(
      screen.getByText(
        /Crafted with the freshest fruits and powered by adaptogens/i,
      ),
    ).toBeInTheDocument();
  });

  it("renders CTA buttons", () => {
    render(<LandingPage />);
    expect(screen.getByRole("link", { name: /Shop Now/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Explore Flavors/i }),
    ).toBeInTheDocument();
  });

  it("CTA buttons link to shop page", () => {
    render(<LandingPage />);
    const shopNowLink = screen.getByRole("link", { name: /Shop Now/i });
    const exploreFlavorsLink = screen.getByRole("link", {
      name: /Explore Flavors/i,
    });

    expect(shopNowLink).toHaveAttribute("href", "/shop");
    expect(exploreFlavorsLink).toHaveAttribute("href", "/shop");
  });

  it("renders features grid", () => {
    render(<LandingPage />);
    expect(screen.getByText("5g")).toBeInTheDocument();
    expect(screen.getByText("Sugar or Less")).toBeInTheDocument();
    expect(screen.getByText("100%")).toBeInTheDocument();
    expect(screen.getByText("Fresh Fruit")).toBeInTheDocument();
    expect(screen.getByText("0")).toBeInTheDocument();
    expect(screen.getByText("Artificial")).toBeInTheDocument();
  });

  it("renders hero slideshow component", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("hero-slideshow")).toBeInTheDocument();
  });

  it("renders running banner component", () => {
    render(<LandingPage />);
    expect(screen.getByTestId("running-banner")).toBeInTheDocument();
  });
});
