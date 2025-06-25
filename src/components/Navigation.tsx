"use client";

import React, { useState } from "react";
import { useTheme } from "@/theme";
import Link from "next/link";
import {
  NavContainer,
  NavWrapper,
  NavContent,
  DesktopNavLinks,
  NavLink,
  MobileMenuButton,
  LogoContainer,
  Logo,
  LogoText,
  LogoAccent,
  DesktopRightNav,
  ThemeButton,
  IconButton,
  CartBadge,
  MobileCartBadge,
  MobileIcons,
  MobileMenu,
  MobileMenuLinks,
  MobileNavLink,
} from "./Navigation.styles";

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
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
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
              <Link key={link.label} href={link.href}>
                <NavLink>{link.label}</NavLink>
              </Link>
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
            <Link href="/">
              <Logo>
                <LogoText>
                  COCKTAIL<LogoAccent>CO</LogoAccent>
                </LogoText>
              </Logo>
            </Link>
          </LogoContainer>

          {/* Right Navigation - Desktop */}
          <DesktopRightNav>
            <Link href="#find-store">
              <NavLink>Find in Store</NavLink>
            </Link>
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
        <MobileMenu $isOpen={isMobileMenuOpen}>
          <MobileMenuLinks>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                <MobileNavLink onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </MobileNavLink>
              </Link>
            ))}
            <Link href="#find-store">
              <MobileNavLink onClick={() => setIsMobileMenuOpen(false)}>
                Find in Store
              </MobileNavLink>
            </Link>
          </MobileMenuLinks>
        </MobileMenu>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navigation;
