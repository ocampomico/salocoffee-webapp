import { Mail, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MessageForm from "@/components/message-form";

export default function Contact() {
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
            <MessageForm />
          </div>
        </div>
      </div>
    </section>
  );
}
