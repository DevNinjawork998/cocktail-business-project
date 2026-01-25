import React from "react";
import { render, screen, fireEvent } from "../../../__tests__/test-utils";
import Testimonials from "../Testimonials";

describe("Testimonials", () => {
  it("renders the section title correctly", () => {
    render(<Testimonials />);

    expect(screen.getByText("Customer Testimonials 🥂")).toBeInTheDocument();
  });

  it("renders the section subtitle correctly", () => {
    render(<Testimonials />);

    expect(
      screen.getByText(
        "Real words from happy customers who've tasted the magic ✨",
      ),
    ).toBeInTheDocument();
  });

  it("displays first 3 testimonials initially", () => {
    render(<Testimonials />);

    expect(screen.getByText(/Great tasting cocktail! Truffle Shuffle/)).toBeInTheDocument();
    expect(screen.getByText("Jenny")).toBeInTheDocument();
    expect(screen.getByText("Kat")).toBeInTheDocument();
    expect(screen.getByText("Jay")).toBeInTheDocument();
  });

  it("renders star ratings correctly", () => {
    render(<Testimonials />);

    // All testimonials have 5 stars, so we should see multiple filled stars
    const filledStars = screen.getAllByText("★");
    expect(filledStars.length).toBeGreaterThan(0);
  });

  it("renders customer names and titles", () => {
    render(<Testimonials />);

    expect(screen.getByText("Jenny")).toBeInTheDocument();
    expect(screen.getByText("Truffle Zombie Butler")).toBeInTheDocument();
  });

  it("renders navigation dots", () => {
    render(<Testimonials />);

    // With 6 testimonials and 3 per slide, we should have 2 dots
    const dots = screen.getAllByLabelText(/Go to slide/);
    expect(dots.length).toBe(2);
  });

  it("navigates to next slide when dot is clicked", () => {
    render(<Testimonials />);

    // Initially should show first 3 testimonials
    expect(screen.getByText("Jenny")).toBeInTheDocument();
    expect(screen.getByText("Kat")).toBeInTheDocument();
    expect(screen.getByText("Jay")).toBeInTheDocument();

    // Click second dot
    const secondDot = screen.getByLabelText("Go to slide 2");
    fireEvent.click(secondDot);

    // Should now show next 3 testimonials
    expect(screen.getByText("Melissa C")).toBeInTheDocument();
    expect(screen.getByText("Alex R")).toBeInTheDocument();
    expect(screen.getByText("Sarah M")).toBeInTheDocument();
  });

  it("navigates back to first slide when first dot is clicked", () => {
    render(<Testimonials />);

    // Go to second slide
    const secondDot = screen.getByLabelText("Go to slide 2");
    fireEvent.click(secondDot);

    expect(screen.getByText("Melissa C")).toBeInTheDocument();

    // Go back to first slide
    const firstDot = screen.getByLabelText("Go to slide 1");
    fireEvent.click(firstDot);

    expect(screen.getByText("Jenny")).toBeInTheDocument();
    expect(screen.getByText("Kat")).toBeInTheDocument();
    expect(screen.getByText("Jay")).toBeInTheDocument();
  });

  it("displays correct testimonial text", () => {
    render(<Testimonials />);

    expect(
      screen.getByText(
        "Great tasting cocktail! Truffle Shuffle. Feels guilt free. Love it so much though there's a bittersweet moment.",
      ),
    ).toBeInTheDocument();
  });

  it("renders customer avatars with initials", () => {
    render(<Testimonials />);

    expect(screen.getByText("J")).toBeInTheDocument(); // Jenny's initial
    expect(screen.getByText("K")).toBeInTheDocument(); // Kat's initial
  });
});
