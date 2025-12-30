import { PrismaClient } from "@prisma/client";

// Use regular client for seeding (works with both SQLite and PostgreSQL)
const prisma = new PrismaClient();

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
    imageUrl:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop&crop=center",
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
    imageUrl:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop&crop=center",
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
    imageUrl:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop&crop=center",
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
  {
    id: "tropical-twist",
    name: "Tropical Twist",
    subtitle: "Really exotic.",
    description: "Pineapple & Coconut - For the island dreamer",
    longDescription: `
      <h3>Escape to Paradise</h3>
      <p>Transport yourself to a tropical paradise with our Tropical Twist blend. The sweet, juicy flavor of pineapple perfectly complements the creamy richness of coconut.</p>
      <p>This refreshing cocktail mix brings the vacation vibes to any setting, making every sip feel like a mini getaway.</p>
    `,
    price: "$34.99",
    priceSubtext: "12 cans delivered one time",
    imageColor: "#FF6347",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    features: [
      { text: "Sweet Pineapple", color: "#FF6B6B" },
      { text: "Creamy Coconut", color: "#4ECDC4" },
      { text: "Island Vibes", color: "#45B7D1" },
    ],
    ingredients: [
      "Carbonated Water",
      "OLISMART (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)",
      "Pineapple Juice Concentrate",
      "Coconut Water",
      "Cassava Root Syrup",
      "Natural Pineapple Flavor",
      "Natural Coconut Flavor",
      "Stevia Leaf",
      "Himalayan Pink Salt",
      "Natural Flavors",
    ],
    productBrief:
      "Transport yourself to a tropical paradise with our Tropical Twist blend. The sweet, juicy flavor of pineapple perfectly complements the creamy richness of coconut.",
    nutritionFacts: [
      { label: "Calories", value: "48" },
      { label: "Total Fat", value: "0g" },
      { label: "Sodium", value: "28mg" },
      { label: "Total Carbohydrate", value: "16g" },
      { label: "Dietary Fiber", value: "5g" },
      { label: "Total Sugars", value: "5g" },
      { label: "Includes Added Sugars", value: "0g" },
      { label: "Protein", value: "0g" },
      { label: "Vitamin C", value: "25%" },
    ],
  },
  {
    id: "berry-bliss",
    name: "Berry Bliss",
    subtitle: "Really fresh.",
    description: "Mixed Berries & Mint - For the fresh enthusiast",
    longDescription: `
      <h3>Bursting with Freshness</h3>
      <p>Our Berry Bliss blend combines the antioxidant power of mixed berries with the refreshing coolness of mint. This vibrant cocktail mix is perfect for health-conscious cocktail lovers.</p>
      <p>With its bright, fruity flavors and herbal finish, it's the perfect choice for summer gatherings and healthy indulgence.</p>
    `,
    price: "$36.99",
    priceSubtext: "12 cans delivered one time",
    imageColor: "#8A2BE2",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=center",
    features: [
      { text: "Antioxidant Rich", color: "#FF6B6B" },
      { text: "Fresh Mint", color: "#4ECDC4" },
      { text: "Mixed Berries", color: "#45B7D1" },
    ],
    ingredients: [
      "Carbonated Water",
      "OLISMART (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)",
      "Mixed Berry Juice Concentrate",
      "Mint Extract",
      "Cassava Root Syrup",
      "Natural Berry Flavor",
      "Natural Mint Flavor",
      "Stevia Leaf",
      "Himalayan Pink Salt",
      "Natural Flavors",
    ],
    productBrief:
      "Our Berry Bliss blend combines the antioxidant power of mixed berries with the refreshing coolness of mint for a vibrant cocktail mix perfect for health-conscious cocktail lovers.",
    nutritionFacts: [
      { label: "Calories", value: "52" },
      { label: "Total Fat", value: "0g" },
      { label: "Sodium", value: "32mg" },
      { label: "Total Carbohydrate", value: "17g" },
      { label: "Dietary Fiber", value: "5g" },
      { label: "Total Sugars", value: "5g" },
      { label: "Includes Added Sugars", value: "0g" },
      { label: "Protein", value: "0g" },
      { label: "Vitamin C", value: "30%" },
    ],
  },
  {
    id: "citrus-splash",
    name: "Citrus Splash",
    subtitle: "Really zesty.",
    description: "Lemon & Lime - For the zesty spirit",
    longDescription: `
      <h3>Bright & Energizing</h3>
      <p>Wake up your taste buds with our Citrus Splash blend. The perfect combination of tart lemon and zesty lime creates an energizing cocktail experience that's both refreshing and invigorating.</p>
      <p>This classic citrus combination is ideal for those who love bright, clean flavors that refresh and revitalize.</p>
    `,
    price: "$33.99",
    priceSubtext: "12 cans delivered one time",
    imageColor: "#FFD700",
    imageUrl:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    features: [
      { text: "Tart Lemon", color: "#FF6B6B" },
      { text: "Zesty Lime", color: "#4ECDC4" },
      { text: "Energy Boost", color: "#45B7D1" },
    ],
    ingredients: [
      "Carbonated Water",
      "OLISMART (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)",
      "Lemon Juice Concentrate",
      "Lime Juice Concentrate",
      "Cassava Root Syrup",
      "Natural Lemon Flavor",
      "Natural Lime Flavor",
      "Stevia Leaf",
      "Himalayan Pink Salt",
      "Natural Flavors",
    ],
    productBrief:
      "Wake up your taste buds with our Citrus Splash blend. The perfect combination of tart lemon and zesty lime creates an energizing cocktail experience that's both refreshing and invigorating.",
    nutritionFacts: [
      { label: "Calories", value: "47" },
      { label: "Total Fat", value: "0g" },
      { label: "Sodium", value: "30mg" },
      { label: "Total Carbohydrate", value: "16g" },
      { label: "Dietary Fiber", value: "5g" },
      { label: "Total Sugars", value: "5g" },
      { label: "Includes Added Sugars", value: "0g" },
      { label: "Protein", value: "0g" },
      { label: "Vitamin C", value: "35%" },
    ],
  },
];

async function main() {
  console.log("Start seeding...");

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
    console.log(`Created/Updated product with id: ${result.id}`);
  }

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
