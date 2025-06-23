import { Truck, Award, Clock, Heart } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Mobile Convenience",
    description: "We come to you! Find us at events, office complexes, and around town",
    icon: Truck,
    bgColor: "bg-coffee-primary"
  },
  {
    id: 2,
    title: "Premium Quality",
    description: "Only the finest beans, expertly roasted and freshly brewed",
    icon: Award,
    bgColor: "bg-coffee-secondary"
  },
  {
    id: 3,
    title: "Quick Service",
    description: "Fast, friendly service that gets you caffeinated and on your way",
    icon: Clock,
    bgColor: "bg-coffee-dark"
  },
  {
    id: 4,
    title: "Local Love",
    description: "Supporting our community one cup at a time",
    icon: Heart,
    bgColor: "bg-coffee-primary"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Why Choose Brew & Go?
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Experience the difference with our premium mobile coffee service
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="group text-center">
                <div className={`${feature.bgColor} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-modern-lg group-hover:scale-110 transition-all duration-300`}>
                  <IconComponent className="text-white text-4xl" size={36} />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
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
