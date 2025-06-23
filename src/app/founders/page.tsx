import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FoundersSection from "@/components/FoundersSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meet Our Founders - Cocktail Business",
  description:
    "Learn about the passionate founders behind our premium cocktail business and their journey to create extraordinary experiences.",
};

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FoundersSection />
      <Footer />
    </div>
  );
}
