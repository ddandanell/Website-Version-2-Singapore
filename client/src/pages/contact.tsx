import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Seo } from "@/components/seo";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Seo
                title="Contact Us - Book Your Chef"
                description="Get in touch via WhatsApp, Email or Phone. Ready to plan your perfect menu."
            />
            <Navbar />

            <main className="pt-24">
                <section className="py-16 text-center container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary"
                    >
                        Get In Touch
                    </motion.h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        Ready to book? Have a question about a menu? We'd love to hear from you.
                    </p>
                </section>

                <section className="py-8 container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">WhatsApp / Mobile</h3>
                                    <a href="tel:+6512345678" className="text-muted-foreground hover:text-primary transition-colors">+65 1234 5678</a>
                                    <p className="text-sm text-muted-foreground mt-1">Available 9am - 9pm daily</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email</h3>
                                    <a href="mailto:info@hirelocalchef.sg" className="text-muted-foreground hover:text-primary transition-colors">info@hirelocalchef.sg</a>
                                    <p className="text-sm text-muted-foreground mt-1">We reply within 2 hours</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Office Address</h3>
                                    <p className="text-muted-foreground">
                                        Block 123, Marina Boulevard #05-67<br />
                                        Singapore 018982
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <Input id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium">WhatsApp Number</label>
                                        <Input id="phone" placeholder="+65" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="you@example.com" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Event Details</label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us about your event (Date, Location, Guests, Cuisine Preference)"
                                        className="min-h-[120px]"
                                        required
                                    />
                                </div>
                                <Button type="button" className="w-full text-lg py-6 font-bold" onClick={() => window.open('https://wa.me/6512345678', '_blank')}>
                                    <Send className="w-5 h-5 mr-2" /> Start Chat on WhatsApp
                                </Button>
                                <p className="text-xs text-center text-muted-foreground">
                                    By clicking above, you'll be redirected to WhatsApp for faster service.
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
