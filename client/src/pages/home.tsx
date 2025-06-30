import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Wrench, Rocket } from "lucide-react";
import HeroSection from "@/components/hero-section";
import FeaturedOfferings from "@/components/featured-offerings";
import AboutUs from "@/pages/about";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <FeaturedOfferings /> */}
      <AboutUs />

    </main>
  );
}
