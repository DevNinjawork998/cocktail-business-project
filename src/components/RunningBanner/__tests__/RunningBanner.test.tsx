import React from "react";
import { render, screen } from "../../../__tests__/test-utils";
import RunningBanner from "../RunningBanner";

// Mock bannerData
jest.mock("@/data/bannerData", () => ({
  bannerData: [
    {
      type: "message",
      content: "Free shipping on all orders over $50!",
    },
    {
      type: "image",
      src: "https://example.com/image1.jpg",
      alt: "Test Image 1",
    },
    {
      type: "message",
      content: "New flavor just dropped: Strawberry Basil!",
    },
  ],
}));

describe("RunningBanner", () => {
  it("renders all banner messages", () => {
    render(<RunningBanner />);

    // Banner data is duplicated, so messages appear multiple times
    expect(
      screen.getAllByText("Free shipping on all orders over $50!").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText("New flavor just dropped: Strawberry Basil!").length,
    ).toBeGreaterThan(0);
  });

  it("renders all banner images", () => {
    render(<RunningBanner />);

    const images = screen.getAllByAltText("Test Image 1");
    expect(images.length).toBeGreaterThan(0);
  });

  it("duplicates banner data for seamless loop", () => {
    render(<RunningBanner />);

    // Since bannerData is duplicated, we should see messages twice
    const messages = screen.getAllByText(
      "Free shipping on all orders over $50!",
    );
    expect(messages.length).toBe(2);
  });

  it("renders images with correct src", () => {
    render(<RunningBanner />);

    const images = screen.getAllByAltText("Test Image 1");
    images.forEach((image) => {
      expect(image).toHaveAttribute("src", "https://example.com/image1.jpg");
    });
  });

  it("renders images with correct alt text", () => {
    render(<RunningBanner />);

    expect(screen.getAllByAltText("Test Image 1").length).toBeGreaterThan(0);
  });

  it("renders both message and image types", () => {
    render(<RunningBanner />);

    // Banner data is duplicated, so messages appear multiple times
    expect(
      screen.getAllByText("Free shipping on all orders over $50!").length,
    ).toBeGreaterThan(0);
    expect(screen.getAllByAltText("Test Image 1").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText("New flavor just dropped: Strawberry Basil!").length,
    ).toBeGreaterThan(0);
  });
});
