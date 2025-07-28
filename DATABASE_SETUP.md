# Database Setup Guide

This guide will help you set up Prisma with a SQLite database for the cocktail business project.

## Prerequisites

1. Node.js and npm installed
2. No additional database server required (SQLite is file-based)

## Setup Steps

### 1. Database Configuration

The project is configured to use SQLite by default, which stores data in a local file. No additional setup is required.

If you want to use PostgreSQL instead, update the `prisma/schema.prisma` file:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

And add to your `.env` file:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/cocktail_business"
```

### 2. Database Migration

Run the following commands to set up your database:

```bash
# Generate Prisma client
npx prisma generate

# Create and apply database migrations
npx prisma migrate dev --name init

# Seed the database with initial product data
npm run db:seed
```

### 3. Verify Setup

You can verify the setup by:

1. Starting the development server: `npm run dev`
2. Visiting `/api/products` to see the products API
3. Checking the shop page to see products loaded from the database

## Database Schema

The database includes a `Product` table with the following fields:

- `id` (String, Primary Key)
- `name` (String)
- `subtitle` (String)
- `description` (String)
- `longDescription` (String)
- `price` (String)
- `priceSubtext` (String)
- `imageColor` (String)
- `features` (JSON)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get a specific product by ID

## Development Commands

- `npx prisma studio` - Open Prisma Studio to view/edit data
- `npx prisma migrate dev` - Create and apply new migrations
- `npx prisma generate` - Generate Prisma client
- `npm run db:seed` - Seed the database with initial data

## Production Deployment

For production deployment:

1. Set up a production PostgreSQL database
2. Update the `DATABASE_URL` environment variable
3. Run `npx prisma migrate deploy` to apply migrations
4. Run `npm run db:seed` to populate initial data

## Troubleshooting

- If you get connection errors, verify your `DATABASE_URL` is correct
- If migrations fail, you may need to reset the database: `npx prisma migrate reset`
- For Prisma client issues, regenerate: `npx prisma generate`
