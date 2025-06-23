import { useState } from "react";
import { Phone, Mail, Instagram, MapPin, Send, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const weeklySchedule = [
  {
    day: "Wednesday",
    location: "Tech Park Plaza",
    hours: "10:00 AM - 2:00 PM"
  },
  {
    day: "Thursday",
    location: "University Campus",
    hours: "8:00 AM - 12:00 PM"
  },
  {
    day: "Friday",
    location: "Farmer's Market",
    hours: "7:00 AM - 1:00 PM"
  }
];

const businessHours = [
  { days: "Monday - Friday", hours: "7:00 AM - 3:00 PM" },
  { days: "Saturday", hours: "8:00 AM - 2:00 PM" },
  { days: "Sunday", hours: "9:00 AM - 1:00 PM" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend service
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGetDirections = () => {
    // In a real implementation, this would open Google Maps with the current location
    window.open("https://maps.google.com/?q=Downtown+Plaza+123+Main+Street", "_blank");
  };

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">Get In Touch</h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Ready for your next great cup? Here's how to find us and get in contact.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-modern-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-8">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-coffee-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-modern">
                        <Phone className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-neutral-800 text-lg">(555) 123-BREW</div>
                        <div className="text-neutral-600">Call or text for our location</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-coffee-secondary w-14 h-14 rounded-2xl flex items-center justify-center shadow-modern">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-neutral-800 text-lg">hello@brewandgo.com</div>
                        <div className="text-neutral-600">Orders and inquiries</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-coffee-dark w-14 h-14 rounded-2xl flex items-center justify-center shadow-modern">
                        <Instagram className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-neutral-800 text-lg">@brewandgo_coffee</div>
                        <div className="text-neutral-600">Follow for daily locations</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Business Hours */}
              <Card className="bg-white border-0 shadow-modern-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-6">Operating Hours</h2>
                  <div className="space-y-4">
                    {businessHours.map((schedule) => (
                      <div key={schedule.days} className="flex justify-between items-center py-2">
                        <span className="text-neutral-600 font-medium">{schedule.days}</span>
                        <span className="font-bold text-neutral-800">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form and Location */}
            <div className="space-y-8">
              {/* Quick Message Form */}
              <Card className="bg-white border-0 shadow-modern-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold text-neutral-700 mb-2 block">
                          Your Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="h-12 rounded-xl border-neutral-200 focus:border-coffee-primary"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold text-neutral-700 mb-2 block">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 rounded-xl border-neutral-200 focus:border-coffee-primary"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-sm font-semibold text-neutral-700 mb-2 block">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="h-32 resize-none rounded-xl border-neutral-200 focus:border-coffee-primary"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full h-12 bg-coffee-primary hover:bg-coffee-primary/90 rounded-xl font-semibold text-lg shadow-modern-lg hover:shadow-modern-xl transition-all">
                        <Send className="mr-3 h-5 w-5" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              {/* Current Location */}
              <Card className="bg-white border-0 shadow-modern-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="gradient-primary text-white p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <MapPin className="text-2xl" />
                      <span className="font-bold text-xl">Current Location</span>
                    </div>
                    <div className="text-lg mb-2">Downtown Plaza<br />123 Main Street</div>
                    <div className="text-sm opacity-90">Today: 7:00 AM - 3:00 PM</div>
                  </div>
                  
                  <div className="p-8">
                    <Button
                      onClick={handleGetDirections}
                      className="w-full h-12 bg-coffee-dark hover:bg-coffee-dark/90 text-white rounded-xl font-semibold text-lg shadow-modern-lg"
                    >
                      <Navigation className="mr-3 h-5 w-5" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Upcoming Locations */}
          <div className="mt-16">
            <Card className="bg-white border-0 shadow-modern-lg">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-gradient mb-12 text-center">
                  This Week's Schedule
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {weeklySchedule.map((schedule) => (
                    <div key={schedule.day} className="text-center p-6 bg-coffee-light rounded-2xl shadow-modern hover:shadow-modern-lg transition-shadow">
                      <div className="font-bold text-coffee-dark text-xl mb-2">{schedule.day}</div>
                      <div className="text-neutral-600 font-medium mb-1">{schedule.location}</div>
                      <div className="text-sm text-neutral-500">{schedule.hours}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
