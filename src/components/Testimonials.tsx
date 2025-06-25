"use client";

import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const TestimonialsSection = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.chocolateKisses.base} 0%,
    ${({ theme }) => theme.colors.chocolateKisses.dark} 100%
  );
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.caramel.base};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 3rem;
    }
  `}
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.mauvelous.base};
  max-width: 36rem;
  margin: 0 auto;
`;

const TestimonialsContainer = styled.div`
  position: relative;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;

const TestimonialCard = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.royalOrange.base} 0%,
    ${({ theme }) => theme.colors.bittersweetShimmer.base} 100%
  );
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.caramel.base} 0%,
      ${({ theme }) => theme.colors.mauvelous.base} 100%
    );
  }
`;

const TestimonialContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-style: italic;

  &::before {
    content: "" ";
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.caramel.base};
  }

  &::after {
    content: " "";
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.caramel.base};
  }
`;

const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CustomerAvatar = styled.div<{ $color: string }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.125rem;
  flex-shrink: 0;
`;

const CustomerInfo = styled.div`
  flex: 1;
`;

const CustomerName = styled.div`
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
`;

const CustomerTitle = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.caramel.base};
  opacity: 0.9;
`;

const RatingStars = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Star = styled.span`
  color: ${({ theme }) => theme.colors.caramel.base};
  font-size: 1.125rem;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing["2xl"]};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.lg}) {
      display: none;
    }
  `}
`;

const Dot = styled.button<{ $active: boolean }>`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.caramel.base : theme.colors.mauvelous.base};
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  pointer-events: none;
`;

const DecorativeCircle = styled.div<{ $size: string; $position: string }>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.caramel.base} 0%,
    ${({ theme }) => theme.colors.mauvelous.base} 100%
  );
  ${({ $position }) => $position}
  filter: blur(2rem);
`;

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    text: "Great tasting cocktail! Truffle Shuffle. Feels guilt free. Love it so much though there's a bittersweet moment.",
    customerName: "Jenny",
    customerTitle: "Truffle Zombie Butler",
    customerInitial: "J",
    avatarColor: "#FF6B6B",
    rating: 5,
  },
  {
    id: 2,
    text: "I was a gift for my daughter and she was super pleased!!! Everything it taste. I do want to continue to purchase in the future!!",
    customerName: "Kat",
    customerTitle: "Truffle Zombie Butler",
    customerInitial: "K",
    avatarColor: "#4ECDC4",
    rating: 5,
  },
  {
    id: 3,
    text: "The bottle really good. Tried same before too, gave the Taste! Zombie & Truffle Zombie Combo it is my go to.",
    customerName: "Jay",
    customerTitle: "Truffle Zombie Butler",
    customerInitial: "J",
    avatarColor: "#45B7D1",
    rating: 5,
  },
  {
    id: 4,
    text: "Love it - extremely fresh and delicious truffle taste that feels like it my go to drink for a night out. It is my go to myself and friends!",
    customerName: "Melissa C",
    customerTitle: "Truffle Zombie Butler",
    customerInitial: "M",
    avatarColor: "#96CEB4",
    rating: 5,
  },
  {
    id: 5,
    text: "Amazing flavors that transport you to cocktail paradise. The premium ingredients really show in every sip!",
    customerName: "Alex R",
    customerTitle: "Cocktail Enthusiast",
    customerInitial: "A",
    avatarColor: "#FECA57",
    rating: 5,
  },
  {
    id: 6,
    text: "Best cocktail experience I've had! The balance of flavors is perfect and the quality is unmatched.",
    customerName: "Sarah M",
    customerTitle: "Mixology Expert",
    customerInitial: "S",
    avatarColor: "#FF9FF3",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);

  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index}>{index < rating ? "★" : "☆"}</Star>
    ));
  };

  return (
    <TestimonialsSection>
      <BackgroundDecoration>
        <DecorativeCircle
          $size="20rem"
          $position="top: -10rem; left: -10rem;"
        />
        <DecorativeCircle
          $size="15rem"
          $position="bottom: -8rem; right: -8rem;"
        />
      </BackgroundDecoration>

      <Container>
        <SectionHeader>
          <SectionTitle>Customer Testimonials 🥂</SectionTitle>
          <SectionSubtitle>
            Real words from happy customers who've tasted the magic ✨
          </SectionSubtitle>
        </SectionHeader>

        <TestimonialsContainer>
          <TestimonialsGrid>
            {getVisibleTestimonials().map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <TestimonialContent>
                  <RatingStars>{renderStars(testimonial.rating)}</RatingStars>
                  <TestimonialText>{testimonial.text}</TestimonialText>
                </TestimonialContent>

                <TestimonialFooter>
                  <CustomerAvatar $color={testimonial.avatarColor}>
                    {testimonial.customerInitial}
                  </CustomerAvatar>
                  <CustomerInfo>
                    <CustomerName>{testimonial.customerName}</CustomerName>
                    <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                  </CustomerInfo>
                </TestimonialFooter>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>

          <NavigationDots>
            {Array.from({ length: totalSlides }, (_, index) => (
              <Dot
                key={index}
                $active={index === currentSlide}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </NavigationDots>
        </TestimonialsContainer>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;
