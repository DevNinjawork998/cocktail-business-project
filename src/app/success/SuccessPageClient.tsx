"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import styled, { keyframes } from "styled-components";

// Simple confetti animation
const confettiFall = keyframes`
  0% { transform: translateY(-100px) rotate(0deg); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translateY(600px) rotate(360deg); opacity: 0; }
`;

const Confetti = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  pointer-events: none;
  z-index: 10;

  span {
    position: absolute;
    font-size: 2rem;
    animation: ${confettiFall} 2.5s linear infinite;
    opacity: 0;
  }
`;

const SuccessContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const CocktailEmoji = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.currentSemantic.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  color: white;
  font-size: 2rem;
  box-shadow: 0 2px 8px ${({ theme }) => theme.currentSemantic.primaryLight};
`;

const SuccessTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.currentSemantic.text};
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SuccessMessage = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
`;

const OrderDetails = styled.div`
  background: ${({ theme }) => theme.currentSemantic.background};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1.5px solid ${({ theme }) => theme.currentSemantic.border};
  margin-bottom: 2rem;
  width: 100%;
  max-width: 500px;
`;

const OrderId = styled.div`
  font-size: 0.98rem;
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

const OrderIdValue = styled.span`
  display: inline-block;
  background: ${({ theme }) => theme.currentSemantic.primaryLight};
  color: ${({ theme }) => theme.currentSemantic.primary};
  font-family: "Menlo", "Monaco", "Consolas", monospace;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 999px;
  padding: 0.25em 0.9em;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  user-select: all;
  letter-spacing: 0.01em;
  border: 1.5px solid ${({ theme }) => theme.currentSemantic.primary};
  word-break: break-all;
  white-space: pre-wrap;
  max-width: 100%;
  overflow-wrap: anywhere;
  box-sizing: border-box;
`;

const NextSteps = styled.div`
  background: ${({ theme }) => theme.currentSemantic.primaryLight};
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 500px;
`;

const NextStepsTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.currentSemantic.primary};
  margin-bottom: 1rem;
`;

const NextStepsList = styled.ul`
  text-align: left;
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
  line-height: 1.6;
`;

const NextStepsItem = styled.li`
  margin-bottom: 0.5rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;
  min-width: 150px;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(215, 38, 96, 0.08);
  &:hover {
    transform: translateY(-2px) scale(1.04);
  }
`;

const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.currentSemantic.primary};
  color: white;
  &:hover {
    background: ${({ theme }) => theme.currentSemantic.primaryDark};
  }
`;

const SecondaryButton = styled(Button)`
  background: ${({ theme }) => theme.currentSemantic.background};
  color: ${({ theme }) => theme.currentSemantic.primary};
  border: 2px solid ${({ theme }) => theme.currentSemantic.primary};
  &:hover {
    background: ${({ theme }) => theme.currentSemantic.primaryLight};
    color: ${({ theme }) => theme.currentSemantic.primaryDark};
    border-color: ${({ theme }) => theme.currentSemantic.primaryDark};
  }
`;

const SocialShare = styled.div`
  margin-top: 2rem;
  color: ${({ theme }) => theme.currentSemantic.primary};
  font-size: 1.1rem;
  font-weight: 500;
`;

const funConfetti = ["🍹", "🍸", "🍾", "🎉", "✨", "🍋", "🍊", "🍒"];

const SuccessPageClient: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [confettiArray, setConfettiArray] = useState<
    {
      emoji: string;
      left: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const sessionIdParam = searchParams.get("session_id");
    if (sessionIdParam) {
      setSessionId(sessionIdParam);
    }
    clearCart();
    const confetti = Array.from({ length: 18 }).map(() => ({
      emoji: funConfetti[Math.floor(Math.random() * funConfetti.length)],
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setConfettiArray(confetti);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SuccessContainer>
      <Confetti>
        {confettiArray.map((c, i) => (
          <span
            key={i}
            style={{
              left: `${c.left}%`,
              animationDelay: `${c.delay}s`,
            }}
          >
            {c.emoji}
          </span>
        ))}
      </Confetti>
      <CocktailEmoji>🍹</CocktailEmoji>
      <SuccessIcon>✓</SuccessIcon>
      <SuccessTitle>Cheers! Your Order is Shaking Things Up!</SuccessTitle>
      <SuccessMessage>
        Thank you for being the life of the party!{" "}
        <span role="img" aria-label="cheers">
          🍸
        </span>
        <br />
        We&apos;re mixing your cocktails and getting them ready for delivery.
        Get ready to sip, savor, and celebrate!
      </SuccessMessage>
      {sessionId && (
        <OrderDetails>
          <OrderId>Your Cocktail Order Code:</OrderId>
          <OrderIdValue>{sessionId}</OrderIdValue>
          <p style={{ color: "#6b7280", fontSize: "0.9rem", marginTop: 8 }}>
            Please save this order code for your records. You&apos;ll also
            receive a confirmation email shortly.
          </p>
        </OrderDetails>
      )}
      <NextSteps>
        <NextStepsTitle>What happens next?</NextStepsTitle>
        <NextStepsList>
          <NextStepsItem>
            • You&apos;ll receive an order confirmation email within a few
            minutes
          </NextStepsItem>
          <NextStepsItem>
            • Our team will review your order and begin preparation
          </NextStepsItem>
          <NextStepsItem>
            • We&apos;ll contact you to arrange delivery or pickup
          </NextStepsItem>
          <NextStepsItem>
            • Your cocktails will be delivered within 3–7 business days
          </NextStepsItem>
        </NextStepsList>
      </NextSteps>
      <ActionButtons>
        <PrimaryButton onClick={() => router.push("/shop")}>
          Continue Shopping
        </PrimaryButton>
        <SecondaryButton onClick={() => router.push("/")}>
          Back to Home
        </SecondaryButton>
      </ActionButtons>
      <SocialShare>
        Share your cocktail excitement! Tag us <b>@CocktailCo</b> on Instagram
        🍹
      </SocialShare>
    </SuccessContainer>
  );
};

export default SuccessPageClient;
