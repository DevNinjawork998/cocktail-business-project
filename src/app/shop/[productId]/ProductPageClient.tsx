"use client";

import React, { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";
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
} from "./page.styles";

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
    const price = parseFloat(product.price.replace("$", ""));
    addItem({
      id: product.id,
      name: product.name,
      price: price,
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

  // Example data for ingredients and nutrition
  const ingredients = [
    "Carbonated Water",
    "OLISMART (Cassava Root Fiber, Chicory Root Inulin, Jerusalem Artichoke Inulin, Nopal Cactus, Marshmallow Root, Calendula Flower, Kudzu Root)",
    "Clementine Juice Concentrate",
    "Cassava Root Syrup",
    "Mandarin Juice Concentrate",
    "Apple Juice Concentrate",
    "Lemon Juice Concentrate",
    "Stevia Leaf",
    "Himalayan Pink Salt",
    "Natural Flavors",
  ];
  const nutritionFacts = [
    { label: "Calories", value: "50" },
    { label: "Total Fat", value: "0g" },
    { label: "Sodium", value: "30mg" },
    { label: "Total Carbohydrate", value: "17g" },
    { label: "Dietary Fiber", value: "5g" },
    { label: "Total Sugars", value: "5g" },
    { label: "Includes Added Sugars", value: "0g" },
    { label: "Protein", value: "0g" },
    { label: "Vitamin C", value: "20%" },
  ];
  const productBrief =
    "The summertime treat from your fave ice cream truck just got an upgrade. Creamy, vanilla goodness and a bright pop of tangerine and mandarin citrus join forces to bring back this iconic childhood flavor.";
  const features = [
    { icon: "🌾", label: "High Fiber" },
    { icon: "🍬", label: "Less Sugar*" },
    { icon: "🌱", label: "Vegan" },
    { icon: "🥥", label: "Plant Powered" },
    { icon: "🥚", label: "Paleo" },
    { icon: "🚫🌾", label: "Gluten Free" },
    { icon: "🚫🌽", label: "GMO Free" },
  ];

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
                <SidebarProductImage $bgColor={sideProduct.imageColor}>
                  {sideProduct.name}
                </SidebarProductImage>
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
          <ProductInfoDescription>{productBrief}</ProductInfoDescription>
          <ProductInfoIngredients>
            <strong>Ingredients:</strong> {ingredients.join(", ")}
          </ProductInfoIngredients>
          <ProductInfoFeatureRow>
            {features.map((f, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 70,
                }}
              >
                <ProductInfoFeatureIcon>{f.icon}</ProductInfoFeatureIcon>
                <ProductInfoFeatureLabel>{f.label}</ProductInfoFeatureLabel>
              </div>
            ))}
          </ProductInfoFeatureRow>
        </ProductInfoLeft>
        <ProductInfoRight>
          <ProductInfoNutritionBox>
            <ProductInfoNutritionTitle>
              Nutrition Facts
            </ProductInfoNutritionTitle>
            <ProductInfoNutritionTable>
              {nutritionFacts.map((fact, idx) => (
                <React.Fragment key={idx}>
                  <div>{fact.label}</div>
                  <div
                    style={{
                      textAlign: "right",
                      fontWeight: "600",
                    }}
                  >
                    {fact.value}
                  </div>
                </React.Fragment>
              ))}
            </ProductInfoNutritionTable>
          </ProductInfoNutritionBox>
        </ProductInfoRight>
      </ProductInfoSection>
    </ProductPageContainer>
  );
}
