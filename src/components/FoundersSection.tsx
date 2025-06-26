"use client";

import React from "react";
import {
  FoundersContainer,
  Container,
  PageHeader,
  MainTitle,
  TitleDivider,
  MainGrid,
  LeftContent,
  ContentSection,
  SectionTitle,
  TitleAccent,
  ContentGrid,
  ContentParagraph,
  FounderHighlights,
  HighlightCard,
  HighlightTitle,
  HighlightText,
  ValuesSection,
  ValuesTitle,
  ValuesList,
  ValueItem,
  ValueDot,
  ValueText,
  RightContent,
  ImageContainer,
  ImageWrapper,
  MockImageContainer,
  MockImage,
  FoundersDisplay,
  FounderAvatar,
  AvatarShape,
  AvatarLabel,
  AvatarBadge,
  AvatarName,
  DecorativeElements,
  DecorativeDot,
  ImageCaption,
  CaptionText,
  BackgroundDecoration,
  BackgroundDot,
  BottomSection,
  JourneyHeader,
  JourneyTitle,
  JourneyDescription,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
} from "./FoundersSection.styles";

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
