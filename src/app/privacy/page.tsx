"use client";

import React from "react";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import * as S from "./page.styles";

export default function PrivacyPage() {
  return (
    <S.PageContainer>
      <Navigation />
      <S.ContentSection>
        <S.Title>Privacy Policy</S.Title>
        <S.Paragraph>
          At Mocktails On the Go, we take your privacy seriously. This page will
          contain our complete privacy policy detailing how we collect, use, and
          protect your personal information.
        </S.Paragraph>
        <S.Paragraph>Last updated: January 2025</S.Paragraph>
      </S.ContentSection>
      <Footer />
    </S.PageContainer>
  );
}
