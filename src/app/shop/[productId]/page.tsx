import { notFound } from "next/navigation";
import ProductPageClient from "./ProductPageClient";
import Navigation from "../../../components/Navigation/Navigation";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Footer from "@/components/Footer/Footer";
import { getProductById, getOtherProducts } from "@/data/products";

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = getProductById(productId);

  if (!product) {
    notFound();
  }

  const otherProducts = getOtherProducts(productId);

  const breadcrumbItems = [
    { label: "Shop", href: "/shop" },
    { label: product.name },
  ];

  return (
    <>
      <Navigation />
      <Breadcrumb items={breadcrumbItems} />
      <ProductPageClient product={product} otherProducts={otherProducts} />
      <Footer />
    </>
  );
}
