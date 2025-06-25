import styled, { keyframes } from "styled-components";

// Animations
export const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`;

export const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

// Styled Components
export const LandingSection = styled.section`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
`;

export const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.caramel.base} 0%,
    ${({ theme }) => theme.colors.mauvelous.base} 50%,
    ${({ theme }) => theme.colors.royalOrange.base} 100%
  );
  opacity: 0.2;
`;

export const OverlayBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.currentSemantic.background} 0%,
    transparent 50%,
    transparent 100%
  );
`;

export const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
  padding-top: 5rem;
  width: 100%;
  box-sizing: border-box;

  ${({ theme }) => `
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: ${theme.spacing.sm};
      padding-top: 3rem;
    }
  `}
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing["3xl"]};
  align-items: center;
  min-height: 70vh;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};
  line-height: 1.1;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 3.75rem;
    }
    @media (min-width: ${theme.breakpoints.lg}) {
      font-size: 4.5rem;
    }
  `}
`;

export const TitleAccent = styled.span`
  color: ${({ theme }) => theme.semantic.secondary};
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  line-height: 1.6;
  max-width: 32rem;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 1.5rem;
    }
  `}
`;

export const CTAContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing.md};
`;

export const CTAButton = styled.div`
  background-color: ${({ theme }) => theme.semantic.secondary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  transform: scale(1);
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: none;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bittersweetShimmer.base};
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export const CTAContent = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CTAIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;

  ${CTAButton}:hover & {
    transform: translateX(0.25rem);
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.xl};
`;

export const FeatureCard = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.currentSemantic.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme }) => theme.currentSemantic.borderLight};
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const FeatureIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const FeatureText = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.currentSemantic.foreground};
`;

export const RightContent = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const ProductShowcase = styled.div`
  position: relative;
  z-index: 10;
`;

export const ProductContainer = styled.div`
  position: relative;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.chocolateKisses.base} 0%,
    ${({ theme }) => theme.colors.mauvelous.base} 50%,
    ${({ theme }) => theme.colors.royalOrange.base} 100%
  );
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transform: rotate(3deg);
  transition: transform 0.5s ease;

  &:hover {
    transform: rotate(0deg);
  }
`;

export const ProductInner = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const CocktailBottle = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.caramel.base} 0%,
    ${({ theme }) => theme.colors.royalOrange.base} 100%
  );
  border-radius: ${({ theme }) => theme.radii.xl};
  height: 16rem;
  width: 8rem;
  margin: 0 auto;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const BottleCap = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: 50%;
  transform: translateX(-50%);
  width: 5rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.chocolateKisses.base};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

export const BottleLabel = styled.div`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
`;

export const LabelTitle = styled.div`
  font-weight: bold;
  font-size: 0.875rem;
`;

export const LabelSubtitle = styled.div`
  font-size: 0.75rem;
`;

export const LabelSignature = styled.div`
  font-size: 0.75rem;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const GlassContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 6rem;
`;

export const CocktailGlass = styled.div`
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ theme }) => theme.colors.caramel.base} 50%,
    ${({ theme }) => theme.colors.bittersweetShimmer.base} 100%
  );
  border-radius: 0 0 3rem 3rem;
  height: 8rem;
  width: 6rem;
  border: 4px solid #d1d5db;
  position: relative;
  overflow: hidden;
`;

export const CocktailLiquid = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.bittersweetShimmer.base} 0%,
    ${({ theme }) => theme.colors.royalOrange.base} 100%
  );
  opacity: 0.8;
`;

export const GlassHighlight = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  width: 0.5rem;
  height: 0.5rem;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: 0.6;
`;

export const FloatingElement1 = styled.div`
  position: absolute;
  top: -2rem;
  right: -2rem;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.caramel.base};
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: 0.6;
  animation: ${pulse} 2s infinite;
`;

export const FloatingElement2 = styled.div`
  position: absolute;
  bottom: -1rem;
  left: -1rem;
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.mauvelous.base};
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: 0.4;
  animation: ${pulse} 2s infinite;
  animation-delay: 1s;
`;

export const FloatingElement3 = styled.div`
  position: absolute;
  top: 50%;
  left: -1.5rem;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.royalOrange.base};
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: 0.5;
  animation: ${bounce} 1s infinite;

  ${({ theme }) => `
    @media (max-width: ${theme.breakpoints.md}) {
      left: 0rem;
      transform: translateX(-50%);
    }
  `}
`;

export const BackgroundDecorative = styled.div`
  position: absolute;
  inset: 0;
  z-index: -10;
`;

export const DecorativeElement1 = styled.div`
  position: absolute;
  top: 5rem;
  left: 5rem;
  width: 8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.caramel.base};
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: 0.1;
  filter: blur(3rem);
`;

export const DecorativeElement2 = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  width: 10rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.mauvelous.base};
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: 0.1;
  filter: blur(3rem);
`;

export const FoundersSection = styled.div`
  margin-top: 5rem;
  padding-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.currentSemantic.border};
`;

export const FoundersContainer = styled.div`
  position: relative;
  border-radius: 1.5rem;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.currentSemantic.surface};
  border: 1px solid ${({ theme }) => theme.currentSemantic.borderLight};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.mauvelous.base} 0%,
      ${({ theme }) => theme.colors.caramel.base} 50%,
      ${({ theme }) => theme.colors.royalOrange.base} 100%
    );
    opacity: 0.1;
    border-radius: 1.5rem;
    z-index: -1;
  }

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing["3xl"]};
    }
  `}
`;

export const FoundersContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const FoundersHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FoundersTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 2.25rem;
    }
  `}
`;

export const FoundersDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  max-width: 42rem;
  margin: 0 auto;
`;

export const FoundersButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.md};
`;

export const FoundersButton = styled.div`
  background-color: ${({ theme }) => theme.semantic.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radii.full};
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  transform: scale(1);
  box-shadow: ${({ theme }) => theme.shadows.lg};
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.semantic.secondary};
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export const PreviewCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

export const PreviewCard = styled.div`
  background-color: ${({ theme }) => theme.currentSemantic.surface};
  border: 1px solid ${({ theme }) => theme.currentSemantic.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const AvatarAlex = styled.div`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.royalOrange.base} 0%,
    ${({ theme }) => theme.colors.bittersweetShimmer.base} 100%
  );
  border-radius: ${({ theme }) => theme.radii.full};
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.125rem;
`;

export const AvatarMarcus = styled.div`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.caramel.base} 0%,
    ${({ theme }) => theme.colors.mauvelous.base} 100%
  );
  border-radius: ${({ theme }) => theme.radii.full};
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.semantic.primary};
  font-weight: bold;
  font-size: 1.125rem;
`;

export const CardTitle = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
`;

export const StatsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid ${({ theme }) => theme.currentSemantic.border};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
`;
