"use client";

import React, { useState } from "react";
import { useTheme } from "@/theme";
import Link from "next/link";

// Icons
const UserIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
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
    <nav className="bg-background border-b border-border sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-secondary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-secondary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>

          {/* Logo - Center */}
          <div className="flex-1 flex justify-center md:flex-none">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-primary">
                COCKTAIL
                <span className="text-secondary">CO</span>
              </div>
            </Link>
          </div>

          {/* Right Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#find-store"
              className="text-foreground hover:text-secondary transition-colors duration-200 font-medium"
            >
              Find in Store
            </a>
            <button
              onClick={toggleTheme}
              className="text-foreground hover:text-secondary transition-colors duration-200 text-sm"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <a
              href="#account"
              className="text-foreground hover:text-secondary transition-colors duration-200"
              aria-label="Account"
            >
              <UserIcon className="w-6 h-6" />
            </a>
            <a
              href="#cart"
              className="text-foreground hover:text-secondary transition-colors duration-200 relative"
              aria-label="Shopping cart"
            >
              <CartIcon className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </a>
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-foreground hover:text-secondary transition-colors duration-200"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <a
              href="#account"
              className="text-foreground hover:text-secondary transition-colors duration-200"
            >
              <UserIcon className="w-6 h-6" />
            </a>
            <a
              href="#cart"
              className="text-foreground hover:text-secondary transition-colors duration-200 relative"
            >
              <CartIcon className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-xs">
                0
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-secondary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#find-store"
                className="text-foreground hover:text-secondary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find in Store
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
