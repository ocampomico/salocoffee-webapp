import React, { useEffect, useState } from "react";
import { Coffee, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SaloLogo from "@/assets/salo-logo.png";

export default function HeroSection() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust denominator to control how fast it rotates
      // Smaller denominator = faster rotation
      // Larger denominator = slower rotation
      const maxRotation = 180;
      const scrollY = window.scrollY;
      const angle = Math.min(maxRotation, Math.max(0, scrollY / 1.2));
      setRotation(angle);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOrderNow = () => {
    window.open("tel:5551234273", "_self");
  };

  const handleFindUs = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center warm-gradient overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-coffee-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-coffee-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-12">
          {/* Main Heading - Shio Style */}
          
          <div className="space-y-6">
            <h1 className="font-display hero-text text-coffee-brown text-shadow-soft">
              <img
                src={SaloLogo}
                alt="Salo Logo"
                height={200}
                width={400}
                className="mx-auto"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 0.2s cubic-bezier(0.4,0,0.2,1)",
                  willChange: "transform",
                }}
              />
            </h1>
            <div className="space-y-4">
              <div className="w-24 h-px bg-coffee-primary mx-auto"></div>
            </div>
          </div>
          
          {/* Subtitle - Organic Typography */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <p className="font-body text-xl md:text-2xl text-coffee-dark organic-text font-light">
              BRINGING PREMIUM COFFEE TO YOUR COMMUNITY
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-20">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 1000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top Left */}
          <path
            d="M0,120 Q60,60 120,0 M0,250 Q100,180 180,80"
            stroke="#5e7136"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          {/* Top Right */}
          <path
            d="M800,120 Q740,60 680,0 M800,250 Q700,180 620,80"
            stroke="#5e7136"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          {/* Bottom Left */}
          <path
            d="M0,880 Q60,940 120,1000 M0,750 Q100,820 180,920"
            stroke="#5e7136"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          {/* Bottom Right */}
          <path
            d="M800,880 Q740,940 680,1000 M800,750 Q700,820 620,920"
            stroke="#5e7136"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          {/* Sides (optional, for more organic feel) */}
          <path
            d="M40,0 Q20,500 40,1000"
            stroke="#5e7136"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M760,0 Q780,500 760,1000"
            stroke="#5e7136"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
