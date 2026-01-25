"use client";

import React from "react";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import {
  PageContainer,
  ContentSection,
  Title,
  Paragraph,
} from "./page.styles";

export default function ContactPage() {
  return (
    <PageContainer>
      <Navigation />
      <ContentSection>
        <Title>Contact Us</Title>
        <Paragraph>
          We&apos;d love to hear from you! Reach out to us on Instagram
          @MocktailsOnTheGo or send us a message on WhatsApp.
        </Paragraph>
        <Paragraph>
          For business inquiries, partnerships, or press, please contact us
          through our social media channels.
        </Paragraph>
      </ContentSection>
      <Footer />
    </PageContainer>
  );
}
