import { loadStripe, type Stripe } from "@stripe/stripe-js";

// Debug logging for development and preview environments
const isDev = process.env.NODE_ENV === 'development';
const isPreview = process.env.VERCEL_ENV === 'preview';

// Client-side Stripe configuration
export const getStripe = async (): Promise<Stripe | null> => {
    if (isDev || isPreview) {
        console.log('🔧 Client-side Stripe Configuration:');
        console.log('- NODE_ENV:', process.env.NODE_ENV);
        console.log('- VERCEL_ENV:', process.env.VERCEL_ENV);
        console.log('- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY exists:', !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        console.log('- NEXT_PUBLIC_STRIPE_PUBLIC_KEY exists:', !!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
    }

    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

    if (!publishableKey) {
        console.error('❌ Stripe publishable key is not configured');
        throw new Error('Stripe publishable key is not configured');
    }

    if (isDev || isPreview) {
        console.log('✅ Loading Stripe with key starting with:', publishableKey.substring(0, 7));
    }

    const stripe = await loadStripe(publishableKey);

    if (isDev || isPreview) {
        console.log('✅ Stripe loaded successfully:', !!stripe);
    }

    return stripe;
};

// Currency formatting
export const formatCurrency = (amount: number, currency: string = 'myr') => {
    return new Intl.NumberFormat('en-MY', {
        style: 'currency',
        currency: currency.toUpperCase(),
    }).format(amount / 100);
};

// Convert dollars to cents for Stripe
export const toStripeAmount = (amount: number) => {
    const stripeAmount = Math.round(amount * 100);
    if (isDev || isPreview) {
        console.log(`💰 Converting ${amount} to Stripe amount: ${stripeAmount}`);
    }
    return stripeAmount;
};

// Convert cents to dollars from Stripe
export const fromStripeAmount = (amount: number) => {
    const dollarAmount = amount / 100;
    if (isDev || isPreview) {
        console.log(`💰 Converting Stripe amount ${amount} to dollars: ${dollarAmount}`);
    }
    return dollarAmount;
}; 