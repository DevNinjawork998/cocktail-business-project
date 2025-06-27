"use client";

import CartPageClient from "./CartPageClient";
import Navigation from "../../components/Navigation/Navigation";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import { CartPageBackground } from "./CartPageClient.styles";

export default function CartPage() {
  const breadcrumbItems = [{ label: "Shop", href: "/shop" }, { label: "Cart" }];

  return (
    <CartPageBackground>
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <CartPageClient />
      <Footer />
    </CartPageBackground>
  );
}
