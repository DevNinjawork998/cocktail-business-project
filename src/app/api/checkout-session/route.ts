import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/app/lib/stripe-server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json(
        { error: "Session ID is required" },
        { status: 400 },
      );
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return NextResponse.json({ session });
  } catch (error) {
    console.error("Error retrieving checkout session:", error);

    if (error instanceof Error) {
      if (error.message.includes("No such session")) {
        return NextResponse.json(
          { error: "Session not found" },
          { status: 404 },
        );
      }

      if (error.message.includes("Invalid API key")) {
        return NextResponse.json(
          { error: "Payment service configuration error" },
          { status: 500 },
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to retrieve checkout session" },
      { status: 500 },
    );
  }
}
