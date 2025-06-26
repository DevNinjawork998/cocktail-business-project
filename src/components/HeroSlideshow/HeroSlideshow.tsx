import React, { useEffect, useState } from "react";
import {
  Dots,
  Dot,
  Placeholder,
  PlaceholderLabel,
} from "./HeroSlideshow.styles";
import {
  ProductShowcase,
  ProductContainer,
  ProductInner,
  ProductContent,
  CocktailBottle,
  BottleCap,
  BottleLabel,
  LabelTitle,
  LabelSubtitle,
  LabelSignature,
  GlassContainer,
  CocktailGlass,
  CocktailLiquid,
  GlassHighlight,
  FloatingElement1,
  FloatingElement2,
  FloatingElement3,
  BackgroundDecorative,
  DecorativeElement1,
  DecorativeElement2,
} from "../LandingPage/LandingPage.styles";

const slides = [
  // Slide 1: Original ProductShowcase
  <ProductShowcase key="product-showcase">
    <ProductContainer>
      <ProductInner>
        <ProductContent>
          <CocktailBottle>
            <BottleCap />
            <BottleLabel>
              <LabelTitle>COCKTAIL</LabelTitle>
              <LabelSubtitle>PREMIUM</LabelSubtitle>
              <LabelSignature>Signature</LabelSignature>
              <LabelSubtitle>Blend</LabelSubtitle>
            </BottleLabel>
          </CocktailBottle>
          <GlassContainer>
            <CocktailGlass>
              <CocktailLiquid />
              <GlassHighlight />
            </CocktailGlass>
          </GlassContainer>
        </ProductContent>
      </ProductInner>
    </ProductContainer>
    <FloatingElement1 />
    <FloatingElement2 />
    <FloatingElement3 />
    <BackgroundDecorative>
      <DecorativeElement1 />
      <DecorativeElement2 />
    </BackgroundDecorative>
  </ProductShowcase>,
  // Slide 2: Placeholder
  <Placeholder key="placeholder-1">
    🍹
    <PlaceholderLabel>New Product Coming Soon</PlaceholderLabel>
  </Placeholder>,
  // Slide 3: Placeholder
  <Placeholder key="placeholder-2">
    🥂
    <PlaceholderLabel>Limited Edition</PlaceholderLabel>
  </Placeholder>,
];

const HeroSlideshow: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {slides[index]}
      <Dots>
        {slides.map((_, i) => (
          <Dot
            key={i}
            active={i === index}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </Dots>
    </div>
  );
};

export default HeroSlideshow;
