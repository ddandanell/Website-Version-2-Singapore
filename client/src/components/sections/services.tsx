import { CONTENT } from "@/lib/constants";
import { CheckCircle2, MapPin, ShieldCheck, Clock } from "lucide-react";
import chefTableImage from "@assets/generated_images/chef_cooking_for_a_family_at_a_dining_table..png";

export function Services() {
  const features = [
    { icon: MapPin, text: "Serving Marina Bay, Sentosa, Orchard Road & Bukit Timah" },
    { icon: ShieldCheck, text: "HACCP-Certified & Fully Insured Chefs" },
    { icon: Clock, text: "Minimum 5 Years Professional Experience" },
    { icon: CheckCircle2, text: "Satisfaction Guaranteed" },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -inset-4 bg-muted/30 -z-10 translate-x-4 translate-y-4" />
             <img 
               src={chefTableImage} 
               alt="Chef serving family" 
               className="w-full h-auto object-cover shadow-xl aspect-[4/3]"
             />
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {CONTENT.services.title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {CONTENT.services.description}
            </p>
            
            <div className="grid gap-6">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/5 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-base font-medium text-gray-700 pt-2">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
