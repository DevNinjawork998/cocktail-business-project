"use client";

import React from "react";
import Navigation from "@/components/Navigation/Navigation";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import FounderStory from "@/components/FounderStory/FounderStory";
import Footer from "@/components/Footer/Footer";
import * as S from "./FoundersPageClient.styles";

export default function FoundersPageClient() {
  const breadcrumbItems = [{ label: "Meet Our Founders" }];

  return (
    <S.PageContainer>
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <FounderStory />
      <Footer />
    </S.PageContainer>
  );
}
