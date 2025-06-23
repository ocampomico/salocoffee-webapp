import { Coffee, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const offerings = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Rich, bold espresso shots made from our custom blend of premium beans",
    price: "$3.50",
    icon: Coffee,
    bgColor: "bg-coffee-primary"
  },
  {
    id: 2,
    name: "Caramel Latte",
    description: "Smooth espresso with steamed milk and our house-made caramel syrup",
    price: "$4.75",
    icon: Coffee,
    bgColor: "bg-coffee-secondary"
  },
  {
    id: 3,
    name: "Iced Cold Brew",
    description: "Smooth, refreshing cold brew steeped for 12 hours for maximum flavor",
    price: "$4.25",
    icon: Snowflake,
    bgColor: "bg-coffee-dark"
  }
];

export default function FeaturedOfferings() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Our Signature Brews
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Crafted with premium beans and served with a smile from our mobile coffee cart
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offerings.map((offering) => {
            const IconComponent = offering.icon;
            return (
              <Card key={offering.id} className="group bg-white hover:shadow-modern-xl transition-all duration-300 border-0 shadow-modern overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  <div className={`${offering.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white text-3xl" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                    {offering.name}
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {offering.description}
                  </p>
                  <div className="bg-coffee-light rounded-full px-6 py-2 inline-block">
                    <span className="text-coffee-primary font-bold text-xl">
                      {offering.price}
                    </span>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-coffee-primary/20 rounded-full group-hover:scale-150 transition-transform duration-300" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
