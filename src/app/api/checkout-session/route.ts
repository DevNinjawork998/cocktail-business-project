import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/app/lib/stripe-server';

// Debug logging for development and preview environments
const isDev = process.env.NODE_ENV === 'development';
const isPreview = process.env.VERCEL_ENV === 'preview';

export async function GET(request: NextRequest) {
    const requestId = Math.random().toString(36).substring(7);

    if (isDev || isPreview) {
        console.log(`🔍 [${requestId}] Checkout session retrieval started`);
        console.log(`🔧 [${requestId}] Environment:`, { NODE_ENV: process.env.NODE_ENV, VERCEL_ENV: process.env.VERCEL_ENV });
    }

    try {
        const { searchParams } = new URL(request.url);
        const sessionId = searchParams.get('session_id');

        if (isDev || isPreview) {
            console.log(`📋 [${requestId}] Session ID from query params:`, sessionId);
        }

        if (!sessionId) {
            console.warn(`⚠️ [${requestId}] No session ID provided`);
            return NextResponse.json(
                { error: 'Session ID is required' },
                { status: 400 }
            );
        }

        if (isDev || isPreview) {
            console.log(`🎯 [${requestId}] Retrieving Stripe session:`, sessionId);
        }

        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (isDev || isPreview) {
            console.log(`✅ [${requestId}] Session retrieved successfully:`, {
                sessionId: session.id,
                status: session.status,
                paymentStatus: session.payment_status,
                customerEmail: session.customer_email
            });
        }

        return NextResponse.json({ session });
    } catch (error) {
        console.error(`❌ [${requestId}] Error retrieving checkout session:`, error);

        if (error instanceof Error) {
            if (error.message.includes('No such session')) {
                console.error(`🔍 [${requestId}] Session not found`);
                return NextResponse.json(
                    { error: 'Session not found' },
                    { status: 404 }
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
            { error: 'Failed to retrieve checkout session' },
            { status: 500 }
        );
    }
} 