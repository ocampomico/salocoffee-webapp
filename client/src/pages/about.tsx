import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Wrench, Rocket } from "lucide-react";

const storySteps = [
  {
    id: 1,
    title: "The Idea",
    description: "Born from the desire to make great coffee more accessible to busy professionals and event-goers.",
    icon: Lightbulb,
    bgColor: "bg-coffee-brown"
  },
  {
    id: 2,
    title: "The Build",
    description: "Months of planning and customizing our mobile cart to create the perfect mobile coffee experience.",
    icon: Wrench,
    bgColor: "bg-caramel"
  },
  {
    id: 3,
    title: "The Launch",
    description: "Since launching, we've become a beloved fixture at local events and office complexes throughout the city.",
    icon: Rocket,
    bgColor: "bg-sandy-brown"
  }
];

export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Owner Introduction */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-6">
              Meet Sarah, Your Coffee Cart Owner
            </h1>
            <div className="w-48 h-48 rounded-full mx-auto mb-6 bg-gradient-to-br from-coffee-brown to-caramel flex items-center justify-center">
              <div className="text-white text-6xl font-bold">S</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">My Coffee Journey</h2>
              <p className="text-gray-600 mb-4">
                Hi there! I'm Sarah, and coffee has been my passion for over 15 years. What started as a love for the perfect morning cup evolved into a dream of bringing exceptional coffee directly to people's everyday lives.
              </p>
              <p className="text-gray-600 mb-6">
                After working as a barista in several renowned coffee shops across the city, I decided to take the leap and start Brew & Go. My mobile coffee cart allows me to connect with customers in a more personal way while serving the community I love.
              </p>
              
              <Card className="bg-cream">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-coffee-brown mb-3">My Coffee Philosophy</h3>
                  <p className="text-gray-600 italic">
                    "Every cup should be an experience. From bean selection to that first sip, I believe in creating moments of joy through exceptional coffee."
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div className="w-full h-64 bg-gradient-to-br from-cream to-sandy-brown rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-coffee-brown text-center">
                  <div className="text-4xl mb-2">☕</div>
                  <div className="text-sm">Coffee cart in action</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-coffee-brown to-caramel text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years of Experience</div>
                </div>
                <div className="bg-gradient-to-br from-caramel to-sandy-brown text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">2,500+</div>
                  <div className="text-sm opacity-90">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Business Story */}
          <div>
            <h2 className="text-2xl font-semibold text-coffee-brown mb-6 text-center">
              The Brew & Go Story
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {storySteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.id} className="text-center">
                    <div className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="text-white text-2xl" size={24} />
                    </div>
                    <h3 className="font-semibold text-coffee-brown mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
