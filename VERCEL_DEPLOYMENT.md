# Vercel Deployment Guide

This guide will help you deploy your cocktail business application to Vercel with Prisma Accelerate.

## Prerequisites

1. **Vercel Account**: Sign up at https://vercel.com
2. **Prisma Cloud Account**: Set up at https://cloud.prisma.io
3. **GitHub Repository**: Your code should be in a Git repository

## Step 1: Set Up Prisma Cloud

1. **Create Prisma Cloud Account**:

   - Visit https://cloud.prisma.io
   - Sign up with your GitHub account
   - Create a new project

2. **Set Up Database**:

   - Choose PostgreSQL as your database
   - Follow the setup wizard
   - Note down your connection strings

3. **Get Connection Strings**:
   - **DATABASE_URL**: Your Prisma Accelerate connection string
   - **DIRECT_URL**: Your direct PostgreSQL connection string

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):

   ```bash
   npm install -g vercel
   ```

2. **Link to Vercel**:

   ```bash
   vercel link
   ```

   - Follow the authentication prompts
   - Choose your Vercel account
   - Link to existing project or create new

3. **Set Environment Variables**:

   ```bash
   vercel env add DATABASE_URL
   vercel env add DIRECT_URL
   ```

   - Enter your Prisma Cloud connection strings when prompted

4. **Deploy**:
   ```bash
   vercel --prod
   ```

### Option B: Using Vercel Dashboard

1. **Connect Repository**:

   - Go to https://vercel.com/dashboard
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**:

   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Add Environment Variables**:

   - Go to Project Settings → Environment Variables
   - Add:
     - `DATABASE_URL`: Your Prisma Accelerate URL
     - `DIRECT_URL`: Your direct PostgreSQL URL

4. **Deploy**:
   - Click "Deploy"

## Step 3: Database Setup

After deployment, you need to set up your production database:

1. **Switch to Production Schema**:

   ```bash
   npm run db:prod
   ```

2. **Run Migrations**:

   ```bash
   npx prisma migrate deploy
   ```

3. **Seed Database**:
   ```bash
   npm run db:seed
   ```

**Important**: The build process automatically switches to production schema, so you don't need to manually run `npm run db:prod` before deployment.

## Step 4: Verify Deployment

1. **Check Your App**: Visit your Vercel deployment URL
2. **Test API Endpoints**:
   - `https://your-app.vercel.app/api/products`
   - `https://your-app.vercel.app/shop`

## Environment Variables

Make sure these are set in your Vercel project:

```env
# Prisma Accelerate connection string
DATABASE_URL="prisma://aws-us-east-1.prisma-data.com/__YOUR_ACCELERATE_URL__"

# Direct database connection (for migrations)
DIRECT_URL="postgresql://username:password@host:port/database"

# Next.js environment
NODE_ENV="production"
```

## Troubleshooting

### Common Issues

1. **Build Failures**:

   - Check that all dependencies are in `package.json`
   - Ensure Prisma client is generated: `npx prisma generate`

2. **Database Connection Issues**:

   - Verify environment variables are set correctly
   - Check Prisma Cloud dashboard for connection status

3. **API Timeouts**:
   - Increase function timeout in `vercel.json`
   - Check Prisma Accelerate connection pooling settings

### Useful Commands

```bash
# Check deployment status
vercel ls

# View deployment logs
vercel logs

# Pull environment variables
vercel env pull

# Redeploy
vercel --prod
```

## Performance Optimization

1. **Prisma Accelerate**: Automatically handles connection pooling
2. **Edge Functions**: API routes run on Vercel's edge network
3. **Caching**: Leverage Vercel's global CDN

## Monitoring

1. **Vercel Analytics**: Built-in performance monitoring
2. **Prisma Cloud**: Database performance and query analytics
3. **Error Tracking**: Monitor application errors in Vercel dashboard

## Next Steps

1. **Set up custom domain** (optional)
2. **Configure automatic deployments** from Git
3. **Set up monitoring and alerts**
4. **Optimize performance** based on analytics

Your application is now deployed and ready for production! 🚀
