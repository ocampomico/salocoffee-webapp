import React, { useEffect, useState } from "react";
import { Coffee, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SaloLogo from "@/assets/salo-logo.svg";

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
    window.location.href = "/contact";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-coffee-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-coffee-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10" style={{ paddingBottom: "20px" }}>
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

          <Button onClick={handleOrderNow}>
            <span className="flex items-center justify-center space-x-2">
              <Coffee className="h-5 w-5" />
              <span>Book Now</span>
            </span>
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
        <svg
          width="90%"
          height="90%"
          viewBox="0 0 800 1000"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[90%] h-[90%] mx-auto my-auto"
          style={{ display: "block" }}
        >
          {/* Top Left */}
          <path
            d="M30,120 Q90,60 150,30 M30,250 Q130,180 210,80"
            stroke="#5e7136"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          {/* Top Right */}
          <path
            d="M770,120 Q710,60 650,30 M770,250 Q670,180 590,80"
            stroke="#5e7136"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          {/* Bottom Left */}
          <path
            d="M30,880 Q90,940 150,970 M30,750 Q130,820 210,920"
            stroke="#5e7136"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          {/* Bottom Right */}
          <path
            d="M770,880 Q710,940 650,970 M770,750 Q670,820 590,920"
            stroke="#5e7136"
            strokeWidth="18"
            fill="none"
            strokeLinecap="round"
          />
          {/* Sides */}
          <path
            d="M70,30 Q50,500 70,970"
            stroke="#5e7136"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M730,30 Q750,500 730,970"
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
