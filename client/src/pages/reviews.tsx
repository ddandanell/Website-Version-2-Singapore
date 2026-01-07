import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Seo } from "@/components/seo";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews() {
    const reviews = [
        {
            name: "Sarah Lim",
            location: "River Valley",
            rating: 5,
            date: "December 2024",
            text: "We hired Chef Antonio for our Christmas Eve dinner. The Beef Wellington was absolute perfection. He was punctual, polite, and left the kitchen cleaner than he found it. Highly recommended!"
        },
        {
            name: "James Tan",
            location: "Sentosa Cove",
            rating: 5,
            date: "January 2025",
            text: "Excellent service. Organized a corporate lunch for my executive team. The responsiveness on WhatsApp was great, and the chef adapted well to last-minute dietary changes."
        },
        {
            name: "Emily Chen",
            location: "Bukit Timah",
            rating: 4,
            date: "November 2024",
            text: "Great experience overall. The food was 5-star quality. Deducted one star just because the initial booking confirmation took an hour, but otherwise flawless."
        },
        {
            name: "Michael Ross",
            location: "Orchard",
            rating: 5,
            date: "October 2024",
            text: "A truly fine dining experience at home. The Japanese fusion menu was creative and delicious. Will definitely book again for my wife's birthday."
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Seo
                title="Customer Reviews - Private Chef Singapore"
                description="Read reviews from satisfied clients in River Valley, Sentosa, and across Singapore. 5-star private cooking service."
            />
            <Navbar />

            <main className="pt-24">
                <section className="py-16 text-center container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">What People Say</h1>
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <div className="flex text-yellow-500">
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                            <Star className="w-6 h-6 fill-current" />
                        </div>
                        <span className="text-xl font-bold text-foreground">4.9/5 Average Rating</span>
                    </div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        We take pride in serving hundreds of happy families and businesses across Singapore.
                    </p>
                </section>

                <section className="py-12 container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-6">
                        {reviews.map((review, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card p-8 rounded-xl border border-border/50 shadow-sm"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg">{review.name}</h3>
                                        <p className="text-xs text-muted-foreground">{review.location} • {review.date}</p>
                                    </div>
                                    <div className="flex text-yellow-500">
                                        {[...Array(review.rating)].map((_, j) => (
                                            <Star key={j} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-muted-foreground italic">"{review.text}"</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-16 text-center bg-muted/20 mt-12">
                    <div className="container mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Trusted by Singapore's Best</h3>
                        <div className="flex justify-center gap-8 grayscale opacity-50">
                            {/* Visual placeholders for 'As seen in' logos or Trustpilot badge */}
                            <div className="font-bold text-xl">Trustpilot</div>
                            <div className="font-bold text-xl">Google Reviews</div>
                            <div className="font-bold text-xl">Facebook</div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
