"use client";

import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/serverProductService";
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
  AddToCartButton,
  ButtonGroup,
  QuantitySelector,
  QuantityButton,
  QuantityInput,
  Sidebar,
  SidebarTitle,
  SidebarGrid,
  SidebarProductCard,
  SidebarProductImage,
  SidebarProductName,
  ProductInfoSection,
  ProductInfoLeft,
  ProductInfoRight,
  ProductInfoTitle,
  ProductInfoDescription,
  ProductInfoIngredients,
  ProductInfoNutritionBox,
  ProductInfoNutritionTitle,
  ProductInfoNutritionTable,
  ProductInfoFeatureRow,
  ProductInfoFeatureIcon,
  ProductInfoFeatureLabel,
  ProductImageContainer,
  ProductImage,
  SidebarProductImageContainer,
  SidebarProductImageStyled,
  FeatureItemContainer,
  NutritionFactValue,
} from "./page.styles";
import { formatCurrency } from "@/app/lib/stripe";

interface ProductPageClientProps {
  product: Product;
  otherProducts: Product[];
}

export default function ProductPageClient({
  product,
  otherProducts,
}: ProductPageClientProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Parse price as number, removing any currency symbol (RM, $)
    const priceNumber = Number(product.price.replace(/[^0-9.]/g, ""));
    addItem({
      id: product.id,
      name: product.name,
      price: priceNumber,
      imageColor: product.imageColor,
      priceSubtext: product.priceSubtext,
      quantity,
    });
  };

  const handleQuantityChange = (val: number) => {
    if (val < 1) setQuantity(1);
    else if (val > 99) setQuantity(99);
    else setQuantity(val);
  };

  // Data from Prisma database
  const ingredients = product.ingredients;
  const nutritionFacts = product.nutritionFacts;
  const productBrief = product.productBrief;

  const features = [
    { icon: "🌾", label: "High Fiber" },
    { icon: "🍬", label: "Less Sugar*" },
    { icon: "🌱", label: "Vegan" },
    { icon: "🥥", label: "Plant Powered" },
    { icon: "🥚", label: "Paleo" },
    { icon: "🚫🌾", label: "Gluten Free" },
    { icon: "🚫🌽", label: "GMO Free" },
  ];

  const priceNumber = Number(product.price.replace(/[^0-9.]/g, ""));

  return (
    <ProductPageContainer>
      <ProductLayout>
        <MainContent>
          <ProductImageSection>
            {product.imageUrl ? (
              <ProductImageContainer>
                <ProductImage
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                  sizes="(max-width: 768px) 200px, 250px"
                />
              </ProductImageContainer>
            ) : (
              <ProductImagePlaceholder $bgColor={product.imageColor}>
                {product.name}
              </ProductImagePlaceholder>
            )}
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
              <Price>{formatCurrency(priceNumber * 100)}</Price>
              <PriceSubtext>{product.priceSubtext}</PriceSubtext>
            </PriceSection>

            <ButtonGroup>
              <QuantitySelector>
                <QuantityButton
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </QuantityButton>
                <QuantityInput
                  type="number"
                  min={1}
                  max={99}
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Number(e.target.value))}
                />
                <QuantityButton
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 99}
                >
                  +
                </QuantityButton>
              </QuantitySelector>
              <AddToCartButton onClick={handleAddToCart}>
                Add to Cart
              </AddToCartButton>
            </ButtonGroup>
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
                {sideProduct.imageUrl ? (
                  <SidebarProductImageContainer>
                    <SidebarProductImageStyled
                      src={sideProduct.imageUrl}
                      alt={sideProduct.name}
                      fill
                      style={{ objectFit: "cover", borderRadius: "6px" }}
                      sizes="50px"
                    />
                  </SidebarProductImageContainer>
                ) : (
                  <SidebarProductImage $bgColor={sideProduct.imageColor}>
                    {sideProduct.name}
                  </SidebarProductImage>
                )}
                <SidebarProductName>{sideProduct.name}</SidebarProductName>
              </SidebarProductCard>
            ))}
          </SidebarGrid>
        </Sidebar>
      </ProductLayout>
      {/* New Product Info Section styled to match brand */}
      <ProductInfoSection>
        <ProductInfoLeft>
          <ProductInfoTitle>{product.name}</ProductInfoTitle>
          <ProductInfoDescription>
            {productBrief || "Product description coming soon..."}
          </ProductInfoDescription>
          <ProductInfoIngredients>
            <strong>Ingredients:</strong>{" "}
            {ingredients && ingredients.length > 0
              ? ingredients.join(", ")
              : "Ingredients information coming soon..."}
          </ProductInfoIngredients>
          <ProductInfoFeatureRow>
            {features.map((f, idx) => (
              <FeatureItemContainer key={idx}>
                <ProductInfoFeatureIcon>{f.icon}</ProductInfoFeatureIcon>
                <ProductInfoFeatureLabel>{f.label}</ProductInfoFeatureLabel>
              </FeatureItemContainer>
            ))}
          </ProductInfoFeatureRow>
        </ProductInfoLeft>
        <ProductInfoRight>
          <ProductInfoNutritionBox>
            <ProductInfoNutritionTitle>
              Nutrition Facts
            </ProductInfoNutritionTitle>
            <ProductInfoNutritionTable>
              {nutritionFacts && nutritionFacts.length > 0 ? (
                nutritionFacts.map((fact, idx) => (
                  <React.Fragment key={idx}>
                    <div>{fact.label}</div>
                    <NutritionFactValue>{fact.value}</NutritionFactValue>
                  </React.Fragment>
                ))
              ) : (
                <div
                  style={{
                    gridColumn: "1 / -1",
                    textAlign: "center",
                    color: "#666",
                  }}
                >
                  Nutrition information coming soon...
                </div>
              )}
            </ProductInfoNutritionTable>
          </ProductInfoNutritionBox>
        </ProductInfoRight>
      </ProductInfoSection>
    </ProductPageContainer>
  );
}
