import styled from "styled-components";

export const ShowcaseSection = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.currentSemantic.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: serif;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 3rem;
    }
  `}
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  max-width: 700px;
  margin: 0 auto;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 1.25rem;
    }
  `}
`;

export const ProductsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};
  justify-content: center;
  align-items: stretch;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.sm}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
    }
    
    @media (min-width: ${theme.breakpoints.lg}) {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1000px;
      margin: 0 auto;
    }
  `}
`;

export const ProductCard = styled.a`
  background-color: ${({ theme }) => theme.currentSemantic.surface};
  border: 1px solid ${({ theme }) => theme.currentSemantic.borderLight};
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-decoration: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.sm}) {
      max-width: none;
      width: 100%;
    }
    
    @media (min-width: ${theme.breakpoints.lg}) {
      max-width: 280px;
      width: auto;
    }
  `}

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.royalOrange.base};
  }
`;

export const ProductImage = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: ${({ theme }) => theme.currentSemantic.backgroundSecondary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProductImagePlaceholder = styled.div<{ $bgColor: string }>`
  width: 100%;
  height: 100%;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: ${({ theme }) => theme.radii.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.875rem;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
`;

export const ProductContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ProductName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-align: center;
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex: 1;
  text-align: center;
`;

export const ProductTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  justify-content: center;
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.caramel.light};
  color: ${({ theme }) => theme.colors.chocolateKisses.base};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.75rem;
  font-weight: 600;
`;

export const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors.chocolateKisses.base};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.chocolateKisses.dark};
  }
`;
