"use client";

import React from "react";
import Link from "next/link";
import {
  BreadcrumbContainer,
  BreadcrumbWrapper,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbCurrent,
  BreadcrumbSeparator,
} from "./Breadcrumb.styles";

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
