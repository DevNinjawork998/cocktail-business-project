"use client";

import React, { useState } from "react";
import Link from "next/link";
import CartIcon from "@/components/CartIcon/CartIcon";
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
  MobileMenu,
  MobileMenuLinks,
  MobileNavLink,
  CartIconWrapper,
} from "./Navigation.styles";

// Icons
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Founders", href: "/founders" },
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

          {/* Cart Icon - Right */}
          <CartIconWrapper>
            <CartIcon />
          </CartIconWrapper>
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
            <Link href="/cart">
              <MobileNavLink onClick={() => setIsMobileMenuOpen(false)}>
                Cart
              </MobileNavLink>
            </Link>
          </MobileMenuLinks>
        </MobileMenu>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navigation;
