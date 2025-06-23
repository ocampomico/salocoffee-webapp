import { Coffee, Snowflake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const offerings = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Rich, bold espresso shots made from our custom blend of premium beans",
    price: "$3.50",
    icon: Coffee,
    bgColor: "bg-coffee-brown"
  },
  {
    id: 2,
    name: "Caramel Latte",
    description: "Smooth espresso with steamed milk and our house-made caramel syrup",
    price: "$4.75",
    icon: Coffee,
    bgColor: "bg-caramel"
  },
  {
    id: 3,
    name: "Iced Cold Brew",
    description: "Smooth, refreshing cold brew steeped for 12 hours for maximum flavor",
    price: "$4.25",
    icon: Snowflake,
    bgColor: "bg-sandy-brown"
  }
];

export default function FeaturedOfferings() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4">
            Our Signature Brews
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Crafted with premium beans and served with a smile from our mobile coffee cart
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering) => {
            const IconComponent = offering.icon;
            return (
              <Card key={offering.id} className="bg-cream hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`${offering.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="text-white text-2xl" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-coffee-brown mb-3">
                    {offering.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {offering.description}
                  </p>
                  <span className="text-caramel font-bold text-lg">
                    {offering.price}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
