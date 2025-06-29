import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/app/lib/stripe-server';
import { toStripeAmount } from '@/app/lib/stripe';

// Define the CartItem type
interface CartItem {
    name: string;
    price: number;
    priceSubtext: string;
    quantity: number;
    // Add other fields if needed
}

// Debug logging for development and preview environments
const isDev = process.env.NODE_ENV === 'development';
const isPreview = process.env.VERCEL_ENV === 'preview';

export async function POST(request: NextRequest) {
    const requestId = Math.random().toString(36).substring(7);

    if (isDev || isPreview) {
        console.log(`🚀 [${requestId}] Checkout session creation started`);
        console.log(`🔧 [${requestId}] Environment:`, { NODE_ENV: process.env.NODE_ENV, VERCEL_ENV: process.env.VERCEL_ENV });
    }

    try {
        // Validate environment variables
        if (!process.env.NEXT_PUBLIC_APP_URL) {
            console.error(`❌ [${requestId}] NEXT_PUBLIC_APP_URL environment variable is not set`);
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        if (isDev || isPreview) {
            console.log(`✅ [${requestId}] Environment variables validated`);
        }

        const body = await request.json();
        const { items, customerInfo } = body;

        if (isDev || isPreview) {
            console.log(`📦 [${requestId}] Request body:`, {
                itemsCount: items?.length,
                customerInfo: customerInfo ? 'present' : 'missing',
                items: items?.map(item => ({ name: item.name, price: item.price, quantity: item.quantity }))
            });
        }

        if (!items || items.length === 0) {
            console.warn(`⚠️ [${requestId}] No items in cart`);
            return NextResponse.json(
                { error: 'No items in cart' },
                { status: 400 }
            );
        }

        if (!customerInfo) {
            console.warn(`⚠️ [${requestId}] No customer information provided`);
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

        if (isDev || isPreview) {
            console.log(`💰 [${requestId}] Line items created:`, lineItems.map(item => ({
                name: item.price_data.product_data.name,
                amount: item.price_data.unit_amount,
                quantity: item.quantity
            })));
        }

        // Create Stripe checkout session
        const sessionConfig = {
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
        };

        if (isDev || isPreview) {
            console.log(`🎯 [${requestId}] Creating Stripe session with config:`, {
                success_url: sessionConfig.success_url,
                cancel_url: sessionConfig.cancel_url,
                customer_email: sessionConfig.customer_email,
                items_count: sessionConfig.line_items.length
            });
        }

        const session = await stripe.checkout.sessions.create(sessionConfig);

        if (isDev || isPreview) {
            console.log(`✅ [${requestId}] Stripe session created successfully:`, {
                sessionId: session.id,
                url: session.url
            });
        }

        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error(`❌ [${requestId}] Error creating checkout session:`, error);

        // Provide more specific error messages
        if (error instanceof Error) {
            if (error.message.includes('STRIPE_SECRET_KEY')) {
                console.error(`🔑 [${requestId}] Stripe secret key configuration error`);
                return NextResponse.json(
                    { error: 'Payment service configuration error' },
                    { status: 500 }
                );
            }

            if (error.message.includes('Invalid API key')) {
                console.error(`🔑 [${requestId}] Invalid Stripe API key`);
                return NextResponse.json(
                    { error: 'Payment service configuration error' },
                    { status: 500 }
                );
            }
        }

        return NextResponse.json(
            { error: 'Failed to create checkout session' },
            { status: 500 }
        );
    }
} 