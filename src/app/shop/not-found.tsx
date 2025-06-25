"use client";

import styled from "styled-components";
import Link from "next/link";
import { media } from "@/theme/styled-theme";

const NotFoundContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.currentSemantic.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const NotFoundContent = styled.div`
  text-align: center;
  max-width: 500px;
`;

const NotFoundTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.royalOrange.base};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  ${media.md} {
    font-size: 6rem;
  }
`;

const NotFoundSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.currentSemantic.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  ${media.md} {
    font-size: 2rem;
  }
`;

const NotFoundDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`;

const BackButton = styled(Link)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.royalOrange.base},
    ${({ theme }) => theme.colors.bittersweetShimmer.base}
  );
  color: white;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.full};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: inline-block;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Product Not Found</NotFoundSubtitle>
        <NotFoundDescription>
          Sorry, the product you&apos;re looking for doesn&apos;t exist. But
          don&apos;t worry, we have plenty of other amazing cocktail flavors
          waiting for you!
        </NotFoundDescription>
        <BackButton href="/shop">Explore Our Flavors</BackButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
}
