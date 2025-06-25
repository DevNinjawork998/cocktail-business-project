import type { Metadata } from "next";
import FoundersPageClient from "./FoundersPageClient";

export const metadata: Metadata = {
  title: "Meet Our Founders - Cocktail Business",
  description:
    "Learn about the passionate founders behind our premium cocktail business and their journey to create extraordinary experiences.",
};

export default function FoundersPage() {
  return <FoundersPageClient />;
}
