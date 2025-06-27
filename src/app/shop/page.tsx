"use client";

import Navigation from "@/components/Navigation/NavigationMain/Navigation";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {
  ShopContainer,
  ShopHeader,
  ShopTitle,
  ShopSubtitle,
  ProductsGrid,
  ProductCard,
  ProductImageContainer,
  ProductImage,
  ProductName,
  ProductDescription,
} from "./page.styles";
import Footer from "@/components/Footer/Footer";
import dynamic from "next/dynamic";

const HealthBenefits = dynamic(
  () => import("@/components/HealthBenefits/HealthBenefits"),
  {
    ssr: false,
  }
);

const products = [
  {
    id: "tequila-sundown",
    name: "Tequila Sundown",
    description: "Orange & Cranberry - For the life of the party",
    imageColor: "#8B4513",
  },
  {
    id: "dark-stormy",
    name: "Dark & Stormy",
    description: "Ginger & Lime - For the smooth soul",
    imageColor: "#2F4F4F",
  },
  {
    id: "maca-martini",
    name: "Maca Martini",
    description: "Coffee & Chocolate - For the smooth operator",
    imageColor: "#CD5C5C",
  },
  {
    id: "tropical-twist",
    name: "Tropical Twist",
    description: "Pineapple & Coconut - For the island dreamer",
    imageColor: "#FF6347",
  },
  {
    id: "berry-bliss",
    name: "Berry Bliss",
    description: "Mixed Berries & Mint - For the fresh enthusiast",
    imageColor: "#8A2BE2",
  },
  {
    id: "citrus-splash",
    name: "Citrus Splash",
    description: "Lemon & Lime - For the zesty spirit",
    imageColor: "#FFD700",
  },
];

export default function ShopPage() {
  const breadcrumbItems = [{ label: "Shop" }];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <ShopContainer>
        <ShopHeader>
          <ShopTitle>Explore Our Flavours</ShopTitle>
          <ShopSubtitle>
            Discover our premium collection of artisanal cocktail mixes, crafted
            with the finest ingredients for the perfect drink experience.
          </ShopSubtitle>
        </ShopHeader>

        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id} href={`/shop/${product.id}`}>
              <ProductImageContainer>
                <ProductImage $bgColor={product.imageColor}>
                  {product.name}
                </ProductImage>
              </ProductImageContainer>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
            </ProductCard>
          ))}
        </ProductsGrid>
      </ShopContainer>
      <HealthBenefits />
      <Footer />
    </>
  );
}
