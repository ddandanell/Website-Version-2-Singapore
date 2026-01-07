import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Seo } from "@/components/seo";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function FAQ() {
    const faqs = [
        {
            question: "How much does a private chef cost in Singapore?",
            answer: "Our rates start at SGD 70 per hour for the chef's time. The cost of ingredients is charged separately at cost price (we provide receipts). For a typical dinner party of 6, you might expect to pay around SGD 100-150 per person inclusive of premium ingredients, which is often comparable to or less than dining at a high-end restaurant."
        },
        {
            question: "Do you cater to dietary restrictions?",
            answer: "Absolutely. When you book, we ask for all dietary requirements (Halal, Gluten-Free, Vegan, allergies, etc.). Our chefs are trained to handle cross-contamination and will design a menu that is safe and delicious for everyone at the table."
        },
        {
            question: "What areas do you serve?",
            answer: "We cover the entire island of Singapore, including Sentosa Cove. Whether you live in a condo in Orchard, a landed property in Bukit Timah, or a flat in Tiona Bahru, our chefs come to you."
        },
        {
            question: "Do I need to provide plates and cutlery?",
            answer: "For most private dining bookings, chefs use the host's kitchen equipment and tableware to keep costs low. However, if you require rental of premium tableware, glassware, or tables, we can arrange this for an additional fee."
        },
        {
            question: "What happens if I need to cancel?",
            answer: "We understand plans change. Cancellations made more than 7 days in advance are fully refundable. Cancellations within 7 days may forfeit the 50% deposit to compensate the chef for the reserved time."
        },
        {
            question: "How does the 'Ingredients at Cost' work?",
            answer: "The chef estimates the grocery budget during the proposal stage. On the day of the event, they shop for fresh ingredients. You will reimburse the chef directly via PayNow or cash based on the actual receipts presented."
        },
        {
            question: "Can I choose the menu?",
            answer: "Yes! Our chefs provide initial menu proposals based on your preferences. You can then request as many changes as you like until the menu is perfect for your occasion."
        }
    ];

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Seo
                title="FAQ - Private Chef Singapore Queries"
                description="Answers to common questions about private chef hire in Singapore. Costs, dietary info, and cancellation policies."
            />
            <Navbar />

            <main className="pt-24">
                <section className="py-16 text-center container mx-auto px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary"
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Everything you need to know before booking your private culinary experience.
                    </p>
                </section>

                <section className="py-8 container mx-auto px-4 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`}>
                                    <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </section>

                <section className="py-20 text-center container mx-auto px-4">
                    <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                    <p className="text-muted-foreground mb-8">Our team is available on WhatsApp to help.</p>
                    <Link href="/contact">
                        <Button size="lg">Contact Us</Button>
                    </Link>
                </section>
            </main>
            <Footer />
        </div>
    );
}
