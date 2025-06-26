import styled from "styled-components";

export const FoundersContainer = styled.section`
  padding: 5rem 1rem;
`;

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 1rem;
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 3rem;
    }
  `}
`;

export const TitleDivider = styled.div`
  width: 6rem;
  height: 0.25rem;
  background-color: ${({ theme }) => theme.semantic.secondary};
  margin: 0 auto;
`;

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.lg}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};
  line-height: 1.2;
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 2.25rem;
    }
  `}
`;

export const TitleAccent = styled.span`
  color: ${({ theme }) => theme.semantic.secondary};
`;

export const ContentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ContentParagraph = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  line-height: 1.7;
`;

export const FounderHighlights = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

export const HighlightCard = styled.div`
  background-color: ${({ theme }) => theme.currentSemantic.surface};
  border: 1px solid ${({ theme }) => theme.currentSemantic.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 1.5rem;
`;

export const HighlightTitle = styled.h3`
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 0.5rem;
`;

export const HighlightText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
`;

export const ValuesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ValuesTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.primary};
`;

export const ValuesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ValueItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ValueDot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.semantic.secondary};
  border-radius: 50%;
  flex-shrink: 0;
`;

export const ValueText = styled.span`
  color: ${({ theme }) => theme.currentSemantic.foreground};
`;

export const RightContent = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  z-index: 10;
`;

export const ImageWrapper = styled.div`
  position: relative;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.caramel.base} 0%,
    ${({ theme }) => theme.colors.mauvelous.base} 50%,
    ${({ theme }) => theme.currentSemantic.background} 100%
  );
  padding: 1.5rem;
  border-radius: 1.5rem;
`;

export const MockImageContainer = styled.div`
  background-color: ${({ theme }) => theme.currentSemantic.surface};
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`;

export const MockImage = styled.div`
  aspect-ratio: 4/3;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.chocolateKisses.base} 0%,
    ${({ theme }) => theme.colors.mauvelous.base} 50%,
    ${({ theme }) => theme.colors.caramel.base} 100%
  );
  border-radius: 0.75rem;
  position: relative;
  overflow: hidden;
`;

export const FoundersDisplay = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
`;

export const FounderAvatar = styled.div`
  position: relative;
`;

export const AvatarShape = styled.div`
  width: 5rem;
  height: 6rem;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.chocolateKisses.base} 0%,
    transparent 100%
  );
  border-radius: 2.5rem 2.5rem 0 0;
  opacity: 0.6;
`;

export const AvatarLabel = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export const AvatarBadge = styled.div<{ $variant: "alex" | "marcus" }>`
  width: 3rem;
  height: 0.75rem;
  background-color: ${({ theme, $variant }) =>
    $variant === "alex"
      ? theme.colors.royalOrange.base
      : theme.colors.caramel.base};
  border-radius: 9999px;
  margin-bottom: 0.25rem;
`;

export const AvatarName = styled.div`
  font-size: 0.75rem;
  color: white;
  font-weight: 500;
`;

export const DecorativeElements = styled.div`
  position: absolute;
  inset: 0;
`;

export const DecorativeDot = styled.div<{
  $size: string;
  $color: string;
  $position: string;
}>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  opacity: 0.4;
  ${({ $position }) => $position}
`;

export const ImageCaption = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export const CaptionText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  font-style: italic;
`;

export const BackgroundDecoration = styled.div`
  position: absolute;
  inset: 0;
  z-index: -10;
`;

export const BackgroundDot = styled.div<{
  $size: string;
  $color: string;
  $position: string;
  $blur?: boolean;
}>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  opacity: 0.1;
  ${({ $blur }) => $blur && "filter: blur(3rem);"}
  ${({ $position }) => $position}
`;

export const BottomSection = styled.div`
  margin-top: 5rem;
  padding-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.currentSemantic.border};
`;

export const JourneyHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const JourneyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.semantic.primary};
  margin-bottom: 1rem;
`;

export const JourneyDescription = styled.p`
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  max-width: 32rem;
  margin: 0 auto;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.secondary};
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
`;
