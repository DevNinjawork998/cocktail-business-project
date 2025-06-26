"use client";

import React from "react";
import Link from "next/link";
import Testimonials from "../Testimonials/Testimonials";
import {
  LandingSection,
  GradientBackground,
  OverlayBackground,
  Container,
  MainGrid,
  LeftContent,
  ContentSection,
  Title,
  TitleAccent,
  Subtitle,
  CTAContainer,
  CTAButton,
  CTAContent,
  CTAIcon,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureText,
  RightContent,
  FoundersSection,
  FoundersContainer,
  FoundersContent,
  FoundersHeader,
  FoundersTitle,
  FoundersDescription,
  FoundersButtonContainer,
  FoundersButton,
  PreviewCards,
  PreviewCard,
  AvatarAlex,
  AvatarMarcus,
  CardTitle,
  CardDescription,
  StatsSection,
  StatItem,
  StatNumber,
  StatLabel,
} from "./LandingPage.styles";
import dynamic from "next/dynamic";

const HeroSlideshow = dynamic(() => import("../HeroSlideshow/HeroSlideshow"), {
  ssr: false,
});

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
              <Link href="/shop">
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
              </Link>
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
            <HeroSlideshow />
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
                <Link href="/founders">
                  <FoundersButton>
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
                </Link>
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

      {/* Customer Testimonials */}
      <Testimonials />
    </LandingSection>
  );
};

export default LandingPage;
