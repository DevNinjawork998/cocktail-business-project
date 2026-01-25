"use client";

import React from "react";
import Link from "next/link";
import {
  CTASection,
  Container,
  Heading,
  Subtext,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  BackgroundDecoration,
} from "./CTABanner.styles";

const CTABanner: React.FC = () => {
  return (
    <CTASection>
      <BackgroundDecoration />
      <Container>
        <Heading>Ready to upgrade your drinks?</Heading>
        <Subtext>
          Join thousands who&apos;ve made the switch to mocktails that actually
          make you feel good.
        </Subtext>
        <ButtonGroup>
          <PrimaryButton as={Link} href="/shop">
            Start Shopping
          </PrimaryButton>
          <SecondaryButton as={Link} href="/shop#subscribe">
            Subscribe & Save 20%
          </SecondaryButton>
        </ButtonGroup>
      </Container>
    </CTASection>
  );
};

export default CTABanner;
