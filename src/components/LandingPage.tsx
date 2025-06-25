"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

// Animations
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
`;

const bounce = keyframes`
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
const LandingSection = styled.section`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  max-width: 100vw;
`;

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.caramel} 0%,
    ${({ theme }) => theme.colors.mauvelous} 50%,
    ${({ theme }) => theme.colors.royalOrange} 100%
  );
  opacity: 0.2;
`;

const OverlayBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.currentSemantic.background} 0%,
    transparent 50%,
    transparent 100%
  );
`;

const Container = styled.div`
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

const MainGrid = styled.div`
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

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Title = styled.h1`
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

const TitleAccent = styled.span`
  color: ${({ theme }) => theme.semantic.secondary};
`;

const Subtitle = styled.p`
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

const CTAContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const CTAButton = styled.button`
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.bittersweetShimmer};
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const CTAContent = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CTAIcon = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  transition: transform 0.3s ease;

  ${CTAButton}:hover & {
    transform: translateX(0.25rem);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.xl};
`;

const FeatureCard = styled.div`
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

const FeatureIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const FeatureText = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.currentSemantic.foreground};
`;

const RightContent = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ProductShowcase = styled.div`
  position: relative;
  z-index: 10;
`;

const ProductContainer = styled.div`
  position: relative;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.chocolateKisses} 0%,
    ${({ theme }) => theme.colors.mauvelous} 50%,
    ${({ theme }) => theme.colors.royalOrange} 100%
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

const ProductInner = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const CocktailBottle = styled.div`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.caramel} 0%,
    ${({ theme }) => theme.colors.royalOrange} 100%
  );
  border-radius: ${({ theme }) => theme.radii.xl};
  height: 16rem;
  width: 8rem;
  margin: 0 auto;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const BottleCap = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: 50%;
  transform: translateX(-50%);
  width: 5rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.chocolateKisses};
  border-radius: ${({ theme }) => theme.radii.lg};
`;

const BottleLabel = styled.div`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
`;

const LabelTitle = styled.div`
  font-weight: bold;
  font-size: 0.875rem;
`;

const LabelSubtitle = styled.div`
  font-size: 0.75rem;
`;

const LabelSignature = styled.div`
  font-size: 0.75rem;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const GlassContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 6rem;
`;

const CocktailGlass = styled.div`
  background: linear-gradient(
    to bottom,
    transparent 0%,
    ${({ theme }) => theme.colors.caramel} 50%,
    ${({ theme }) => theme.colors.bittersweetShimmer} 100%
  );
  border-radius: 0 0 3rem 3rem;
  height: 8rem;
  width: 6rem;
  border: 4px solid #d1d5db;
  position: relative;
  overflow: hidden;
`;

const CocktailLiquid = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5rem;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.bittersweetShimmer} 0%,
    ${({ theme }) => theme.colors.royalOrange} 100%
  );
  opacity: 0.8;
`;

const GlassHighlight = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  width: 0.5rem;
  height: 0.5rem;
  background-color: white;
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: 0.6;
`;

const FloatingElement1 = styled.div`
  position: absolute;
  top: -2rem;
  right: -2rem;
  width: 4rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.caramel};
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: 0.6;
  animation: ${pulse} 2s infinite;
`;

const FloatingElement2 = styled.div`
  position: absolute;
  bottom: -1rem;
  left: -1rem;
  width: 3rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.mauvelous};
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: 0.4;
  animation: ${pulse} 2s infinite;
  animation-delay: 1s;
`;

const FloatingElement3 = styled.div`
  position: absolute;
  top: 50%;
  left: -1.5rem;
  width: 2rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.royalOrange};
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

const BackgroundDecorative = styled.div`
  position: absolute;
  inset: 0;
  z-index: -10;
`;

const DecorativeElement1 = styled.div`
  position: absolute;
  top: 5rem;
  left: 5rem;
  width: 8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.caramel};
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: 0.1;
  filter: blur(3rem);
`;

const DecorativeElement2 = styled.div`
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  width: 10rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.mauvelous};
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: 0.1;
  filter: blur(3rem);
`;

const FoundersSection = styled.div`
  margin-top: 5rem;
  padding-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.currentSemantic.border};
`;

const FoundersContainer = styled.div`
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
      ${({ theme }) => theme.colors.mauvelous} 0%,
      ${({ theme }) => theme.colors.caramel} 50%,
      ${({ theme }) => theme.colors.royalOrange} 100%
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

const FoundersContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const FoundersHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const FoundersTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 2.25rem;
    }
  `}
`;

const FoundersDescription = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  max-width: 42rem;
  margin: 0 auto;
`;

const FoundersButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const FoundersButton = styled.a`
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

  &:hover {
    background-color: ${({ theme }) => theme.semantic.secondary};
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const PreviewCards = styled.div`
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

const PreviewCard = styled.div`
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

const AvatarAlex = styled.div`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.royalOrange} 0%,
    ${({ theme }) => theme.colors.bittersweetShimmer} 100%
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

