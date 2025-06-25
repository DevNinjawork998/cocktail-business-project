"use client";

import React from "react";
import { useTheme, colors, tailwindColors } from "@/theme";
import Footer from "./Footer";

interface ColorCardProps {
  name: string;
  hex: string;
  bgClass: string;
  textClass: string;
}

const ColorCard: React.FC<ColorCardProps> = ({
  name,
  hex,
  bgClass,
  textClass,
}) => (
  <div
    className={`${bgClass} p-6 rounded-lg shadow-md transition-transform hover:scale-105`}
  >
    <div className="bg-white bg-opacity-90 p-3 rounded mb-3">
      <h3 className={`${textClass} font-semibold text-lg capitalize`}>
        {name.replace(/([A-Z])/g, " $1").trim()}
      </h3>
      <p className="text-gray-600 text-sm font-mono">{hex}</p>
    </div>
    <div className="space-y-2">
      <div className={`${textClass} opacity-90 text-sm`}>Primary text</div>
      <div className={`${textClass} opacity-70 text-sm`}>Secondary text</div>
      <div className={`${textClass} opacity-50 text-sm`}>Muted text</div>
    </div>
  </div>
);

const ThemeShowcase: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const colorCards = [
    {
      name: "chocolateKisses",
      hex: colors.chocolateKisses.base,
      bgClass: tailwindColors.bg.chocolateKisses,
      textClass: "text-white",
    },
    {
      name: "mauvelous",
      hex: colors.mauvelous.base,
      bgClass: tailwindColors.bg.mauvelous,
      textClass: tailwindColors.text.chocolateKisses,
    },
    {
      name: "caramel",
      hex: colors.caramel.base,
      bgClass: tailwindColors.bg.caramel,
      textClass: tailwindColors.text.chocolateKisses,
    },
    {
      name: "royalOrange",
      hex: colors.royalOrange.base,
      bgClass: tailwindColors.bg.royalOrange,
      textClass: "text-white",
    },
    {
      name: "bittersweetShimmer",
      hex: colors.bittersweetShimmer.base,
      bgClass: tailwindColors.bg.bittersweetShimmer,
      textClass: "text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            Cocktail Business Theme
          </h1>
          <p className="text-lg text-foreground-muted mb-6">
            A sophisticated color palette inspired by cocktail culture
          </p>
          <button
            onClick={toggleTheme}
            className="px-6 py-3 bg-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Switch to {theme === "light" ? "Dark" : "Light"} Mode
          </button>
        </div>

        {/* Color Palette Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {colorCards.map((color) => (
            <ColorCard
              key={color.name}
              name={color.name}
              hex={color.hex}
              bgClass={color.bgClass}
              textClass={color.textClass}
            />
          ))}
        </div>

        {/* Usage Examples */}
        <div className="space-y-8">
          <div className="bg-surface border border-border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Usage Examples
            </h2>

            {/* Buttons */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-primary text-white rounded hover:opacity-90">
                  Primary Button
                </button>
                <button className="px-4 py-2 bg-secondary text-white rounded hover:opacity-90">
                  Secondary Button
                </button>
                <button className="px-4 py-2 bg-accent text-primary rounded hover:opacity-90">
                  Accent Button
                </button>
                <button className="px-4 py-2 bg-danger text-white rounded hover:opacity-90">
                  Danger Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-3">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-surface-hover border border-border rounded-lg p-4">
                  <h4 className="text-primary font-medium mb-2">Card Title</h4>
                  <p className="text-foreground-muted text-sm">
                    This is an example card with theme colors applied.
                  </p>
                </div>
                <div className="bg-primary-light bg-opacity-20 border border-primary-light rounded-lg p-4">
                  <h4 className="text-primary font-medium mb-2">
                    Highlighted Card
                  </h4>
                  <p className="text-foreground-muted text-sm">
                    This card uses the primary light color as a subtle
                    background.
                  </p>
                </div>
                <div className="bg-accent bg-opacity-30 border border-accent rounded-lg p-4">
                  <h4 className="text-primary font-medium mb-2">Accent Card</h4>
                  <p className="text-foreground-muted text-sm">
                    This card showcases the accent color with transparency.
                  </p>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div>
              <h3 className="text-lg font-medium mb-3">Typography</h3>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold text-primary">
                  Large Heading
                </h1>
                <h2 className="text-2xl font-semibold text-foreground">
                  Medium Heading
                </h2>
                <h3 className="text-xl font-medium text-foreground">
                  Small Heading
                </h3>
                <p className="text-foreground">
                  Regular paragraph text with normal weight.
                </p>
                <p className="text-foreground-muted">
                  Muted text for secondary information.
                </p>
                <p className="text-foreground-light">
                  Light text for subtle details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ThemeShowcase;
