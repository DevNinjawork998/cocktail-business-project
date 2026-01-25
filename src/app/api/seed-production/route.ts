import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const products = [
  {
    id: "tequila-sundown",
    name: "Tequila Sundown",
    subtitle: "Really party.",
    description: "Orange & Cranberry - For the life of the party",
    longDescription: `
      <h3>Perfect for Celebrations</h3>
      <p>Our Tequila Sundown blend captures the essence of a perfect sunset celebration. With vibrant orange and cranberry flavors, this cocktail mix brings the party to life with every sip.</p>
      <p>Crafted with premium ingredients and natural fruit extracts, it delivers a smooth, refreshing taste that's perfect for any occasion.</p>
    `,
    price: "$35.99",
    priceSubtext: "12 cans delivered one time",
    imageColor: "#8B4513",
    imageUrl: "/images/products/tequila-sundown.jpg",
    features: [
      { text: "Premium Quality", color: "#FF6B6B" },
      { text: "Natural Ingredients", color: "#4ECDC4" },
      { text: "No Artificial Colors", color: "#45B7D1" },
    ],
    ingredients: [
      "Carbonated Water",
      "OLISMART (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)",
      "Clementine Juice Concentrate",
      "Cassava Root Syrup",
      "Mandarin Juice Concentrate",
      "Apple Juice Concentrate",
      "Lemon Juice Concentrate",
      "Stevia Leaf",
      "Himalayan Pink Salt",
      "Natural Flavors",
    ],
    productBrief:
      "The summertime treat from your fave ice cream truck just got an upgrade. Creamy, vanilla goodness and a bright pop of tangerine and mandarin citrus join forces to bring back this iconic childhood flavor.",
    nutritionFacts: [
      { label: "Calories", value: "50" },
      { label: "Total Fat", value: "0g" },
      { label: "Sodium", value: "30mg" },
      { label: "Total Carbohydrate", value: "17g" },
      { label: "Dietary Fiber", value: "5g" },
      { label: "Total Sugars", value: "5g" },
      { label: "Includes Added Sugars", value: "0g" },
      { label: "Protein", value: "0g" },
      { label: "Vitamin C", value: "20%" },
    ],
  },
  {
    id: "dark-stormy",
    name: "Dark & Stormy",
    subtitle: "Really smooth.",
    description: "Ginger & Lime - For the smooth soul",
    longDescription: `
      <h3>Sophisticated & Smooth</h3>
      <p>The Dark & Stormy is a classic with a twist. Our blend combines the warming spice of ginger with the bright acidity of lime for a perfectly balanced cocktail experience.</p>
      <p>Ideal for those who appreciate complexity and depth in their drinks, this mix delivers a sophisticated flavor profile that's both refreshing and warming.</p>
    `,
    price: "$35.99",
    priceSubtext: "12 cans delivered one time",
    imageColor: "#2F4F4F",
    imageUrl: "/images/products/dark-stormy.jpg",
    features: [
      { text: "Spiced Ginger", color: "#FF6B6B" },
      { text: "Fresh Lime", color: "#4ECDC4" },
      { text: "Complex Flavor", color: "#45B7D1" },
    ],
    ingredients: [
      "Carbonated Water",
      "OLISMART (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)",
      "Ginger Root Extract",
      "Lime Juice Concentrate",
      "Cassava Root Syrup",
      "Natural Ginger Flavor",
      "Stevia Leaf",
      "Himalayan Pink Salt",
      "Natural Flavors",
    ],
    productBrief:
      "A sophisticated blend that combines the warming spice of ginger with the bright acidity of lime for a perfectly balanced cocktail experience that's both refreshing and warming.",
    nutritionFacts: [
      { label: "Calories", value: "45" },
      { label: "Total Fat", value: "0g" },
      { label: "Sodium", value: "25mg" },
      { label: "Total Carbohydrate", value: "15g" },
      { label: "Dietary Fiber", value: "4g" },
      { label: "Total Sugars", value: "4g" },
      { label: "Includes Added Sugars", value: "0g" },
      { label: "Protein", value: "0g" },
      { label: "Vitamin C", value: "15%" },
    ],
  },
  {
    id: "maca-martini",
    name: "Maca Martini",
    subtitle: "Really sophisticated.",
    description: "Coffee & Chocolate - For the smooth operator",
    longDescription: `
      <h3>Rich & Indulgent</h3>
      <p>The Maca Martini combines the rich, earthy flavors of maca root with decadent coffee and chocolate notes. This sophisticated blend is perfect for the discerning cocktail enthusiast.</p>
      <p>With its unique combination of superfood ingredients and classic cocktail elements, this drink offers both indulgence and wellness in every sip.</p>
    `,
    price: "$37.99",
    priceSubtext: "12 cans delivered one time",
    imageColor: "#CD5C5C",
    imageUrl: "/images/products/maca-martini.jpg",
    features: [
      { text: "Superfood Maca", color: "#FF6B6B" },
      { text: "Rich Coffee", color: "#4ECDC4" },
      { text: "Dark Chocolate", color: "#45B7D1" },
    ],
    ingredients: [
      "Carbonated Water",
      "OLISMART (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)",
      "Maca Root Powder",
      "Coffee Extract",
      "Cocoa Powder",
      "Cassava Root Syrup",
      "Natural Coffee Flavor",
      "Stevia Leaf",
      "Himalayan Pink Salt",
      "Natural Flavors",
    ],
    productBrief:
      "The Maca Martini combines the rich, earthy flavors of maca root with decadent coffee and chocolate notes for a sophisticated blend that offers both indulgence and wellness.",
    nutritionFacts: [
      { label: "Calories", value: "55" },
      { label: "Total Fat", value: "0.5g" },
      { label: "Sodium", value: "35mg" },
      { label: "Total Carbohydrate", value: "18g" },
      { label: "Dietary Fiber", value: "6g" },
      { label: "Total Sugars", value: "6g" },
      { label: "Includes Added Sugars", value: "0g" },
      { label: "Protein", value: "1g" },
      { label: "Vitamin C", value: "10%" },
    ],
  },
];

export async function POST() {
  try {
    console.log("Start seeding production database...");

    const results = [];
    for (const product of products) {
      const result = await prisma.product.upsert({
        where: { id: product.id },
        update: {
          name: product.name,
          subtitle: product.subtitle,
          description: product.description,
          longDescription: product.longDescription,
          price: product.price,
          priceSubtext: product.priceSubtext,
          imageColor: product.imageColor,
          imageUrl: product.imageUrl,
          features: product.features,
          ingredients: product.ingredients,
          productBrief: product.productBrief,
          nutritionFacts: product.nutritionFacts,
        },
        create: product,
      });
      results.push(result.id);
      console.log(`Created/Updated product with id: ${result.id}`);
    }

    console.log("Production seeding finished.");

    return NextResponse.json({
      success: true,
      message: "Production database seeded successfully",
      products: results,
    });
  } catch (error) {
    console.error("Error seeding production database:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
