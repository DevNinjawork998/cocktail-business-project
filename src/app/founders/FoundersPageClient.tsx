"use client";

import React from "react";
import Navigation from "@/components/Navigation/Navigation";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import FoundersSection from "@/components/FoundersSection/FoundersSection";
import Footer from "@/components/Footer/Footer";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.currentSemantic.background};
`;

export default function FoundersPageClient() {
  const breadcrumbItems = [{ label: "Meet Our Founders" }];

  return (
    <PageContainer>
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <FoundersSection />
      <Footer />
    </PageContainer>
  );
}
