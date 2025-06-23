import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Wrench, Rocket } from "lucide-react";

const storySteps = [
  {
    id: 1,
    title: "The Idea",
    description: "Born from the desire to make great coffee more accessible to busy professionals and event-goers.",
    icon: Lightbulb,
    bgColor: "bg-coffee-primary"
  },
  {
    id: 2,
    title: "The Build",
    description: "Months of planning and customizing our mobile cart to create the perfect mobile coffee experience.",
    icon: Wrench,
    bgColor: "bg-coffee-secondary"
  },
  {
    id: 3,
    title: "The Launch",
    description: "Since launching, we've become a beloved fixture at local events and office complexes throughout the city.",
    icon: Rocket,
    bgColor: "bg-coffee-dark"
  }
];

export default function About() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Owner Introduction */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-8">
              Meet Sarah, Your Coffee Cart Owner
            </h1>
            <div className="w-56 h-56 rounded-3xl mx-auto mb-8 gradient-primary shadow-modern-xl flex items-center justify-center">
              <div className="text-white text-7xl font-bold">S</div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-800 mb-6">My Coffee Journey</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Hi there! I'm Sarah, and coffee has been my passion for over 15 years. What started as a love for the perfect morning cup evolved into a dream of bringing exceptional coffee directly to people's everyday lives.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                After working as a barista in several renowned coffee shops across the city, I decided to take the leap and start Brew & Go. My mobile coffee cart allows me to connect with customers in a more personal way while serving the community I love.
              </p>
              
              <Card className="bg-coffee-light border-0 shadow-modern-lg">
                <CardContent className="p-8">
                  <h3 className="font-bold text-coffee-dark mb-4 text-xl">My Coffee Philosophy</h3>
                  <p className="text-neutral-700 italic text-lg leading-relaxed">
                    "Every cup should be an experience. From bean selection to that first sip, I believe in creating moments of joy through exceptional coffee."
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div className="w-full h-72 gradient-primary rounded-3xl shadow-modern-xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">☕</div>
                  <div className="text-lg font-medium">Coffee cart in action</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-coffee-primary text-white p-6 rounded-2xl text-center shadow-modern-lg">
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm opacity-90 font-medium">Years of Experience</div>
                </div>
                <div className="bg-coffee-secondary text-white p-6 rounded-2xl text-center shadow-modern-lg">
                  <div className="text-3xl font-bold mb-2">2,500+</div>
                  <div className="text-sm opacity-90 font-medium">Happy Customers</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Business Story */}
          <div className="bg-white rounded-3xl p-12 shadow-modern-lg">
            <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
              The Brew & Go Story
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {storySteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div key={step.id} className="text-center group">
                    <div className={`${step.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-modern-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white text-3xl" size={28} />
                    </div>
                    <h3 className="font-bold text-neutral-800 mb-4 text-xl">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{step.description}</p>
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
