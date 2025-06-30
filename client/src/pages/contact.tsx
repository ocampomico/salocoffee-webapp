import { useState } from "react";
import { Phone, Mail, Instagram, MapPin, Send, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <section id="contact" className="py-20 bg-neutral-50 warm-gradient">
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
              <Card className="warm-gradient border-0 shadow-modern-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-8">Contact Information</h2>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-coffee-secondary w-14 h-14 rounded-2xl flex items-center justify-center shadow-modern">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-neutral-800 text-lg">info@salosalocoffee.com</div>
                        <div className="text-neutral-600">Orders and inquiries</div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-coffee-dark w-14 h-14 rounded-2xl flex items-center justify-center shadow-modern">
                        <Instagram className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-neutral-800 text-lg">@salosalocoffee</div>
                        <div className="text-neutral-600">Follow for any updates</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form and Location */}
            <div className="space-y-8">
              {/* Quick Message Form */}
              <Card className="warm-gradient border-0 shadow-modern-lg">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
