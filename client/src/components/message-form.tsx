import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";


export default function MessageForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast({
                    title: "Message Sent!",
                    description: "Thank you for your message. We'll get back to you soon!",
                });
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast({
                    title: "Error",
                    description: "Failed to send message. Please try again later.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again later.",
                variant: "destructive",
            });
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
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
    )
}