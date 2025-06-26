import React, { useState } from "react";
import {
  Section,
  Headline,
  Intro,
  IngredientList,
  IngredientItem,
  IngredientHeader,
  IngredientIcon,
  IngredientName,
  IngredientDropdown,
  IngredientDescription,
  ChevronIcon,
} from "./HealthBenefits.styles";

const ingredients = [
  {
    icon: "🪷",
    name: "Ashwagandha",
    subtitle: "Promotes relaxation",
    description:
      "Ashwagandha is a powerful adaptogen used to reduce stress and support hormonal balance.",
    type: "Adaptogen",
  },
  {
    icon: "🥄",
    name: "Maca",
    subtitle: "Fosters vitality",
    description:
      "Maca root helps boost stamina and naturally balance hormones without caffeine.",
    type: "Adaptogen",
  },
  {
    icon: "🌳",
    name: "Baobab",
    subtitle: "Supplies vitamin C",
    description:
      "Baobab is rich in antioxidants and fiber, promoting healthy digestion and immune strength.",
    type: "Adaptogen",
  },
  {
    icon: "🫚",
    name: "Ginger",
    subtitle: "Aids digestion",
    description:
      "Ginger soothes the digestive tract and has anti-inflammatory effects.",
    type: "Adaptogen",
  },
  {
    icon: "🍊",
    name: "Orange",
    subtitle: "High in antioxidants",
    description:
      "Oranges are a natural source of Vitamin C and bioflavonoids to boost immunity.",
    type: "Fruit",
  },
  {
    icon: "🍏",
    name: "Apple",
    subtitle: "Good source of fiber",
    description:
      "Apples contain fiber and plant nutrients that support digestion and heart health.",
    type: "Fruit",
  },
  {
    icon: "🫐",
    name: "Cranberry",
    subtitle: "Supports immunity",
    description:
      "Cranberries help prevent UTIs and provide polyphenols that reduce inflammation.",
    type: "Fruit",
  },
  {
    icon: "🍫",
    name: "Cacao",
    subtitle: "Contains polyphenols",
    description: "Cacao is rich in mood-lifting flavonoids and magnesium.",
    type: "Natural Flavor",
  },
  {
    icon: "☕️",
    name: "Coffee",
    subtitle: "Provides a bold taste",
    description: "Coffee is a natural stimulant loaded with antioxidants.",
    type: "Natural Flavor",
  },
  {
    icon: "🌰",
    name: "Cinnamon",
    subtitle: "Flavored with spice",
    description:
      "Cinnamon helps regulate blood sugar and adds warmth to drinks.",
    type: "Natural Flavor",
  },
  {
    icon: "🍯",
    name: "Honey",
    subtitle: "Naturally sweet",
    description:
      "Honey is a natural sweetener with antibacterial and antioxidant benefits.",
    type: "Natural Flavor",
  },
];

const typeColors = {
  Adaptogen: "#fff", // white
  Fruit: "#FFE9A7", // yellow
  "Natural Flavor": "#DFF5D8", // green
};

const HealthBenefits = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Section>
      <Headline>Health Benefits</Headline>
      <Intro>
        <strong>
          Ever wonder how we made mocktails taste this good and still be good
          for you?
        </strong>
        <br />
        &quot;It&apos;s no accident. We carefully chose ingredients backed by
        science and tradition. Adaptogens for stress, antioxidants for glow, and
        botanicals to keep your gut happy. Every sip works as hard as you
        do.&quot;
      </Intro>
      <IngredientList>
        {ingredients.map((ingredient, idx) => (
          <IngredientItem
            key={ingredient.name}
            $typecolor={typeColors[ingredient.type as keyof typeof typeColors]}
          >
            <IngredientHeader onClick={() => handleToggle(idx)}>
              <IngredientIcon>{ingredient.icon}</IngredientIcon>
              <IngredientName>
                {ingredient.name}
                <br />
                <span
                  style={{
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "0.95em",
                  }}
                >
                  {ingredient.subtitle}
                </span>
              </IngredientName>
              <ChevronIcon open={openIndex === idx}>▼</ChevronIcon>
            </IngredientHeader>
            <IngredientDropdown open={openIndex === idx}>
              <IngredientDescription>
                {ingredient.description}
              </IngredientDescription>
            </IngredientDropdown>
          </IngredientItem>
        ))}
      </IngredientList>
    </Section>
  );
};

export default HealthBenefits;
