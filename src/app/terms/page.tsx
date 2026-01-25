"use client";

import React from "react";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import * as S from "./page.styles";

export default function TermsPage() {
  return (
    <S.PageContainer>
      <Navigation />
      <S.ContentSection>
        <S.Title>Terms of Service</S.Title>
        <S.Paragraph>
          Welcome to Mocktails On the Go. By accessing and using our website, you
          agree to comply with and be bound by the following terms and conditions.
        </S.Paragraph>
        <S.Paragraph>Last updated: January 2025</S.Paragraph>
      </S.ContentSection>
      <Footer />
    </S.PageContainer>
  );
}
