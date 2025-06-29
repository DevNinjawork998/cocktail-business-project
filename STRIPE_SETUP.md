# Stripe Integration Setup Guide

This guide will help you set up Stripe payment gateway integration for your cocktail business project.

## Prerequisites

1. A Stripe account (sign up at [stripe.com](https://stripe.com))
2. Node.js and npm installed
3. Your cocktail business project set up

## Step 1: Get Your Stripe API Keys

1. Log in to your Stripe Dashboard
2. Go to **Developers** > **API keys**
3. Copy your **Publishable key** and **Secret key**
4. For testing, use the test keys (they start with `pk_test_` and `sk_test_`)

## Step 2: Set Up Environment Variables

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following environment variables:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Important:**

- Replace `your_stripe_secret_key_here` and `your_stripe_publishable_key_here` with your actual Stripe keys
- The `NEXT_PUBLIC_` prefix is required for client-side access
- For production, use your live keys (they start with `pk_live_` and `sk_live_`)

## Step 3: Install Dependencies

The required dependencies have already been installed:

- `stripe` - Server-side Stripe SDK
- `@stripe/stripe-js` - Client-side Stripe SDK

## Step 4: Test the Integration

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to your shop and add items to cart
3. Go to checkout
4. Fill in customer information
5. Choose "Pay with Card" option
6. You'll be redirected to Stripe's checkout page

## Step 5: Test Payment Flow

### Test Card Numbers

Use these test card numbers for testing:

- **Successful payment**: `4242 4242 4242 4242`
- **Declined payment**: `4000 0000 0000 0002`
- **Requires authentication**: `4000 0025 0000 3155`

### Test Data

- **Expiry date**: Any future date (e.g., `12/25`)
- **CVC**: Any 3 digits (e.g., `123`)
- **ZIP code**: Any valid ZIP code

## Step 6: Production Setup

When you're ready to go live:

1. **Switch to live keys** in your environment variables
2. **Update your domain** in `NEXT_PUBLIC_APP_URL`
3. **Configure webhook endpoints** in your Stripe Dashboard
4. **Set up proper error handling** and logging
5. **Test thoroughly** with small amounts first

## Features Included

### ✅ What's Already Implemented

1. **Stripe Checkout Integration**

   - Secure payment processing
   - Automatic tax calculation
   - Multiple payment methods
   - Mobile-responsive checkout

2. **Order Management**

   - Customer information collection
   - Order details storage
   - Payment confirmation

3. **Success Page**

   - Order confirmation
   - Customer details display
   - Order summary

4. **Error Handling**
   - Payment failure handling
   - Network error recovery
   - User-friendly error messages

### 🔧 Customization Options

1. **Shipping Options**

   - Currently set to free shipping
   - Can be modified in `/api/create-checkout-session/route.ts`

2. **Payment Methods**

   - Currently supports cards
   - Can add more payment methods in Stripe Dashboard

3. **Tax Calculation**

   - Automatic tax calculation based on customer location
   - Can be customized in Stripe Dashboard

4. **Currency**
   - Currently set to USD
   - Can be changed in the API route

## Troubleshooting

### Common Issues

1. **"Stripe is not loaded" error**

   - Check if `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set correctly
   - Ensure the Stripe script is loading (check browser console)

2. **"Failed to create checkout session" error**

   - Verify `STRIPE_SECRET_KEY` is correct
   - Check server logs for detailed error messages

3. **Payment not processing**

   - Ensure you're using test keys for development
   - Check if the card number is valid for testing

4. **Environment variables not working**
   - Restart your development server after adding environment variables
   - Ensure the `.env.local` file is in the project root

### Debug Mode

To enable debug mode for Stripe:

1. Add this to your environment variables:

   ```env
   STRIPE_DEBUG=true
   ```

2. Check browser console and server logs for detailed information

## Security Best Practices

1. **Never expose secret keys** in client-side code
2. **Always validate** payment data on the server
3. **Use HTTPS** in production
4. **Implement webhook verification** for production
5. **Store sensitive data** securely
6. **Regularly update** Stripe SDK versions

## Support

- **Stripe Documentation**: [stripe.com/docs](https://stripe.com/docs)
- **Stripe Support**: [support.stripe.com](https://support.stripe.com)
- **Project Issues**: Check the project's issue tracker

## Next Steps

After successful integration, consider implementing:

1. **Webhook handling** for payment status updates
2. **Order management system** for tracking orders
3. **Email notifications** for order confirmations
4. **Inventory management** integration
5. **Analytics and reporting** for sales data
6. **Customer account system** for order history
