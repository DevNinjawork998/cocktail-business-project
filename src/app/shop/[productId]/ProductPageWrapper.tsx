"use client";

import React, { useState, useEffect } from "react";
import ProductPageClient from "./ProductPageClient";
import ProductPageLoading from "./ProductPageLoading";
import { Product } from "@/data/serverProductService";

interface ProductPageWrapperProps {
  product: Product;
  otherProducts: Product[];
}

export default function ProductPageWrapper({
  product,
  otherProducts,
}: ProductPageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a minimum loading time to prevent flash
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ProductPageLoading />;
  }

  return <ProductPageClient product={product} otherProducts={otherProducts} />;
}
