import CheckoutPageClient from "./CheckoutPageClient";
import Navigation from "../../components/Navigation/Navigation";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";

export default function CheckoutPage() {
  const breadcrumbItems = [
    { label: "Shop", href: "/shop" },
    { label: "Cart", href: "/cart" },
    { label: "Checkout" },
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <CheckoutPageClient />
      <Footer />
    </>
  );
}
