import { loadStripe, type Stripe } from "@stripe/stripe-js";

// Client-side Stripe configuration
export const getStripe = async (): Promise<Stripe | null> => {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

    if (!publishableKey) {
        throw new Error('Stripe publishable key is not configured');
    }

    return await loadStripe(publishableKey);
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
    return Math.round(amount * 100);
};

// Convert cents to dollars from Stripe
export const fromStripeAmount = (amount: number) => {
    return amount / 100;
}; 