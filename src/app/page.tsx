"use client";

import Navigation from "@/components/Navigation/Navigation";
import LandingPage from "@/components/LandingPage/LandingPage";
import Footer from "@/components/Footer/Footer";
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
