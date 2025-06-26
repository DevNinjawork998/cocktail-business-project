import styled from "styled-components";

// Styled Components
export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.chocolateKisses.base};
  color: white;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  ${({ theme }) => theme.spacing.md};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing["3xl"]} ${theme.spacing.md};
    }
  `}
`;

export const FooterWrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  width: 100%;
`;

export const FooterContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["2xl"]};
`;

export const TaglineSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const MainTagline = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.caramel.base};
  line-height: 1.3;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 2.25rem;
    }
  `}
`;

export const SubTagline = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.mauvelous.base};
  line-height: 1.6;
  max-width: 32rem;
  margin: 0 auto;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 1.125rem;
    }
  `}
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

export const SocialTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.caramel.base};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  padding: 0 ${({ theme }) => theme.spacing.md};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      gap: ${theme.spacing.lg};
      padding: 0;
    }
  `}
`;

export const SocialLinkButton = styled.a`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.full};
  border: 2px solid ${({ theme }) => theme.colors.caramel.base};
  transition: all 0.3s ease;
  transform: scale(1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 3rem;
  min-height: 3rem;
  background-color: transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.royalOrange.base};
    background-color: ${({ theme }) => theme.colors.royalOrange.base};
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(248, 146, 86, 0.3);
  }

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing.lg};
      min-width: 3.5rem;
      min-height: 3.5rem;
    }
  `}
`;

export const SocialIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.caramel.base};
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${SocialLinkButton}:hover & {
    color: white;
  }

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`;

export const DividerLine = styled.div`
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    ${({ theme }) => theme.colors.mauvelous.base} 20%,
    ${({ theme }) => theme.colors.caramel.base} 50%,
    ${({ theme }) => theme.colors.mauvelous.base} 80%,
    transparent 100%
  );
  opacity: 0.5;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

export const CopyrightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`;

export const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.mauvelous.base};
  font-size: 0.875rem;
  opacity: 0.8;
`;

export const BrandText = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.caramel.base};
  opacity: 0.6;
  font-weight: 500;
`;
