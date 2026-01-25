import React, { useState, useEffect } from "react";
import {
  Section,
  Headline,
  Intro,
  IngredientsGrid,
  IngredientCard,
  IngredientImage,
  IngredientContent,
  IngredientName,
  IngredientSubtitle,
  FlipCardContainer,
  FlipCard,
  CardFront,
  CardBack,
  BackContent,
  BackTitle,
  BackSubtitle,
  BackDescription,
} from "./HealthBenefits.styles";

interface Ingredient {
  id: string;
  name: string;
  icon: string;
  imageUrl?: string | null;
  subtitle: string;
  description: string;
  type: string;
  order: number;
}

const HealthBenefits = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch("/api/ingredients");
        if (!response.ok) {
          throw new Error("Failed to fetch ingredients");
        }
        const data = await response.json();
        setIngredients(data);
      } catch (error) {
        console.error("Error fetching ingredients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  if (loading) {
    return (
      <Section>
        <Headline>Real Ingredients. Real Results.</Headline>
        <Intro>
          We source the finest fruits from sustainable farms. No concentrates, no shortcuts.
        </Intro>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          Loading ingredients...
        </div>
      </Section>
    );
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // Prevent infinite loop - if already using fallback, use placeholder
    const currentSrc = e.currentTarget.src;
    if (currentSrc.includes("unsplash.com") || currentSrc.includes("data:")) {
      // Already using fallback, use a transparent placeholder to stop errors
      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3C/svg%3E";
      return;
    }
    // Fallback to Unsplash placeholder
    e.currentTarget.src = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=300&fit=crop&q=80";
  };

  return (
    <Section>
      <Headline>Real Ingredients. Real Results.</Headline>
      <Intro>
        We source the finest fruits from sustainable farms. No concentrates, no shortcuts.
      </Intro>
      <IngredientsGrid>
        {ingredients.map((ingredient) => {
          const isFlipped = flippedCards.has(ingredient.id);
          
          return (
            <FlipCardContainer key={ingredient.id}>
              <FlipCard
                $isFlipped={isFlipped}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setFlippedCards((prev) => {
                    const newSet = new Set(prev);
                    if (newSet.has(ingredient.id)) {
                      newSet.delete(ingredient.id);
                    } else {
                      newSet.add(ingredient.id);
                    }
                    return newSet;
                  });
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setFlippedCards((prev) => {
                      const newSet = new Set(prev);
                      if (newSet.has(ingredient.id)) {
                        newSet.delete(ingredient.id);
                      } else {
                        newSet.add(ingredient.id);
                      }
                      return newSet;
                    });
                  }
                }}
              >
                <CardFront>
                  <IngredientCard>
                    <IngredientImage>
                      <img
                        src={ingredient.imageUrl || "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400&h=300&fit=crop&q=80"}
                        alt={ingredient.name}
                        onError={handleImageError}
                        style={{ pointerEvents: "none" }}
                      />
                    </IngredientImage>
                    <IngredientContent>
                      <IngredientName>{ingredient.name}</IngredientName>
                      <IngredientSubtitle>{ingredient.subtitle}</IngredientSubtitle>
                    </IngredientContent>
                  </IngredientCard>
                </CardFront>
                <CardBack>
                  <BackContent>
                    <BackTitle>{ingredient.name}</BackTitle>
                    <BackSubtitle>{ingredient.subtitle}</BackSubtitle>
                    <BackDescription>{ingredient.description}</BackDescription>
                  </BackContent>
                </CardBack>
              </FlipCard>
            </FlipCardContainer>
          );
        })}
      </IngredientsGrid>
    </Section>
  );
};

export default HealthBenefits;
