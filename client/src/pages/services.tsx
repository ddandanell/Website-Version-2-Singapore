import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Seo } from "@/components/seo";
import { motion } from "framer-motion";
import { ChefHat, Users, GraduationCap, ArrowRight, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Seo
                title="Private Chef Services Singapore"
                description="Premium private chef services including private dining, corporate catering, and cooking classes in Singapore."
            />
            <Navbar />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
                                Exquisite Culinary Experiences
                            </h1>
                            <p className="text-lg text-muted-foreground mb-8">
                                From intimate dinners in Marina Bay to large corporate events in the CBD,
                                our private chefs bring the finest dining experiences directly to your location.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {/* Service 1 */}
                            <motion.div variants={item} className="bg-card p-8 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                    <UtensilsCrossed className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Private Dining</h3>
                                <p className="text-muted-foreground mb-6">
                                    Experience restaurant-quality fine dining in the comfort of your home.
                                    Whether it's a romantic dinner for two or a family gathering, our chefs verify every dietary requirement.
                                </p>
                                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                                    <li>• Custom Menu Design</li>
                                    <li>• Table Service & Cleanup</li>
                                    <li>• Wine Pairing Options</li>
                                </ul>
                            </motion.div>

                            {/* Service 2 */}
                            <motion.div variants={item} className="bg-card p-8 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                    <Users className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Corporate Events</h3>
                                <p className="text-muted-foreground mb-6">
                                    Impress clients or reward your team with exceptional catering.
                                    We serve Singapore's top business districts with professional, discreet, and high-quality service.
                                </p>
                                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                                    <li>• Office Luncheons</li>
                                    <li>• Networking Events</li>
                                    <li>• Boardroom Dining</li>
                                </ul>
                            </motion.div>

                            {/* Service 3 */}
                            <motion.div variants={item} className="bg-card p-8 rounded-lg shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                    <GraduationCap className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Cooking Classes</h3>
                                <p className="text-muted-foreground mb-6">
                                    Learn from the masters in your own kitchen. Our chefs conduct interactive classes perfect for
                                    team building or personal upskilling.
                                </p>
                                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                                    <li>• Hands-on Instruction</li>
                                    <li>• Recipe Cards Included</li>
                                    <li>• Ingredient Sourcing</li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Cuisines Section */}
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl font-bold mb-6">Global Cuisines, Local Ingredients</h2>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        Our database of chefs covers a vast array of cuisines to suit Singapore's diverse palate.
                                        From authentic Peranakan and local Heritage dishes to modern European, Japanese Omakase,
                                        and French Haute Cuisine.
                                    </p>
                                    <p className="text-muted-foreground mb-8">
                                        We prioritize fresh, locally licensed suppliers and high-quality imports to ensure
                                        every dish meets the highest standards of safety and taste.
                                    </p>
                                    <Link href="/contact">
                                        <Button size="lg" className="gap-2">
                                            Start Your Selection <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                                {/* Placeholder for cuisine images - using colored blocks for now or generate later */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-orange-100 h-48 rounded-2xl flex items-center justify-center"
                                >
                                    <span className="text-orange-800 font-bold">Asian Fusion</span>
                                </motion.div>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-blue-100 h-48 rounded-2xl flex items-center justify-center mt-8"
                                >
                                    <span className="text-blue-800 font-bold">Mediterranean</span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Fine Dining?</h2>
                        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
                            Tell us your requirements, and our AI-powered system will match you with the perfect chef
                            for your occasion in Singapore.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact">
                                <Button variant="secondary" size="lg" className="w-full sm:w-auto font-semibold">
                                    Book a Chef Now
                                </Button>
                            </Link>
                            <Link href="/how-it-works">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10">
                                    How it Works
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
