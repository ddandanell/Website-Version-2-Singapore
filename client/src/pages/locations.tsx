import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Seo } from "@/components/seo";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Locations() {
    const districts = [
        { name: "Marina Bay & CBD", desc: "Serving luxury condos and corporate offices in the heart of the city." },
        { name: "Sentosa Cove", desc: "Exclusive private dining for specialized events and yacht parties." },
        { name: "Orchard & Tanglin", desc: "Premium chef services for the prestigious Orchard Road belt." },
        { name: "Bukit Timah", desc: "Family-style dinners and garden parties for landed properties." },
        { name: "East Coast & Katong", desc: "Heritage-inspired menus for the vibrant East." },
        { name: "Holland Village", desc: "Modern European and fusion cuisine for this trendy enclave." },
        { name: "River Valley", desc: "Intimate dining experiences for high-rise living." },
        { name: "Novena & Newton", desc: "Convenient catering for medical professionals and families." }
    ];

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Seo
                title="Service Areas - Private Chef Locations Singapore"
                description="We serve all major districts in Singapore including Marina Bay, Sentosa, Orchard, and East Coast."
            />
            <Navbar />

            <main className="pt-24">
                <section className="py-16 text-center container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary"
                    >
                        Serving All of Singapore
                    </motion.h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                        Wherever you are on the island, our network of chefs is ready to bring the restaurant experience to your doorstep.
                    </p>
                </section>

                <section className="py-8 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {districts.map((district, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-card p-6 rounded-lg border border-border/50 hover:shadow-md transition-all group"
                            >
                                <div className="bg-primary/5 w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{district.name}</h3>
                                <p className="text-sm text-muted-foreground">{district.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-3xl font-bold mb-4">Don't sure if we cover your area?</h2>
                        <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                            We likely do! Our chefs travel island-wide. Drop us a message to confirm availability for your specific date and location.
                        </p>
                        <Link href="/contact">
                            <Button variant="secondary" size="lg" className="font-semibold">Check Availability</Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
