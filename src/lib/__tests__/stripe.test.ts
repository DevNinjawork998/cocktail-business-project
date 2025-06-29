import { getStripe } from '../stripe';

jest.mock('@stripe/stripe-js', () => ({
    loadStripe: jest.fn().mockResolvedValue({
        redirectToCheckout: jest.fn().mockResolvedValue({}),
    }),
}));

describe('getStripe', () => {
    it('returns a Stripe instance', async () => {
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = 'pk_test_123';
        const stripe = await getStripe();
        expect(stripe).toBeDefined();
        expect(typeof stripe?.redirectToCheckout).toBe('function');
    });

    it('throws if publishable key is missing', async () => {
        delete process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
        await expect(getStripe()).rejects.toThrow('Stripe publishable key is not configured');
    });
}); 