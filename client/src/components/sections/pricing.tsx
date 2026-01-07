import { CONTENT } from "@/lib/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {CONTENT.pricing.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {CONTENT.pricing.description}
            </p>
            
            <div className="bg-primary/5 border border-primary/10 p-6 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Pricing Example</h4>
              <p className="text-gray-700 italic">{CONTENT.pricing.example}</p>
            </div>
          </div>

          <div className="grid gap-6">
             <Card className="border-0 shadow-lg bg-white relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
               <CardHeader>
                 <CardTitle className="text-2xl font-bold text-primary">Standard Service</CardTitle>
                 <div className="text-4xl font-bold text-gray-900 mt-2">
                   SGD 70<span className="text-lg font-normal text-muted-foreground">/hour</span>
                 </div>
               </CardHeader>
               <CardContent>
                 <ul className="space-y-4">
                   {["Professional Private Chef", "Meal Planning & Procurement", "Cooking & Plating Service", "Kitchen Clean-up"].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-gray-700">
                       <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                       {item}
                     </li>
                   ))}
                 </ul>
                 <p className="text-xs text-muted-foreground mt-6 text-center">
                   *Ingredients billed separately at cost + receipt
                 </p>
               </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
