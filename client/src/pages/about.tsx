import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Seo } from "@/components/seo";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Heart } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Seo
                title="About Us - HireLocalChef Singapore"
                description="Our mission is to make fine dining accessible at home. Learn about our standards, chef vetting process, and story."
            />
            <Navbar />

            <main className="pt-24">
                <section className="py-20 text-center container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">
                            Our Story
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Founded with a simple mission: to liberate chefs from the kitchen backroom and bring them
                            front and center at your dining table. We believe that great food is best enjoyed when you
                            know the story behind it.
                        </p>
                    </motion.div>
                </section>

                <section className="py-12 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-background p-8 rounded-xl shadow-sm"
                            >
                                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Vetted & Insured</h3>
                                <p className="text-muted-foreground">
                                    Every chef on our platform undergoes a rigorous background check and practical cooking test.
                                    We are fully insured for your peace of mind.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-background p-8 rounded-xl shadow-sm"
                            >
                                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <Award className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">5+ Years Experience</h3>
                                <p className="text-muted-foreground">
                                    We only work with chefs who have significant professional experience in top rated
                                    restaurants or hotels. No amateurs.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-background p-8 rounded-xl shadow-sm"
                            >
                                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    <Heart className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">Passion for Hospitality</h3>
                                <p className="text-muted-foreground">
                                    Food is just half the equation. Our chefs are chosen for their personality and
                                    ability to create a warm, inviting atmosphere in your home.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-20 container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="bg-gray-200 aspect-video rounded-xl flex items-center justify-center text-muted-foreground">
                                {/* Placeholder for About Us Image */}
                                <span className="font-semibold">Team Photo / Kitchen Action Shot</span>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">Singapore's Premier Private Chef Platform</h2>
                            <p className="text-lg text-muted-foreground mb-4">
                                Since 2022, we have served over 1,000 households across the island.
                                From intimate proposals at East Coast Park to massive corporate galas in Marina Bay Sands,
                                we have the logistical expertise to handle it all.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                We are proudly Singaporean-owned and operated, understanding the unique nuances of
                                local culture, dietary preferences, and the high standards our clients expect.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
