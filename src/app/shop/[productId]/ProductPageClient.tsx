"use client";

import {
  ProductPageContainer,
  ProductLayout,
  MainContent,
  ProductImageSection,
  ProductImagePlaceholder,
  ProductDetailsSection,
  ProductTitle,
  ProductSubtitle,
  ProductFeatures,
  FeatureBadge,
  ProductDescription,
  PriceSection,
  Price,
  PriceSubtext,
  BuyNowButton,
  Sidebar,
  SidebarTitle,
  SidebarGrid,
  SidebarProductCard,
  SidebarProductImage,
  SidebarProductName,
} from "./page.styles";

interface Product {
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  price: string;
  priceSubtext: string;
  imageColor: string;
  features: Array<{ text: string; color: string }>;
}

interface OtherProduct {
  id: string;
  name: string;
  imageColor: string;
}

interface ProductPageClientProps {
  product: Product;
  otherProducts: OtherProduct[];
}

export default function ProductPageClient({
  product,
  otherProducts,
}: ProductPageClientProps) {
  const handleBuyNow = () => {
    const message = `Hi! I'd like to purchase ${product.name} (${product.price}). Can you help me with the order?`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <ProductPageContainer>
      <ProductLayout>
        <MainContent>
          <ProductImageSection>
            <ProductImagePlaceholder $bgColor={product.imageColor}>
              {product.name}
            </ProductImagePlaceholder>
          </ProductImageSection>

          <ProductDetailsSection>
            <div>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductSubtitle>{product.subtitle}</ProductSubtitle>
            </div>

            <ProductFeatures>
              {product.features.map((feature, index) => (
                <FeatureBadge key={index} $bgColor={feature.color}>
                  {feature.text}
                </FeatureBadge>
              ))}
            </ProductFeatures>

            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.longDescription }}
            />

            <PriceSection>
              <Price>{product.price}</Price>
              <PriceSubtext>{product.priceSubtext}</PriceSubtext>
            </PriceSection>

            <BuyNowButton onClick={handleBuyNow}>
              Buy Now via WhatsApp
            </BuyNowButton>
          </ProductDetailsSection>
        </MainContent>

        <Sidebar>
          <SidebarTitle>Our Flavors</SidebarTitle>
          <SidebarGrid>
            {otherProducts.map((sideProduct) => (
              <SidebarProductCard
                key={sideProduct.id}
                href={`/shop/${sideProduct.id}`}
              >
                <SidebarProductImage $bgColor={sideProduct.imageColor}>
                  {sideProduct.name}
                </SidebarProductImage>
                <SidebarProductName>{sideProduct.name}</SidebarProductName>
              </SidebarProductCard>
            ))}
          </SidebarGrid>
        </Sidebar>
      </ProductLayout>
    </ProductPageContainer>
  );
}
