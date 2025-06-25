"use client";

import React from "react";
import Link from "next/link";
import styled from "styled-components";

// Styled Components
const BreadcrumbContainer = styled.nav`
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.currentSemantic.borderLight};
  background-color: ${({ theme }) => theme.currentSemantic.surface};
`;

const BreadcrumbWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const BreadcrumbLink = styled.div`
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  text-decoration: none;
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.semantic.secondary};
  }
`;

const BreadcrumbCurrent = styled.span`
  color: ${({ theme }) => theme.currentSemantic.foreground};
  font-size: 0.875rem;
  font-weight: 500;
`;

const BreadcrumbSeparator = styled.span`
  color: ${({ theme }) => theme.currentSemantic.foregroundMuted};
  font-size: 0.875rem;
  opacity: 0.6;
`;

// Home Icon Component
const HomeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

// Arrow Right Icon Component
const ArrowRightIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9,18 15,12 9,6" />
  </svg>
);

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
  }>;
  showHome?: boolean;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, showHome = true }) => {
  return (
    <BreadcrumbContainer>
      <BreadcrumbWrapper>
        <BreadcrumbList>
          {showHome && (
            <>
              <BreadcrumbItem>
                <Link href="/">
                  <BreadcrumbLink>
                    <HomeIcon />
                  </BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              {items.length > 0 && (
                <BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ArrowRightIcon />
                  </BreadcrumbSeparator>
                </BreadcrumbItem>
              )}
            </>
          )}

          {items.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.href && index < items.length - 1 ? (
                  <Link href={item.href}>
                    <BreadcrumbLink>{item.label}</BreadcrumbLink>
                  </Link>
                ) : (
                  <BreadcrumbCurrent>{item.label}</BreadcrumbCurrent>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && (
                <BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ArrowRightIcon />
                  </BreadcrumbSeparator>
                </BreadcrumbItem>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </BreadcrumbWrapper>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
