"use client";

import React from "react";
import styled from "styled-components";

// Styled Components
const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.chocolateKisses};
  color: white;
  padding: ${({ theme }) => theme.spacing["2xl"]}
    ${({ theme }) => theme.spacing.md};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      padding: ${theme.spacing["3xl"]} ${theme.spacing.md};
    }
  `}
`;

const FooterWrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  width: 100%;
`;

const FooterContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing["2xl"]};
`;

const TaglineSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const MainTagline = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.caramel};
  line-height: 1.3;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 2.25rem;
    }
  `}
`;

const SubTagline = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.mauvelous};
  line-height: 1.6;
  max-width: 32rem;
  margin: 0 auto;

  ${({ theme }) => `
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: 1.125rem;
    }
  `}
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
`;

const SocialTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.caramel};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SocialLinksContainer = styled.div`
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

const SocialLinkButton = styled.a`
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.full};
  border: 2px solid ${({ theme }) => theme.colors.caramel};
  transition: all 0.3s ease;
  transform: scale(1);
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 3rem;
  min-height: 3rem;
  background-color: transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.royalOrange};
    background-color: ${({ theme }) => theme.colors.royalOrange};
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

const SocialIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  color: ${({ theme }) => theme.colors.caramel};
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

const DividerLine = styled.div`
  height: 1px;
  background: linear-gradient(
    to right,
    transparent 0%,
    ${({ theme }) => theme.colors.mauvelous} 20%,
    ${({ theme }) => theme.colors.caramel} 50%,
    ${({ theme }) => theme.colors.mauvelous} 80%,
    transparent 100%
  );
  opacity: 0.5;
  margin: ${({ theme }) => theme.spacing.md} 0;
`;

const CopyrightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`;

const CopyrightText = styled.p`
  color: ${({ theme }) => theme.colors.mauvelous};
  font-size: 0.875rem;
  opacity: 0.8;
`;

const BrandText = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.caramel};
  opacity: 0.6;
  font-weight: 500;
`;

// Social Media Icons as SVG components
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%" }}
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%" }}
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%" }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.488" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%" }}
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <SocialLinkButton
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <SocialIcon>{icon}</SocialIcon>
  </SocialLinkButton>
);

const Footer: React.FC = () => {
  const socialLinks = [
    {
      href: "https://instagram.com",
      icon: <InstagramIcon />,
      label: "Follow us on Instagram",
    },
    {
      href: "https://tiktok.com",
      icon: <TikTokIcon />,
      label: "Follow us on TikTok",
    },
    {
      href: "https://wa.me",
      icon: <WhatsAppIcon />,
      label: "Contact us on WhatsApp",
    },
    {
      href: "https://x.com",
      icon: <XIcon />,
      label: "Follow us on X",
    },
  ];

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          {/* Main tagline */}
          <TaglineSection>
            <MainTagline>Catch the vibe, not the hangover.</MainTagline>
            <SubTagline>
              We&apos;re popping up near you 🎉 Follow us on socials to find out
              where we&apos;re mixing next 👀
            </SubTagline>
          </TaglineSection>

          {/* Social media section */}
          <SocialSection>
            <SocialTitle>Connect with us</SocialTitle>
            <SocialLinksContainer>
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </SocialLinksContainer>
          </SocialSection>

          {/* Divider */}
          <DividerLine />

          {/* Copyright section */}
          <CopyrightSection>
            <CopyrightText>
              © 2024 Cocktail Business. All rights reserved.
            </CopyrightText>
            <BrandText>
              Crafted with ♥ for premium cocktail experiences
            </BrandText>
          </CopyrightSection>
        </FooterContent>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
