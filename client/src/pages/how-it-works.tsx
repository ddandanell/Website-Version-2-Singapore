import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Seo } from "@/components/seo";
import { motion } from "framer-motion";
import { MessageSquare, UserCheck, CalendarDays, Wallet, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowItWorks() {
    const steps = [
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "1. Connect on WhatsApp",
            desc: "Start by messaging us. Our AI Agent will guide you through a quick questionnaire to understand your needs—date, location (e.g., Sentosa, Orchard), cuisine preference, and budget."
        },
        {
            icon: <UserCheck className="w-8 h-8" />,
            title: "2. Get Matched",
            desc: "Based on your inputs, we instantly filter our roster of reviewed chefs to find the perfect match for your specific requirements."
        },
        {
            icon: <CalendarDays className="w-8 h-8" />,
            title: "3. Receive Proposals",
            desc: "You'll receive detailed menu proposals and profiles of available chefs. You can review their signature dishes and experience directly."
        },
        {
            icon: <Wallet className="w-8 h-8" />,
            title: "4. Secure Booking",
            desc: "Once you're happy with the menu, confirm your booking with a 50% deposit. The remaining balance is due after the service."
        },
        {
            icon: <ChefHat className="w-8 h-8" />,
            title: "5. Enjoy the Experience",
            desc: "Your chef arrives with all ingredients, cooks, serves, and—best of all—cleans up the kitchen afterwards. You just relax and enjoy."
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Seo
                title="How It Works - Hire Private Chef Singapore"
                description="Simple 5-step process to hire a private chef in Singapore. From WhatsApp inquiry to fine dining at home."
            />
            <Navbar />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="py-16 text-center container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary"
                    >
                        Seamless Booking Process
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        We've simplified the traditional chef hiring process.
                        No lengthy emails—just quick, efficient coordination powered by smart technology.
                    </motion.p>
                </section>

                {/* Vertical Stepper */}
                <section className="py-12 bg-white container mx-auto px-4 max-w-4xl">
                    <div className="relative border-l-2 border-primary/20 ml-6 md:ml-12 space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-12 md:pl-16"
                            >
                                {/* Icon Bubble */}
                                <div className="absolute -left-[21px] md:-left-[25px] top-0 bg-background border-4 border-primary/10 rounded-full p-2 text-primary">
                                    <div className="bg-primary/10 p-2 rounded-full">
                                        {step.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* FAQ Teaser */}
                <section className="py-20 bg-muted/30 mt-12">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                        <p className="text-muted-foreground mb-8">
                            Wondering about grocery costs or cancellation policies?
                            Check out our comprehensive FAQ.
                        </p>
                        <Link href="/faq">
                            <Button variant="outline" size="lg">Read FAQ</Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
