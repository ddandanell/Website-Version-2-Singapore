import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Seo } from "@/components/seo";
import { motion } from "framer-motion";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Seo
        title="Private Chef Pricing Singapore | Cost Guide"
        description="Transparent pricing for private chef hire in Singapore. Hourly rates starting from SGD 70/hr plus ingredients."
      />
      <Navbar />

      <main className="pt-24">
        <section className="py-16 text-center container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary"
          >
            Transparent Pricing Structure
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            No hidden fees. We separate our service fee from the cost of ingredients so
            you have full control over your budget.
          </p>
        </section>

        <section className="py-8 container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Fees */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 shadow-sm flex flex-col"
            >
              <h2 className="text-3xl font-bold mb-2">Chef Service Fee</h2>
              <div className="text-4xl font-bold text-primary mb-6">
                <span className="text-lg text-muted-foreground font-normal">from</span> SGD 70
                <span className="text-lg text-muted-foreground font-normal"> / hour</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span><strong>Professional Execution:</strong> Includes prep, cooking, plating, and serving.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span><strong>Kitchen Cleanup:</strong> We leave your kitchen spotless.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span><strong>Minimum Engagement:</strong> Usually 3-4 hours per event.</span>
                </li>
              </ul>

              <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                <Info className="w-4 h-4 inline mr-2" />
                Rates may vary slightly based on the chef's experience level (Junior vs Executive Chef) and public holidays.
              </div>
            </motion.div>

            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 shadow-sm flex flex-col"
            >
              <h2 className="text-3xl font-bold mb-2">Ingredients Cost</h2>
              <div className="text-4xl font-bold text-primary mb-6">
                At Cost
                <span className="text-lg text-muted-foreground font-normal"> / receipt</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span><strong>Total Transparency:</strong> You pay exactly what the groceries cost.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span><strong>Premium Sourcing:</strong> Chefs shop at trusted suppliers (e.g., FairPrice Finest, specialty butchers).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-1" />
                  <span><strong>Budget Control:</strong> Tell us your per-head budget (e.g., SGD 50-100), and we design the menu to fit.</span>
                </li>
              </ul>

              <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                <Info className="w-4 h-4 inline mr-2" />
                Original receipts are provided digitally after the event for reimbursement.
              </div>
            </motion.div>
          </div>
        </section>

        {/* Example Calculation */}
        <section className="py-20 bg-primary/5 mt-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold mb-8 text-center">Example Cost Breakdown</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg mb-4 text-center">Dinner Party for 6 Guests</h4>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span>Chef Service (5 hours @ SGD 70)</span>
                  <span className="font-bold">SGD 350</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Ingredients (Premium Seafood Menu)</span>
                  <span className="font-bold">~SGD 300</span>
                </div>
                <div className="flex justify-between pt-2 text-primary font-bold text-lg">
                  <span>Total Estimated Cost</span>
                  <span>SGD 650</span>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  Approx. SGD 108 per person
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <Button size="lg" className="px-8">Get a Custom Quote</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
