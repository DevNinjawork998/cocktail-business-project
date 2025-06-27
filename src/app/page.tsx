"use client";

import Navigation from "@/components/Navigation/NavigationMain/Navigation";
import LandingPage from "@/components/LandingPage/LandingPage";
import Footer from "@/components/Footer/Footer";
import styled from "styled-components";
import { Analytics } from "@vercel/analytics/next";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.currentSemantic.background};
`;

export default function Home() {
  return (
    <PageContainer>
      <Analytics debug={true} />
      <Navigation />
      <LandingPage />
      <Footer />
    </PageContainer>
  );
}
