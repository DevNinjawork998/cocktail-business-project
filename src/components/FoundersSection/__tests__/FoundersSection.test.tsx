import React from "react";
import { render, screen } from "../../../__tests__/test-utils";
import FoundersSection from "../FoundersSection";
import "@jest/globals";

describe("FoundersSection", () => {
  it("renders both founders", () => {
    render(<FoundersSection />);
    const alexElements = screen.getAllByText(/alex/i);
    const marcusElements = screen.getAllByText(/marcus/i);
    expect(alexElements.length).toBeGreaterThan(0);
    expect(marcusElements.length).toBeGreaterThan(0);
  });

  it("renders main title", () => {
    render(<FoundersSection />);
    expect(screen.getByText(/meet our founders/i)).toBeInTheDocument();
  });

  it("renders founder highlights", () => {
    render(<FoundersSection />);
    expect(screen.getByText(/alex's vision/i)).toBeInTheDocument();
    expect(screen.getByText(/marcus's mission/i)).toBeInTheDocument();
  });

  it("renders core values", () => {
    render(<FoundersSection />);
    expect(screen.getByText(/our core values/i)).toBeInTheDocument();
    expect(
      screen.getByText(/premium, ethically-sourced ingredients/i),
    ).toBeInTheDocument();
  });

  it("renders journey section", () => {
    render(<FoundersSection />);
    expect(screen.getByText(/our journey/i)).toBeInTheDocument();
    expect(screen.getByText(/founded/i)).toBeInTheDocument();
  });
});
