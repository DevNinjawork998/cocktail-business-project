# Deployment Checklist

## Pre-Deployment Checklist

### ✅ Development Setup

- [x] Vercel CLI installed
- [x] Project builds successfully locally
- [x] All tests pass
- [x] Database seeded with products
- [x] API endpoints working

### 🔧 Prisma Cloud Setup

- [ ] Create Prisma Cloud account at https://cloud.prisma.io
- [ ] Create new project
- [ ] Set up PostgreSQL database
- [ ] Get connection strings:
  - [ ] DATABASE_URL (Prisma Accelerate)
  - [ ] DIRECT_URL (Direct PostgreSQL)

### 🚀 Vercel Deployment

- [ ] Link project to Vercel: `vercel link`
- [ ] Set environment variables:
  - [ ] DATABASE_URL
  - [ ] DIRECT_URL
- [ ] Deploy: `vercel --prod`

### 🗄️ Database Setup

- [ ] Run production migrations: `npx prisma migrate deploy`
- [ ] Seed production database: `npm run db:seed`
- [ ] Verify data in Prisma Studio

### ✅ Post-Deployment Verification

- [ ] Check deployment URL
- [ ] Test API endpoints:
  - [ ] `/api/products`
  - [ ] `/api/products/[id]`
- [ ] Test frontend pages:
  - [ ] `/shop`
  - [ ] `/shop/[productId]`
- [ ] Verify cart functionality
- [ ] Check Stripe integration

## Environment Variables

Make sure these are set in Vercel:

```env
DATABASE_URL="prisma://aws-us-east-1.prisma-data.com/__YOUR_ACCELERATE_URL__"
DIRECT_URL="postgresql://username:password@host:port/database"
NODE_ENV="production"
```

## Quick Commands

```bash
# Link to Vercel
vercel link

# Set environment variables
vercel env add DATABASE_URL
vercel env add DIRECT_URL

# Deploy
vercel --prod

# Check deployment
vercel ls

# View logs
vercel logs
```

## Troubleshooting

If deployment fails:

1. Check build logs in Vercel dashboard
2. Verify environment variables are set
3. Ensure Prisma client is generated
4. Check database connection in Prisma Cloud

## Success Indicators

✅ Build completes without errors  
✅ API endpoints return data  
✅ Frontend pages load correctly  
✅ Database queries work  
✅ No console errors in browser

Your app is ready for production! 🎉
