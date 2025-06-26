import styled from "styled-components";
import { media } from "@/theme/styled-theme";
import Link from "next/link";

export const ProductPageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.currentSemantic.background};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};

  ${media.lg} {
    padding: ${({ theme }) => theme.spacing["2xl"]};
    ${({ theme }) => theme.spacing.xl};
  }
`;

export const ProductLayout = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  ${media.lg} {
    grid-template-columns: 1fr 300px;
    gap: ${({ theme }) => theme.spacing["3xl"]};
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  ${media.md} {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing["2xl"]};
  }
`;

export const ProductImageSection = styled.div`
  background: ${({ theme }) => theme.colors.caramel.light};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing["3xl"]};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;

  ${media.md} {
    min-height: 500px;
  }
`;

export const ProductImagePlaceholder = styled.div<{ $bgColor: string }>`
  width: 200px;
  height: 300px;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.xl};

  ${media.md} {
    width: 250px;
    height: 350px;
    font-size: 1.25rem;
  }
`;

export const ProductDetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const ProductTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.currentSemantic.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  ${media.md} {
    font-size: 3rem;
  }
`;

export const ProductSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const ProductFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const FeatureBadge = styled.div<{ $bgColor: string }>`
  background: ${({ $bgColor }) => $bgColor};
  color: white;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: bold;
  font-size: 0.875rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  max-width: 200px;
`;

export const ProductDescription = styled.div`
  color: ${({ theme }) => theme.currentSemantic.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.chocolateKisses.dark};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const PriceSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.royalOrange.base};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const PriceSubtext = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.textSecondary};
`;

export const BuyNowButton = styled.button`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.royalOrange.base},
    ${({ theme }) => theme.colors.bittersweetShimmer.base}
  );
  color: white;
  padding: ${({ theme }) => theme.spacing.lg};
  ${({ theme }) => theme.spacing["2xl"]};
  border-radius: ${({ theme }) => theme.radii.full};
  border: none;
  font-weight: bold;
  font-size: 1.125rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export const Sidebar = styled.div`
  background: ${({ theme }) => theme.colors.caramel.light};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  height: fit-content;
`;

export const SidebarTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.chocolateKisses.dark};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const SidebarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  ${media.lg} {
    grid-template-columns: 1fr;
  }
`;

export const SidebarProductCard = styled(Link)`
  background: white;
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.md};
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const SidebarProductImage = styled.div<{ $bgColor: string }>`
  width: 40px;
  height: 60px;
  background: ${({ $bgColor }) => $bgColor};
  border-radius: ${({ theme }) => theme.radii.sm};
  margin: 0 auto ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.5rem;

  ${media.lg} {
    width: 50px;
    height: 75px;
    font-size: 0.625rem;
  }
`;

export const SidebarProductName = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.chocolateKisses.dark};

  ${media.lg} {
    font-size: 0.875rem;
  }
`;

export const IngredientsSection = styled.section`
  margin: 2.5rem auto 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.semantic.surface};
  border-radius: 1.25rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.semantic.border};
  max-width: 700px;
`;

export const IngredientsTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 1rem;
  letter-spacing: 0.01em;
`;

export const IngredientsList = styled.ul`
  list-style: disc inside;
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.semantic.text};
`;

export const IngredientItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
`;

export const NutritionSection = styled.section`
  margin: 2rem auto 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.semantic.surface};
  border-radius: 1.25rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.semantic.border};
  max-width: 700px;
`;

export const NutritionTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 1rem;
  letter-spacing: 0.01em;
`;

export const NutritionTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1.5rem;
`;

export const NutritionRow = styled.div`
  display: contents;
`;

export const NutritionLabel = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.semantic.text};
`;

export const NutritionValue = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.semantic.primary};
  text-align: right;
`;

export const ProductBriefSection = styled.section`
  margin: 2rem auto 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.semantic.surface};
  border-radius: 1.25rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.semantic.border};
  max-width: 700px;
`;

export const ProductBriefTitle = styled.h3`
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 1rem;
  letter-spacing: 0.01em;
`;

export const ProductBriefText = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.semantic.text};
`;

export const ProductInfoSection = styled.section`
  margin: 3rem auto 0 auto;
  padding: 2.5rem 2rem;
  background: ${({ theme }) => theme.semantic.backgroundSecondary};
  border-radius: 1.5rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2.5rem;
  align-items: flex-start;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

export const ProductInfoLeft = styled.div``;
export const ProductInfoRight = styled.div``;

export const ProductInfoTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 1rem;
`;

export const ProductInfoDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.semantic.text};
  margin-bottom: 1.5rem;
`;

export const ProductInfoIngredients = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.semantic.text};
  margin-bottom: 1.5rem;
  & strong {
    color: ${({ theme }) => theme.semantic.primary};
  }
`;

export const ProductInfoNutritionBox = styled.div`
  background: ${({ theme }) => theme.semantic.surface};
  border: 1.5px solid ${({ theme }) => theme.semantic.border};
  border-radius: 1rem;
  padding: 1.5rem 1.25rem;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04);
`;

export const ProductInfoNutritionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 1rem;
`;

export const ProductInfoNutritionTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem 1.2rem;
  font-size: 0.98rem;
`;

export const ProductInfoFeatureRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const ProductInfoFeatureIcon = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.semantic.secondary};
  display: flex;
  justify-content: center;
`;

export const ProductInfoFeatureLabel = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.semantic.text};
  text-align: center;
  margin-top: 0.25rem;
`;
