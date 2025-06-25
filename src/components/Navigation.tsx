"use client";

import React, { useState } from "react";
import { useTheme } from "@/theme";
import Link from "next/link";
import styled from "styled-components";

// Styled Components
const NavContainer = styled.nav`
  background-color: ${({ theme }) => theme.currentSemantic.background};
  border-bottom: 1px solid ${({ theme }) => theme.currentSemantic.border};
  position: sticky;
  top: 0;
  z-index: 50;
  transition: all 0.3s ease;
`;

const NavWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

const DesktopNavLinks = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      display: flex;
    }
  `}
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.currentSemantic.foreground};
  font-weight: 500;
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }
`;

const MobileMenuButton = styled.button`
  display: block;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.currentSemantic.foreground};
  transition: color 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `}
`;

const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      flex: none;
    }
  `}
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoText = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.semantic.primary};
`;

const LogoAccent = styled.span`
  color: ${({ theme }) => theme.semantic.secondary};
`;

const DesktopRightNav = styled.div`
  display: none;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      display: flex;
    }
  `}
`;

const ThemeButton = styled.button`
  color: ${({ theme }) => theme.currentSemantic.foreground};
  transition: color 0.2s ease;
  font-size: 0.875rem;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }
`;

const IconButton = styled.a`
  color: ${({ theme }) => theme.currentSemantic.foreground};
  transition: color 0.2s ease;
  text-decoration: none;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: ${({ theme }) => theme.semantic.secondary};
  color: white;
  font-size: 0.75rem;
  border-radius: ${({ theme }) => theme.radii.full};
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileCartBadge = styled(CartBadge)`
  width: 1rem;
  height: 1rem;
  font-size: 0.75rem;
`;

const MobileIcons = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `}
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-top: 1px solid ${({ theme }) => theme.currentSemantic.border};

  ${({ theme }) =>
    theme.breakpoints.md &&
    `
    @media (min-width: ${theme.breakpoints.md}) {
      display: none;
    }
  `}
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const MobileNavLink = styled(Link)`
  color: ${({ theme }) => theme.currentSemantic.foreground};
  font-weight: 500;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }
`;

// Icons
const UserIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "1.5rem", height: "1.5rem" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const CartIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "1.5rem", height: "1.5rem" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
    />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "1.5rem", height: "1.5rem" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "1.5rem", height: "1.5rem" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Shop", href: "/" },
    { label: "Learn", href: "#learn" },
    { label: "Founders", href: "/founders" },
    { label: "Subscribe", href: "#subscribe" },
  ];

  return (
    <NavContainer>
      <NavWrapper>
        <NavContent>
          {/* Left Navigation - Desktop */}
          <DesktopNavLinks>
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </DesktopNavLinks>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </MobileMenuButton>

          {/* Logo - Center */}
          <LogoContainer>
            <Logo href="/">
              <LogoText>
                COCKTAIL<LogoAccent>CO</LogoAccent>
              </LogoText>
            </Logo>
          </LogoContainer>

          {/* Right Navigation - Desktop */}
          <DesktopRightNav>
            <NavLink href="#find-store">Find in Store</NavLink>
            <ThemeButton onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </ThemeButton>
            <IconButton href="#account" aria-label="Account">
              <UserIcon />
            </IconButton>
            <IconButton href="#cart" aria-label="Shopping cart">
              <CartIcon />
              <CartBadge>0</CartBadge>
            </IconButton>
          </DesktopRightNav>

          {/* Mobile Icons */}
          <MobileIcons>
            <ThemeButton onClick={toggleTheme}>
              {theme === "light" ? "🌙" : "☀️"}
            </ThemeButton>
            <IconButton href="#account">
              <UserIcon />
            </IconButton>
            <IconButton href="#cart">
              <CartIcon />
              <MobileCartBadge>0</MobileCartBadge>
            </IconButton>
          </MobileIcons>
        </NavContent>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen}>
          <MobileMenuLinks>
            {navLinks.map((link) => (
              <MobileNavLink
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </MobileNavLink>
            ))}
            <MobileNavLink
              href="#find-store"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find in Store
            </MobileNavLink>
          </MobileMenuLinks>
        </MobileMenu>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navigation;
