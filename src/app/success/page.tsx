import { Suspense } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import SuccessPageClient from "./SuccessPageClient";

export default function SuccessPage() {
  const breadcrumbItems = [
    { label: "Shop", href: "/shop" },
    { label: "Checkout", href: "/checkout" },
    { label: "Success" },
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessPageClient />
      </Suspense>
      <Footer />
    </>
  );
}
