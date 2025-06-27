import React from "react";
import { render, screen } from "../../../__tests__/test-utils";
import Breadcrumb from "../Breadcrumb";
import "@jest/globals";

describe("Breadcrumb", () => {
  const mockItems = [
    { label: "Shop", href: "/shop" },
    { label: "Cocktails", href: "/shop/cocktails" },
    { label: "Mojito" },
  ];

  it("renders breadcrumb with all items", () => {
    render(<Breadcrumb items={mockItems} />);

    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Cocktails")).toBeInTheDocument();
    expect(screen.getByText("Mojito")).toBeInTheDocument();
  });

  it("renders home icon when showHome is true", () => {
    render(<Breadcrumb items={mockItems} showHome={true} />);

    // Home icon should be present (we can check for the SVG element)
    const homeIcon = document.querySelector("svg");
    expect(homeIcon).toBeInTheDocument();
  });

  it("does not render home icon when showHome is false", () => {
    render(<Breadcrumb items={mockItems} showHome={false} />);

    // Should not render home icon
    expect(screen.queryByText("Home")).not.toBeInTheDocument();
  });

  it("renders links for items with href", () => {
    render(<Breadcrumb items={mockItems} />);

    const shopLink = screen.getByText("Shop").closest("a");
    const cocktailsLink = screen.getByText("Cocktails").closest("a");

    expect(shopLink).toHaveAttribute("href", "/shop");
    expect(cocktailsLink).toHaveAttribute("href", "/shop/cocktails");
  });

  it("renders current item without link", () => {
    render(<Breadcrumb items={mockItems} />);

    const mojitoElement = screen.getByText("Mojito");
    const mojitoLink = mojitoElement.closest("a");

    // Current item should not be a link
    expect(mojitoLink).toBeNull();
  });

  it("renders separators between items", () => {
    render(<Breadcrumb items={mockItems} />);

    // Should have multiple separator icons (arrows)
    const separators = document.querySelectorAll("svg");
    expect(separators.length).toBeGreaterThan(1);
  });

  it("handles empty items array", () => {
    render(<Breadcrumb items={[]} />);

    // Should only render home icon
    const homeIcon = document.querySelector("svg");
    expect(homeIcon).toBeInTheDocument();

    // Should not render any breadcrumb items
    expect(screen.queryByText("Shop")).not.toBeInTheDocument();
  });

  it("handles single item without href", () => {
    const singleItem = [{ label: "Current Page" }];
    render(<Breadcrumb items={singleItem} />);

    expect(screen.getByText("Current Page")).toBeInTheDocument();
    expect(screen.getByText("Current Page").closest("a")).toBeNull();
  });

  it("handles single item with href", () => {
    const singleItem = [{ label: "Linked Page", href: "/linked-page" }];
    render(<Breadcrumb items={singleItem} />);

    // The last item should not be a link
    const link = screen.getByText("Linked Page").closest("a");
    expect(link).toBeNull();
  });

  it("renders with default showHome prop", () => {
    render(<Breadcrumb items={mockItems} />);

    // Should show home icon by default
    const homeIcon = document.querySelector("svg");
    expect(homeIcon).toBeInTheDocument();
  });

  it("has proper navigation structure", () => {
    render(<Breadcrumb items={mockItems} />);

    // Should have a nav element
    const nav = document.querySelector("nav");
    expect(nav).toBeInTheDocument();
  });
});
