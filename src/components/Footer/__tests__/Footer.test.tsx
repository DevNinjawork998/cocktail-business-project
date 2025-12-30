import React from "react";
import { render, screen } from "../../../__tests__/test-utils";
import Footer from "../Footer";
import "@jest/globals";

describe("Footer", () => {
  it("renders all social links with correct href and aria-label", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    // Check at least 4 social links
    expect(links.length).toBeGreaterThanOrEqual(4);
    links.forEach((link) => {
      expect(link).toHaveAttribute("href");
      expect(link).toHaveAttribute("aria-label");
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2024 Cocktail Business/i)).toBeInTheDocument();
  });

  it("renders main tagline", () => {
    render(<Footer />);
    expect(
      screen.getByText(/catch the vibe, not the hangover/i),
    ).toBeInTheDocument();
  });

  it("renders social section title", () => {
    render(<Footer />);
    expect(screen.getByText(/connect with us/i)).toBeInTheDocument();
  });
});
