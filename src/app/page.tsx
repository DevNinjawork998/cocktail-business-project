import Navigation from "@/components/Navigation";
import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LandingPage />
      <Footer />
    </div>
  );
}
