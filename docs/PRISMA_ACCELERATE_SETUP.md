# Prisma Accelerate Setup Guide

This guide will help you set up Prisma Accelerate for your cocktail business project.

## What is Prisma Accelerate?

Prisma Accelerate is a global database connection pooler and caching layer that:

- Reduces database connection overhead
- Provides global caching
- Optimizes performance for serverless and edge functions
- Scales automatically with your application

## Setup Steps

### 1. Prisma Accelerate Configuration

The project is now configured to use Prisma Accelerate with the edge client. You'll need to:

1. **Sign up for Prisma Accelerate** at <https://cloud.prisma.io>
2. **Create a new project** in Prisma Cloud
3. **Set up a database** (PostgreSQL recommended)
4. **Get your connection strings**

### 2. Environment Variables

Add these environment variables to your `.env` file:

```env
# Prisma Accelerate connection string
DATABASE_URL="prisma://aws-us-east-1.prisma-data.com/__YOUR_ACCELERATE_URL__"

# Direct database connection (for migrations)
DIRECT_URL="postgresql://username:password@host:port/database"
```

### 3. Database Migration

Run the following commands to set up your database:

#### For Development (SQLite)

```bash
# Switch to development configuration
npm run db:dev

# Seed the database with initial product data
npm run db:seed
```

#### For Production (PostgreSQL + Accelerate)

```bash
# Switch to production configuration
npm run db:prod

# Create and apply database migrations
npx prisma migrate deploy

# Seed the database with initial product data
npm run db:seed:prod
```

### 4. Production Deployment

For production deployment on Vercel:

1. **Add environment variables** in your Vercel project settings
2. **Deploy your application** - Prisma Accelerate will automatically handle connection pooling
3. **Monitor performance** in the Prisma Cloud dashboard

## Configuration Files

### prisma/schema.prisma

```prisma
generator client {
  provider = "prisma-client-js"
  previewFeatures = ["driverAdapters"]
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model Product {
  id              String   @id @default(cuid())
  name            String
  subtitle        String
  description     String
  longDescription String
  price           String
  priceSubtext    String
  imageColor      String
  imageUrl        String?
  features        Json
  ingredients     Json?    // Array of ingredient strings
  productBrief    String?  // Product introduction
  nutritionFacts  Json?    // Array of nutrition facts
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@map("products")
}
```

### src/lib/prisma.ts

```typescript
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Use Accelerate in production, regular client in development
const createPrismaClient = () => {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.DATABASE_URL?.includes("prisma://")
  ) {
    return new PrismaClient().$extends(withAccelerate());
  }
  return new PrismaClient();
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

### prisma/seed.ts

```typescript
import { PrismaClient } from "@prisma/client";

// Use regular client for seeding (works with both SQLite and PostgreSQL)
const prisma = new PrismaClient();

// Sample product data with enhanced information
const products = [
  {
    id: "tequila-sundown",
    name: "Tequila Sundown",
    subtitle: "Premium Tequila Blend",
    description: "A sophisticated blend of premium tequila with fresh citrus",
    longDescription:
      "Experience the perfect balance of premium tequila with hand-picked citrus fruits...",
    price: "$24.99",
    priceSubtext: "per bottle",
    imageColor: "#FF6B35",
    features: [
      { text: "Premium Quality", color: "#4CAF50" },
      { text: "Natural Ingredients", color: "#2196F3" },
      { text: "Craft Distilled", color: "#FF9800" },
    ],
    ingredients: [
      "Premium tequila",
      "Fresh lime juice",
      "Agave nectar",
      "Orange bitters",
    ],
    productBrief:
      "A sophisticated blend of premium tequila with fresh citrus, creating a smooth and refreshing cocktail experience.",
    nutritionFacts: [
      { label: "Calories", value: "180" },
      { label: "Sugar", value: "8g" },
      { label: "Alcohol", value: "12%" },
    ],
  },
  // ... more products
];
```

## Benefits of Prisma Accelerate

1. **Connection Pooling**: Efficiently manages database connections
2. **Global Caching**: Reduces database load with intelligent caching
3. **Edge Compatibility**: Works seamlessly with edge functions
4. **Auto-scaling**: Handles traffic spikes automatically
5. **Monitoring**: Built-in performance monitoring and analytics

## Development vs Production

### Development

- Use local SQLite for faster development
- Switch to PostgreSQL + Accelerate for testing

### Production

- Always use PostgreSQL + Prisma Accelerate
- Configure proper connection pooling
- Monitor performance metrics

## Troubleshooting

### Common Issues

1. **Connection Timeouts**: Check your `DIRECT_URL` configuration
2. **Migration Failures**: Ensure `DIRECT_URL` points to your actual database
3. **Performance Issues**: Monitor connection pool settings
4. **Schema Mismatches**: Run `npx prisma generate` after schema changes

### Commands

```bash
# Development setup (SQLite)
npm run db:dev

# Production setup (PostgreSQL + Accelerate)
npm run db:prod

# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate deploy

# Open Prisma Studio
npx prisma studio

# Reset database (development only)
npx prisma migrate reset

# Seed database
npm run db:seed

# Seed production database
npm run db:seed:prod
```

## Database Schema Evolution

### Recent Schema Updates

The database schema has been enhanced with additional product information:

- **ingredients**: JSON array of ingredient lists for each product
- **productBrief**: Detailed product descriptions and introductions
- **nutritionFacts**: Nutritional information tables
- **imageUrl**: Optional image URLs with color fallbacks

### Migration Process

```bash
# Apply migrations to production
npx prisma migrate deploy

# Resolve any failed migrations
npx prisma migrate resolve --applied <migration_name>

# Seed with new data structure
npm run db:seed:prod
```

## Next Steps

1. Set up your Prisma Cloud account
2. Configure your database connection strings
3. Deploy to production
4. Monitor performance in Prisma Cloud dashboard
5. Update product data with enhanced information

For more information, visit: <https://pris.ly/cli/accelerate>
