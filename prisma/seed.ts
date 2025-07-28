import { PrismaClient } from '@prisma/client'

// Use regular client for seeding (works with both SQLite and PostgreSQL)
const prisma = new PrismaClient()

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
        features: [
            { text: "Premium Quality", color: "#FF6B6B" },
            { text: "Natural Ingredients", color: "#4ECDC4" },
            { text: "No Artificial Colors", color: "#45B7D1" },
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
        features: [
            { text: "Spiced Ginger", color: "#FF6B6B" },
            { text: "Fresh Lime", color: "#4ECDC4" },
            { text: "Complex Flavor", color: "#45B7D1" },
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
        features: [
            { text: "Superfood Maca", color: "#FF6B6B" },
            { text: "Rich Coffee", color: "#4ECDC4" },
            { text: "Dark Chocolate", color: "#45B7D1" },
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
        features: [
            { text: "Sweet Pineapple", color: "#FF6B6B" },
            { text: "Creamy Coconut", color: "#4ECDC4" },
            { text: "Island Vibes", color: "#45B7D1" },
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
        features: [
            { text: "Antioxidant Rich", color: "#FF6B6B" },
            { text: "Fresh Mint", color: "#4ECDC4" },
            { text: "Mixed Berries", color: "#45B7D1" },
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
        features: [
            { text: "Tart Lemon", color: "#FF6B6B" },
            { text: "Zesty Lime", color: "#4ECDC4" },
            { text: "Energy Boost", color: "#45B7D1" },
        ],
    },
]

async function main() {
    console.log('Start seeding...')

    for (const product of products) {
        const result = await prisma.product.upsert({
            where: { id: product.id },
            update: {},
            create: product,
        })
        console.log(`Created product with id: ${result.id}`)
    }

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }) 