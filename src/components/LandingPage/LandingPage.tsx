"use client";

import React from "react";
import Link from "next/link";
import * as S from "./LandingPage.styles";
import RunningBanner from "../RunningBanner/RunningBanner";
import dynamic from "next/dynamic";

const HeroSlideshow = dynamic(() => import("../HeroSlideshow/HeroSlideshow"), {
  ssr: false,
});

const LandingPage: React.FC = () => {
  return (
    <S.LandingSection>
      <RunningBanner />
      {/* Gradient Background */}
      <S.GradientBackground />
      <S.OverlayBackground />

      <S.Container>
        <S.MainGrid>
          {/* Left Content */}
          <S.LeftContent>
            <S.Badge>✨ Fresh. Functional. Delicious.</S.Badge>
            <S.ContentSection>
              <S.Title>
                Mocktails that fuel
                <br />
                <S.TitleAccent>your day</S.TitleAccent>
              </S.Title>

              <S.Subtitle>
                Crafted with the freshest fruits and powered by adaptogens. All the taste, none of the guilt. Low sugar. High vibes.
              </S.Subtitle>
            </S.ContentSection>

            {/* CTA Buttons */}
            <S.CTAContainer>
              <Link href="/shop">
                <S.CTAButton>
                  <S.CTAContent>
                    <span>Shop Now</span>
                  </S.CTAContent>
                </S.CTAButton>
              </Link>
              <Link href="/shop">
                <S.CTAButtonSecondary>
                  <S.CTAContentSecondary>
                    <span>Explore Flavors</span>
                  </S.CTAContentSecondary>
                </S.CTAButtonSecondary>
              </Link>
            </S.CTAContainer>

            {/* Stats/Features */}
            <S.FeaturesGrid>
              <S.FeatureCard>
                <S.FeatureText>5g</S.FeatureText>
                <S.FeatureText>Sugar or Less</S.FeatureText>
              </S.FeatureCard>
              <S.FeatureCard>
                <S.FeatureText>100%</S.FeatureText>
                <S.FeatureText>Fresh Fruit</S.FeatureText>
              </S.FeatureCard>
              <S.FeatureCard>
                <S.FeatureText>0</S.FeatureText>
                <S.FeatureText>Artificial</S.FeatureText>
              </S.FeatureCard>
            </S.FeaturesGrid>
          </S.LeftContent>

          {/* Right Content - Product Image */}
          <S.RightContent>
            <HeroSlideshow />
          </S.RightContent>
        </S.MainGrid>
      </S.Container>
    </S.LandingSection>
  );
};

export default LandingPage;
