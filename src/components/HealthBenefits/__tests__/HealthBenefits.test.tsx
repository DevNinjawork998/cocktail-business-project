import React from "react";
import { render, screen, fireEvent } from "../../../__tests__/test-utils";
import HealthBenefits from "../HealthBenefits";
import "@jest/globals";

describe("HealthBenefits", () => {
  it("renders all ingredients", () => {
    render(<HealthBenefits />);
    const ashwagandhaElements = screen.getAllByText(/ashwagandha/i);
    const macaElements = screen.getAllByText(/maca/i);
    const gingerElements = screen.getAllByText(/ginger/i);
    const honeyElements = screen.getAllByText(/honey/i);
    expect(ashwagandhaElements.length).toBeGreaterThan(0);
    expect(macaElements.length).toBeGreaterThan(0);
    expect(gingerElements.length).toBeGreaterThan(0);
    expect(honeyElements.length).toBeGreaterThan(0);
  });

  it("renders headline and intro", () => {
    render(<HealthBenefits />);
    expect(screen.getByText(/health benefits/i)).toBeInTheDocument();
    expect(
      screen.getByText(/ever wonder how we made mocktails/i),
    ).toBeInTheDocument();
  });

  it("toggles ingredient description on click", () => {
    render(<HealthBenefits />);
    const ashwagandhaButton = screen.getAllByRole("button", {
      name: /ashwagandha/i,
    })[0];
    expect(ashwagandhaButton).toBeInTheDocument();
    fireEvent.click(ashwagandhaButton);
    const desc = screen.getByText(/ashwagandha is a powerful adaptogen/i);
    expect(desc).toBeInTheDocument();
    fireEvent.click(ashwagandhaButton);
    expect(desc).not.toBeVisible();
  });

  it("only one dropdown open at a time", () => {
    render(<HealthBenefits />);
    const ashwagandhaButton = screen.getAllByRole("button", {
      name: /ashwagandha/i,
    })[0];
    const macaButton = screen.getAllByRole("button", { name: /maca/i })[0];
    fireEvent.click(ashwagandhaButton);
    const ashwagandhaDesc = screen.getByText(
      /ashwagandha is a powerful adaptogen/i,
    );
    expect(ashwagandhaDesc).toBeInTheDocument();
    fireEvent.click(macaButton);
    expect(ashwagandhaDesc).not.toBeVisible();
    expect(
      screen.getByText(/maca root helps boost stamina/i),
    ).toBeInTheDocument();
  });
});
