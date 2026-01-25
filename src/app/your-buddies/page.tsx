"use client";

import React from "react";
import Navigation from "@/components/Navigation/Navigation";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import Testimonials from "@/components/Testimonials/Testimonials";
import Community from "@/components/Community/Community";
import * as S from "./page.styles";

export default function YourBuddiesPage() {
  const breadcrumbItems = [{ label: "Community" }];

  return (
    <S.PageContainer>
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Community Instagram Grid */}
      <Community />

      <Footer />
    </S.PageContainer>
  );
}
