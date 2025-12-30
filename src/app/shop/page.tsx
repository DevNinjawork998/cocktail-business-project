"use client";

import { useEffect, useState } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Image from "next/image";
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
import { getAllProducts, Product } from "@/data/productService";

const HealthBenefits = dynamic(
  () => import("@/components/HealthBenefits/HealthBenefits"),
  {
    ssr: false,
  },
);

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const breadcrumbItems = [{ label: "Shop" }];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (err) {
        setError("Failed to load products");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        <Navigation />
        <Breadcrumb items={breadcrumbItems} />
        <ShopContainer>
          <ShopHeader>
            <ShopTitle>Explore Our Flavours</ShopTitle>
            <ShopSubtitle>
              Discover our premium collection of artisanal cocktail mixes,
              crafted with the finest ingredients for the perfect drink
              experience.
            </ShopSubtitle>
          </ShopHeader>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            Loading products...
          </div>
        </ShopContainer>
        <HealthBenefits />
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navigation />
        <Breadcrumb items={breadcrumbItems} />
        <ShopContainer>
          <ShopHeader>
            <ShopTitle>Explore Our Flavours</ShopTitle>
            <ShopSubtitle>
              Discover our premium collection of artisanal cocktail mixes,
              crafted with the finest ingredients for the perfect drink
              experience.
            </ShopSubtitle>
          </ShopHeader>
          <div style={{ textAlign: "center", padding: "2rem", color: "red" }}>
            {error}
          </div>
        </ShopContainer>
        <HealthBenefits />
        <Footer />
      </>
    );
  }

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
                {product.imageUrl ? (
                  <div
                    style={{
                      position: "relative",
                      width: "80px",
                      height: "120px",
                    }}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                      sizes="80px"
                    />
                  </div>
                ) : (
                  <ProductImage $bgColor={product.imageColor}>
                    {product.name}
                  </ProductImage>
                )}
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
