"use client";

import React from "react";
import {
  LoadingContainer,
  LoadingContent,
  LoadingMainContent,
  LoadingImageSection,
  LoadingDetailsSection,
  LoadingTitle,
  LoadingSubtitle,
  LoadingFeatures,
  LoadingFeatureBadge,
  LoadingDescription,
  LoadingPrice,
  LoadingPriceSubtext,
  LoadingButtonGroup,
  LoadingQuantitySelector,
  LoadingAddToCartButton,
  LoadingSidebar,
  LoadingSidebarTitle,
  LoadingSidebarGrid,
  LoadingSidebarCard,
} from "./page.styles";

export default function ProductPageLoading() {
  return (
    <LoadingContainer>
      <LoadingContent>
        <LoadingMainContent>
          <LoadingImageSection />
          <LoadingDetailsSection>
            <LoadingTitle />
            <LoadingSubtitle />
            <LoadingFeatures>
              <LoadingFeatureBadge />
              <LoadingFeatureBadge />
              <LoadingFeatureBadge />
            </LoadingFeatures>
            <LoadingDescription />
            <LoadingPrice />
            <LoadingPriceSubtext />
            <LoadingButtonGroup>
              <LoadingQuantitySelector />
              <LoadingAddToCartButton />
            </LoadingButtonGroup>
          </LoadingDetailsSection>
        </LoadingMainContent>
        <LoadingSidebar>
          <LoadingSidebarTitle />
          <LoadingSidebarGrid>
            <LoadingSidebarCard />
            <LoadingSidebarCard />
            <LoadingSidebarCard />
            <LoadingSidebarCard />
          </LoadingSidebarGrid>
        </LoadingSidebar>
      </LoadingContent>
    </LoadingContainer>
  );
}
