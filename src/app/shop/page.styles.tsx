import styled from "styled-components";
import { media } from "@/theme/styled-theme";
import Link from "next/link";

export const ShopContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.currentSemantic.background};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  ${({ theme }) => theme.spacing.md};

  ${media.lg} {
    padding: ${({ theme }) => theme.spacing["4xl"]};
    ${({ theme }) => theme.spacing.xl};
  }
`;

export const ShopHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
`;

export const ShopTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.currentSemantic.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  ${media.lg} {
    font-size: 3.5rem;
  }
`;

export const ShopSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;

  ${media.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// ProductCard can be rendered as a link (default) or as a div/button using the 'as' prop.
// Example: <ProductCard as="div">...</ProductCard> or <ProductCard href="...">...</ProductCard>
export const ProductCard = styled(Link)`
  background: ${({ theme }) => theme.currentSemantic.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.currentSemantic.borderLight};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.royalOrange.base};
  }
`;

export const ProductImageContainer = styled.div`
  background: ${({ theme }) => theme.currentSemantic.backgroundSecondary};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 3 / 4;
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const ProductImage = styled.div<{ $bgColor: string }>`
  width: 100%;
  height: 100%;
  max-width: 200px;
  max-height: 300px;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.currentSemantic.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-align: center;
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
  text-align: center;
  line-height: 1.6;
  flex: 1;
`;
