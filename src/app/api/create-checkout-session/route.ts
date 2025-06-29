import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe-server';
import { toStripeAmount } from '@/lib/stripe';

// Define the CartItem type
interface CartItem {
    name: string;
    price: number;
    priceSubtext: string;
    quantity: number;
    // Add other fields if needed
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { items, customerInfo } = body;

        if (!items || items.length === 0) {
            return NextResponse.json(
                { error: 'No items in cart' },
                { status: 400 }
            );
        }

        if (!customerInfo) {
            return NextResponse.json(
                { error: 'Customer information is required' },
                { status: 400 }
            );
        }

        // Create line items for Stripe
        const lineItems = (items as CartItem[]).map((item) => ({
            price_data: {
                currency: 'myr',
                product_data: {
                    name: item.name,
                    description: item.priceSubtext,
                    images: [], // You can add product images here
                },
                unit_amount: toStripeAmount(item.price),
            },
            quantity: item.quantity,
        }));

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout`,
            customer_email: customerInfo.email,
            metadata: {
                customerName: customerInfo.name,
                customerPhone: customerInfo.phone,
                customerAddress: customerInfo.address,
                customerNotes: customerInfo.notes || '',
                orderItems: JSON.stringify(items),
            },
            shipping_address_collection: {
                allowed_countries: ['MY'], // Only Malaysia
            },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: 'fixed_amount',
                        fixed_amount: {
                            amount: 0, // Free shipping
                            currency: 'myr',
                        },
                        display_name: 'Free shipping',
                        delivery_estimate: {
                            minimum: {
                                unit: 'business_day',
                                value: 3,
                            },
                            maximum: {
                                unit: 'business_day',
                                value: 7,
                            },
                        },
                    },
                },
            ],
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        return NextResponse.json(
            { error: 'Failed to create checkout session' },
            { status: 500 }
        );
    }
} 