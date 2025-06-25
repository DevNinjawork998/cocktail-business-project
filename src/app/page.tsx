"use client";

import Navigation from "@/components/Navigation";
import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.currentSemantic.background};
`;

export default function Home() {
  return (
    <PageContainer>
      <Navigation />
      <LandingPage />
      <Footer />
    </PageContainer>
  );
}
