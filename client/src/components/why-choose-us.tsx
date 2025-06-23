import { Truck, Award, Clock, Heart } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Mobile Convenience",
    description: "We come to you! Find us at events, office complexes, and around town",
    icon: Truck,
    bgColor: "bg-coffee-brown"
  },
  {
    id: 2,
    title: "Premium Quality",
    description: "Only the finest beans, expertly roasted and freshly brewed",
    icon: Award,
    bgColor: "bg-caramel"
  },
  {
    id: 3,
    title: "Quick Service",
    description: "Fast, friendly service that gets you caffeinated and on your way",
    icon: Clock,
    bgColor: "bg-sandy-brown"
  },
  {
    id: 4,
    title: "Local Love",
    description: "Supporting our community one cup at a time",
    icon: Heart,
    bgColor: "bg-coffee-brown"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-r from-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4">
            Why Choose Brew & Go?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="text-center">
                <div className={`${feature.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="text-white text-3xl" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-coffee-brown mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
