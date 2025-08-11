"use client";

import Navigation from "../../../components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import ProductPageLoading from "./ProductPageLoading";

export default function Loading() {
  return (
    <>
      <Navigation />
      <ProductPageLoading />
      <Footer />
    </>
  );
}
