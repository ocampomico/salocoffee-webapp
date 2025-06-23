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
    <section className="bg-gradient-to-br from-coffee-brown to-caramel text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Coffee on Wheels</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Bringing artisanal coffee directly to you, wherever you are
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleOrderNow}
            className="bg-sandy-brown hover:bg-sandy-brown/90 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            size="lg"
          >
            <Coffee className="mr-2 h-5 w-5" />
            Order Now
          </Button>
          <Button
            onClick={handleFindUs}
            variant="outline"
            className="border-2 border-white hover:bg-white hover:text-coffee-brown text-white px-8 py-3 rounded-full font-semibold transition-all"
            size="lg"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Find Us Today
          </Button>
        </div>
      </div>
    </section>
  );
}
