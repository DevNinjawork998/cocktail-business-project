# Quick Reference Guide

## Database Configuration Switching

### Current Status: ✅ Development Mode (SQLite)

Your application is currently running in development mode with SQLite database.

### Commands Summary

#### For Development (Current Setup)

```bash
# Switch to SQLite development mode
npm run db:dev

# Start development server
npm run dev

# Seed database with products
npm run db:seed
```

#### For Production (When Ready)

```bash
# Switch to PostgreSQL + Prisma Accelerate
npm run db:prod

# Set up environment variables first:
# DATABASE_URL="prisma://aws-us-east-1.prisma-data.com/__YOUR_ACCELERATE_URL__"
# DIRECT_URL="postgresql://username:password@host:port/database"

# Deploy migrations
npx prisma migrate deploy

# Seed production database
npm run db:seed
```

### Environment Variables Needed for Production

Create a `.env` file with:

```env
# For Prisma Accelerate
DATABASE_URL="prisma://aws-us-east-1.prisma-data.com/__YOUR_ACCELERATE_URL__"

# For direct database access (migrations)
DIRECT_URL="postgresql://username:password@host:port/database"
```

### What Each Mode Does

| Mode            | Database                | Use Case          | Performance  | Setup             |
| --------------- | ----------------------- | ----------------- | ------------ | ----------------- |
| **Development** | SQLite                  | Local development | Fast         | `npm run db:dev`  |
| **Production**  | PostgreSQL + Accelerate | Live deployment   | 1000x faster | `npm run db:prod` |

### Current Working Features

✅ Shop page loads products from database  
✅ Product detail pages work  
✅ API endpoints functional  
✅ Database seeded with 6 products

### Next Steps

1. Continue development with current SQLite setup
2. When ready for production, set up Prisma Cloud account
3. Get your connection strings
4. Run `npm run db:prod` to switch to production mode
