"use client";

import React, { useState } from "react";
import {
  TestimonialsSection,
  Container,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  TestimonialsContainer,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialContent,
  TestimonialText,
  TestimonialFooter,
  CustomerAvatar,
  CustomerInfo,
  CustomerName,
  CustomerTitle,
  RatingStars,
  Star,
  NavigationDots,
  Dot,
  BackgroundDecoration,
  DecorativeCircle,
} from "./Testimonials.styles";

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
            Real words from happy customers who&apos;ve tasted the magic ✨
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
