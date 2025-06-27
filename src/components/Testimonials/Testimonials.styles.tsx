import styled from "styled-components";

export const TestimonialsSection = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.chocolateKisses.base} 0%,
    ${({ theme }) => theme.colors.chocolateKisses.dark} 100%
  );
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  position: relative;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
`;

export const SectionTitle = styled.h2`
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

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.mauvelous.base};
  max-width: 36rem;
  margin: 0 auto;
`;

export const TestimonialsContainer = styled.div`
  position: relative;
`;

export const TestimonialsGrid = styled.div`
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

export const TestimonialCard = styled.div`
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

export const TestimonialContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const TestimonialText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-style: italic;

  &::before {
    content: '"';
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.caramel.base};
    margin-right: 0.2em;
  }

  &::after {
    content: '"';
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.caramel.base};
    margin-left: 0.2em;
  }
`;

export const TestimonialFooter = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const CustomerAvatar = styled.div<{ $color: string }>`
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

export const CustomerInfo = styled.div`
  flex: 1;
`;

export const CustomerName = styled.div`
  font-weight: 600;
  color: white;
  margin-bottom: 0.25rem;
`;

export const CustomerTitle = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.caramel.base};
  opacity: 0.9;
`;

export const RatingStars = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Star = styled.span`
  color: ${({ theme }) => theme.colors.caramel.base};
  font-size: 1.125rem;
`;

export const NavigationDots = styled.div`
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

export const Dot = styled.button<{ $active: boolean }>`
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

export const BackgroundDecoration = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.1;
  pointer-events: none;
`;

export const DecorativeCircle = styled.div<{
  $size: string;
  $position: string;
}>`
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
