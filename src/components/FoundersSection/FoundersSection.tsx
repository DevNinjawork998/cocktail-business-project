"use client";

import React from "react";
import styled from "styled-components";

// Styled Components
const FoundersContainer = styled.section`
  padding: 5rem 1rem;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 1rem;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 3rem;
    }
  `}
`;

const TitleDivider = styled.div`
  width: 6rem;
  height: 0.25rem;
  background-color: ${({ theme }) => theme.semantic.secondary};
  margin: 0 auto;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};
  line-height: 1.2;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 2.25rem;
    }
  `}
`;

const TitleAccent = styled.span`
  color: ${({ theme }) => theme.semantic.secondary};
`;

const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContentParagraph = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  line-height: 1.7;
`;

const FounderHighlights = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

const HighlightCard = styled.div`
  background-color: ${({ theme }) => theme.currentSemantic.surface};
  border: 1px solid ${({ theme }) => theme.currentSemantic.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.5rem;
`;

const HighlightTitle = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 0.5rem;
`;

const HighlightText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
`;

const ValuesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ValuesTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.primary};
`;

const ValuesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ValueItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ValueDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.semantic.secondary};
  border-radius: 50%;
  flex-shrink: 0;
`;

const ValueText = styled.span`
  color: ${({ theme }) => theme.currentSemantic.foreground};
`;

const RightContent = styled.div`
  position: relative;
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 10;
`;

const ImageWrapper = styled.div`
  position: relative;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.caramel.base} 0%,
    ${({ theme }) => theme.colors.mauvelous.base} 50%,
    ${({ theme }) => theme.currentSemantic.background} 100%
  );
  padding: 1.5rem;
  border-radius: 1.5rem;
`;

const MockImageContainer = styled.div`
  background-color: ${({ theme }) => theme.currentSemantic.surface};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const MockImage = styled.div`
  aspect-ratio: 4/3;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.chocolateKisses.base} 0%,
    ${({ theme }) => theme.colors.mauvelous.base} 50%,
    ${({ theme }) => theme.colors.caramel.base} 100%
  );
  border-radius: 0.75rem;
  position: relative;
  overflow: hidden;
`;

const FoundersDisplay = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
`;

const FounderAvatar = styled.div`
  position: relative;
`;

const AvatarShape = styled.div`
  width: 5rem;
  height: 6rem;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.chocolateKisses.base} 0%,
    transparent 100%
  );
  border-radius: 2.5rem 2.5rem 0 0;
  opacity: 0.6;
`;

const AvatarLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const AvatarBadge = styled.div<{ $variant: "alex" | "marcus" }>`
  width: 3rem;
  height: 0.75rem;
  background-color: ${({ theme, $variant }) =>
    $variant === "alex"
      ? theme.colors.royalOrange.base
      : theme.colors.caramel.base};
  border-radius: 9999px;
  margin-bottom: 0.25rem;
`;

const AvatarName = styled.div`
  font-size: 0.75rem;
  color: white;
  font-weight: 500;
`;

const DecorativeElements = styled.div`
  position: absolute;
  inset: 0;
`;

const DecorativeDot = styled.div<{
  $size: string;
  $color: string;
  $position: string;
}>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  opacity: 0.4;
  ${({ $position }) => $position}
`;

const ImageCaption = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const CaptionText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  font-style: italic;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  inset: 0;
  z-index: -10;
`;

const BackgroundDot = styled.div<{
  $size: string;
  $color: string;
  $position: string;
  $blur?: boolean;
}>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  opacity: 0.1;
  ${({ $blur }) => $blur && "filter: blur(3rem);"}
  ${({ $position }) => $position}
`;

const BottomSection = styled.div`
  margin-top: 5rem;
  padding-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.currentSemantic.border};
`;

const JourneyHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const JourneyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 1rem;
`;

const JourneyDescription = styled.p`
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  max-width: 32rem;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

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
  color: ${({ theme }) => theme.semantic.secondary};
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
`;

const FoundersSection: React.FC = () => {
  return (
    <FoundersContainer>
      <Container>
        {/* Page Header */}
        <PageHeader>
          <MainTitle>Meet Our Founders</MainTitle>
          <TitleDivider />
        </PageHeader>

        {/* Main Content */}
        <MainGrid>
          {/* Left Content */}
          <LeftContent>
            <ContentSection>
              <SectionTitle>
                Our Foundational
                <br />
                <TitleAccent>Ingredients</TitleAccent>
              </SectionTitle>

              <ContentGrid>
                <ContentParagraph>
                  For over a decade, Alex and Marcus have shared a vision of a
                  healthier, more vibrant future. Their quest for a product that
                  combines the artistry of traditional cocktails with modern
                  wellness led them to create a new kind of experience.
                </ContentParagraph>

                <ContentParagraph>
                  Our craft cocktails are delicious, refreshing, and genuinely
                  good for you. We combine the classic cocktail flavors you love
                  with functional ingredients that support your well-being and
                  enhance your social experiences.
                </ContentParagraph>

                <ContentParagraph>
                  Every bottle represents our commitment to quality, innovation,
                  and the belief that exceptional taste and health consciousness
                  can coexist beautifully.
                </ContentParagraph>
              </ContentGrid>
            </ContentSection>

            {/* Founder Highlights */}
            <FounderHighlights>
              <HighlightCard>
                <HighlightTitle>Alex&apos;s Vision</HighlightTitle>
                <HighlightText>
                  &quot;Creating cocktails that celebrate life&apos;s moments
                  while nurturing your body.&quot;
                </HighlightText>
              </HighlightCard>
              <HighlightCard>
                <HighlightTitle>Marcus&apos;s Mission</HighlightTitle>
                <HighlightText>
                  &quot;Bringing premium ingredients and artisanal craftsmanship
                  to everyone.&quot;
                </HighlightText>
              </HighlightCard>
            </FounderHighlights>

            {/* Values */}
            <ValuesSection>
              <ValuesTitle>Our Core Values</ValuesTitle>
              <ValuesList>
                <ValueItem>
                  <ValueDot />
                  <ValueText>Premium, ethically-sourced ingredients</ValueText>
                </ValueItem>
                <ValueItem>
                  <ValueDot />
                  <ValueText>Artisanal craftsmanship in every bottle</ValueText>
                </ValueItem>
                <ValueItem>
                  <ValueDot />
                  <ValueText>Sustainable business practices</ValueText>
                </ValueItem>
                <ValueItem>
                  <ValueDot />
                  <ValueText>Community-focused approach</ValueText>
                </ValueItem>
              </ValuesList>
            </ValuesSection>
          </LeftContent>

          {/* Right Content - Founders Image */}
          <RightContent>
            <ImageContainer>
              <ImageWrapper>
                <MockImageContainer>
                  <MockImage>
                    {/* Mock founders silhouettes */}
                    <FoundersDisplay>
                      {/* Founder 1 */}
                      <FounderAvatar>
                        <AvatarShape />
                        <AvatarLabel>
                          <AvatarBadge $variant="alex" />
                          <AvatarName>ALEX</AvatarName>
                        </AvatarLabel>
                      </FounderAvatar>

                      {/* Founder 2 */}
                      <FounderAvatar>
                        <AvatarShape />
                        <AvatarLabel>
                          <AvatarBadge $variant="marcus" />
                          <AvatarName>MARCUS</AvatarName>
                        </AvatarLabel>
                      </FounderAvatar>
                    </FoundersDisplay>

                    {/* Decorative elements */}
                    <DecorativeElements>
                      <DecorativeDot
                        $size="2rem"
                        $color="#FBE89E"
                        $position="top: 1rem; left: 1rem;"
                      />
                      <DecorativeDot
                        $size="1.5rem"
                        $color="#F89256"
                        $position="top: 2rem; right: 1.5rem;"
                      />
                      <DecorativeDot
                        $size="1rem"
                        $color="#EA9DAE"
                        $position="bottom: 3rem; left: 2rem;"
                      />
                    </DecorativeElements>
                  </MockImage>

                  {/* Caption */}
                  <ImageCaption>
                    <CaptionText>
                      &quot;Building something extraordinary, together.&quot;
                    </CaptionText>
                  </ImageCaption>
                </MockImageContainer>
              </ImageWrapper>
            </ImageContainer>

            {/* Background decorative elements */}
            <BackgroundDecoration>
              <BackgroundDot
                $size="8rem"
                $color="#FBE89E"
                $position="top: 2.5rem; left: 2.5rem;"
                $blur
              />
              <BackgroundDot
                $size="10rem"
                $color="#EA9DAE"
                $position="bottom: 2.5rem; right: 2.5rem;"
                $blur
              />
            </BackgroundDecoration>
          </RightContent>
        </MainGrid>

        {/* Bottom Section - Company Stats */}
        <BottomSection>
          <JourneyHeader>
            <JourneyTitle>Our Journey</JourneyTitle>
            <JourneyDescription>
              From a shared passion to a thriving business, we&apos;ve remained
              committed to our founding principles.
            </JourneyDescription>
          </JourneyHeader>

          <StatsGrid>
            <StatItem>
              <StatNumber>2019</StatNumber>
              <StatLabel>Founded</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50K+</StatNumber>
              <StatLabel>Customers Served</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>15</StatNumber>
              <StatLabel>Cities</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>100%</StatNumber>
              <StatLabel>Organic Ingredients</StatLabel>
            </StatItem>
          </StatsGrid>
        </BottomSection>
      </Container>
    </FoundersContainer>
  );
};

export default FoundersSection;
