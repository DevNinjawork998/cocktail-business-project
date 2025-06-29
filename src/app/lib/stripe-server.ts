import Stripe from 'stripe';

// Debug logging for development and preview environments
const isDev = process.env.NODE_ENV === 'development';
const isPreview = process.env.VERCEL_ENV === 'preview';

if (isDev || isPreview) {
    console.log('🔧 Stripe Server Configuration:');
    console.log('- NODE_ENV:', process.env.NODE_ENV);
    console.log('- VERCEL_ENV:', process.env.VERCEL_ENV);
    console.log('- STRIPE_SECRET_KEY exists:', !!process.env.STRIPE_SECRET_KEY);
    console.log('- STRIPE_SECRET_KEY starts with:', process.env.STRIPE_SECRET_KEY?.substring(0, 7));
    console.log('- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY exists:', !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    console.log('- NEXT_PUBLIC_APP_URL:', process.env.NEXT_PUBLIC_APP_URL);
}

// Validate environment variables
if (!process.env.STRIPE_SECRET_KEY) {
    console.error('❌ STRIPE_SECRET_KEY environment variable is not set');
    throw new Error('STRIPE_SECRET_KEY environment variable is not set');
}

if (isDev || isPreview) {
    console.log('✅ Stripe server initialized successfully');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-05-28.basil',
}); 