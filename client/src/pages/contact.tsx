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
    <section className="py-16 bg-gradient-to-br from-cream to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4">Get In Touch</h1>
            <p className="text-lg text-gray-600">
              Ready for your next great cup? Here's how to find us and get in contact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-coffee-brown mb-6">Contact Information</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-coffee-brown w-10 h-10 rounded-full flex items-center justify-center">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-espresso">(555) 123-BREW</div>
                        <div className="text-sm text-gray-600">Call or text for our location</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="bg-caramel w-10 h-10 rounded-full flex items-center justify-center">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-espresso">hello@brewandgo.com</div>
                        <div className="text-sm text-gray-600">Orders and inquiries</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="bg-sandy-brown w-10 h-10 rounded-full flex items-center justify-center">
                        <Instagram className="text-white" size={20} />
                      </div>
                      <div>
                        <div className="font-medium text-espresso">@brewandgo_coffee</div>
                        <div className="text-sm text-gray-600">Follow for daily locations</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Business Hours */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-coffee-brown mb-4">Operating Hours</h2>
                  <div className="space-y-2">
                    {businessHours.map((schedule) => (
                      <div key={schedule.days} className="flex justify-between">
                        <span className="text-gray-600">{schedule.days}</span>
                        <span className="font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Form and Location */}
            <div className="space-y-8">
              {/* Quick Message Form */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-coffee-brown mb-4">Send Us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
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
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
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
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="mt-1 h-24 resize-none"
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-coffee-brown hover:bg-coffee-brown/90">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              {/* Current Location */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-coffee-brown mb-4">Find Us Today</h2>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-coffee-brown to-caramel text-white p-4 rounded-lg">
                      <div className="flex items-center space-x-3 mb-2">
                        <MapPin className="text-xl" />
                        <span className="font-semibold">Current Location</span>
                      </div>
                      <div>Downtown Plaza<br />123 Main Street</div>
                      <div className="text-sm opacity-90 mt-2">Today: 7:00 AM - 3:00 PM</div>
                    </div>
                    
                    <div className="text-center">
                      <Button
                        onClick={handleGetDirections}
                        className="bg-sandy-brown hover:bg-sandy-brown/90 text-white px-6 py-2 rounded-full font-medium"
                      >
                        <Navigation className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Upcoming Locations */}
          <div className="mt-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-coffee-brown mb-6 text-center">
                  This Week's Schedule
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {weeklySchedule.map((schedule) => (
                    <div key={schedule.day} className="text-center p-4 bg-cream rounded-lg">
                      <div className="font-semibold text-coffee-brown">{schedule.day}</div>
                      <div className="text-sm text-gray-600 mt-1">{schedule.location}</div>
                      <div className="text-xs text-gray-500">{schedule.hours}</div>
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