const AvatarMarcus = styled.div`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.caramel} 0%,
    ${({ theme }) => theme.colors.mauvelous} 100%
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

const CardTitle = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
`;

const StatsSection = styled.div`
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

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
`;

const LandingPage: React.FC = () => {
  return (
    <LandingSection>
      {/* Gradient Background */}
      <GradientBackground />
      <OverlayBackground />

      <Container>
        <MainGrid>
          {/* Left Content */}
          <LeftContent>
            <ContentSection>
              <Title>
                Premium meets
                <br />
                <TitleAccent>extraordinary</TitleAccent>
              </Title>

              <Subtitle>
                Handcrafted cocktails with premium ingredients. Experience the
                art of mixology delivered to your doorstep.
              </Subtitle>
            </ContentSection>

            {/* CTA Button */}
            <CTAContainer>
              <CTAButton>
                <CTAContent>
                  <span>Start Your Journey</span>
                  <CTAIcon
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </CTAIcon>
                </CTAContent>
              </CTAButton>
            </CTAContainer>

            {/* Features */}
            <FeaturesGrid>
              <FeatureCard>
                <FeatureIcon>🍸</FeatureIcon>
                <FeatureText>Premium Ingredients</FeatureText>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>🚚</FeatureIcon>
                <FeatureText>Fast Delivery</FeatureText>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>👨‍🍳</FeatureIcon>
                <FeatureText>Expert Mixologists</FeatureText>
              </FeatureCard>
              <FeatureCard>
                <FeatureIcon>⭐</FeatureIcon>
                <FeatureText>5-Star Quality</FeatureText>
              </FeatureCard>
            </FeaturesGrid>
          </LeftContent>

          {/* Right Content - Product Showcase */}
          <RightContent>
            <ProductShowcase>
              {/* Mock Product Image Container */}
              <ProductContainer>
                <ProductInner>
                  {/* Mock Cocktail Bottle/Can */}
                  <ProductContent>
                    <CocktailBottle>
                      <BottleCap />
                      <BottleLabel>
                        <LabelTitle>COCKTAIL</LabelTitle>
                        <LabelSubtitle>PREMIUM</LabelSubtitle>
                        <LabelSignature>Signature</LabelSignature>
                        <LabelSubtitle>Blend</LabelSubtitle>
                      </BottleLabel>
                    </CocktailBottle>

                    {/* Mock Glass */}
                    <GlassContainer>
                      <CocktailGlass>
                        <CocktailLiquid />
                        <GlassHighlight />
                      </CocktailGlass>
                    </GlassContainer>
                  </ProductContent>
                </ProductInner>
              </ProductContainer>

              {/* Floating Elements */}
              <FloatingElement1 />
              <FloatingElement2 />
              <FloatingElement3 />
            </ProductShowcase>

            {/* Background decorative elements */}
            <BackgroundDecorative>
              <DecorativeElement1 />
              <DecorativeElement2 />
            </BackgroundDecorative>
          </RightContent>
        </MainGrid>

        {/* Meet the Founders Section */}
        <FoundersSection>
          <FoundersContainer>
            <FoundersContent>
              <FoundersHeader>
                <FoundersTitle>
                  Meet the Visionaries Behind the Magic
                </FoundersTitle>
                <FoundersDescription>
                  Discover the story of Alex and Marcus, two passionate
                  innovators who turned their shared vision of premium cocktails
                  into an extraordinary experience.
                </FoundersDescription>
              </FoundersHeader>

              <FoundersButtonContainer>
                <FoundersButton href="/founders">
                  <CTAContent>
                    <span>Meet Our Founders</span>
                    <CTAIcon
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </CTAIcon>
                  </CTAContent>
                </FoundersButton>
              </FoundersButtonContainer>

              {/* Preview Cards */}
              <PreviewCards>
                <PreviewCard>
                  <AvatarAlex>A</AvatarAlex>
                  <CardTitle>Alex&apos;s Vision</CardTitle>
                  <CardDescription>
                    &quot;Creating cocktails that celebrate life&apos;s moments
                    while nurturing your body.&quot;
                  </CardDescription>
                </PreviewCard>
                <PreviewCard>
                  <AvatarMarcus>M</AvatarMarcus>
                  <CardTitle>Marcus&apos;s Mission</CardTitle>
                  <CardDescription>
                    &quot;Bringing premium ingredients and artisanal
                    craftsmanship to everyone.&quot;
                  </CardDescription>
                </PreviewCard>
              </PreviewCards>
            </FoundersContent>
          </FoundersContainer>
        </FoundersSection>

        {/* Bottom Stats */}
        <StatsSection>
          <StatItem>
            <StatNumber>50K+</StatNumber>
            <StatLabel>Happy Customers</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>200+</StatNumber>
            <StatLabel>Cocktail Recipes</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>5⭐</StatNumber>
            <StatLabel>Average Rating</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>24/7</StatNumber>
            <StatLabel>Support</StatLabel>
          </StatItem>
        </StatsSection>
      </Container>
    </LandingSection>
  );
};

export default LandingPage;
