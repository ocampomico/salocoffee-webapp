import { Coffee, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleOrderNow = () => {
    // In a real implementation, this would open an ordering system or initiate a phone call
    window.open("tel:5551234273", "_self");
  };

  const handleFindUs = () => {
    // In a real implementation, this would show current location or redirect to location page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = '#contact';
  };

  return (
    <section className="relative overflow-hidden gradient-primary py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
            Salo Coffee
            {/* <span className="block text-white/90">on Wheels</span> */}
          </h1>
          {/* <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Bringing artisanal coffee directly to you, wherever you are. Experience the perfect brew crafted with passion.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={handleOrderNow}
              className="bg-white text-coffee-primary hover:bg-white/90 px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105 shadow-modern-lg hover:shadow-modern-xl text-lg"
              size="lg"
            >
              <Coffee className="mr-3 h-6 w-6" />
              Order Now
            </Button>
            <Button
              onClick={handleFindUs}
              variant="outline"
              className="border-2 border-white/30 glass-morphism hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-semibold transition-all text-lg"
              size="lg"
            >
              <MapPin className="mr-3 h-6 w-6" />
              Find Us Today
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative coffee beans */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-white/15 rounded-full animate-pulse delay-1000" />
    </section>
  );
}
