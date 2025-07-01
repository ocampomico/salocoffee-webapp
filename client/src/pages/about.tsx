import { Coffee, Heart, Award, Users } from "lucide-react";
import SaloPour from "@/assets/salo-pour.gif";
import SaloEvent1 from "@/assets/salo-event1.jpg";
import SaloEvent2 from "@/assets/salo-event2.jpg";
import SaloEvent3 from "@/assets/salo-event3.jpg";
import PhotoReel from "@/components/photo-reel";

export default function About() {
  return (
    <section id="about" className="organic-spacing warm-gradient">
      <div className="container mx-auto px-6">
        {/* Main About Section - Shio Style */}
        <div className="asymmetric-grid">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display section-title text-coffee-dark">
                about us
              </h2>
              <img src={SaloPour} alt="Loading..." className="w-auto h-auto object-cover rounded-xl shadow-lg" />
              <div className="w-16 h-px bg-coffee-primary"></div>
            </div>
            <p className="font-body text-coffee-brown organic-text">
              Filipino-owned coffee company with a mission to spread the warmth of community and hospitality through every cup.
            </p>
          </div>
          <div className="space-y-6">
            <p className="font-body text-base md:text-lg text-coffee-brown organic-text">
              <em> Salo Coffee </em> is our opportunity to make people feel welcomed through delicious coffee and genuine connections. Whether it's a wedding, corporate event, book signing, or any big life moments, we're ready to make it extra delicious.
            </p>
            <p className="font-body text-base md:text-lg text-coffee-brown organic-text">
              We work hard to create both custom menu items for specific events and familiar favorites for everyday drinking. Every cup is crafted with care, bringing the warmth of community to your gathering.
            </p>
          </div>
        </div>

        <PhotoReel />
        
        {/* Values Section */}
        <div className="flowing-layout mt-24">
          <div className="text-center space-y-8">
            <h3 className="font-display text-3xl md:text-4xl text-coffee-dark font-medium">
              Available for any and all events
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-coffee-primary/10 flex items-center justify-center">
                <Coffee className="w-8 h-8 text-coffee-primary" />
              </div>
              <h4 className="font-display text-xl text-coffee-dark font-medium">Artisanal Coffee</h4>
              <p className="font-body text-coffee-brown organic-text text-sm">Premium beans expertly crafted for every occasion</p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-coffee-primary/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-coffee-primary" />
              </div>
              <h4 className="font-display text-xl text-coffee-dark font-medium">Community Love</h4>
              <p className="font-body text-coffee-brown organic-text text-sm">Supporting our community one cup at a time</p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-coffee-primary/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-coffee-primary" />
              </div>
              <h4 className="font-display text-xl text-coffee-dark font-medium">Custom Recipes</h4>
              <p className="font-body text-coffee-brown organic-text text-sm">Tailored menu items for your specific event</p>
            </div>

            <div className="text-center space-y-4 p-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-coffee-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-coffee-primary" />
              </div>
              <h4 className="font-display text-xl text-coffee-dark font-medium">Personal Touch</h4>
              <p className="font-body text-coffee-brown organic-text text-sm">Genuine connections with every interaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}