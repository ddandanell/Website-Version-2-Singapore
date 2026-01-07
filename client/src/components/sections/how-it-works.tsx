import { CONTENT } from "@/lib/constants";
import { MessageSquare, FileText, CheckSquare, Wallet, ChefHat } from "lucide-react";

export function HowItWorks() {
  const icons = [MessageSquare, FileText, CheckSquare, Wallet, ChefHat];

  return (
    <section id="how-it-works" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
            {CONTENT.howItWorks.title}
          </h2>
          <p className="text-muted-foreground">Seamless from booking to bon appétit.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {CONTENT.howItWorks.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-primary/10 flex items-center justify-center text-primary mb-6 shadow-sm group-hover:border-primary group-hover:shadow-md transition-all">
                  <Icon className="w-8 h-8" />
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-primary/10 -z-10" />
                )}
                <div className="absolute top-0 right-0 md:left-10 md:top-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-sm md:text-base font-medium text-gray-800 leading-snug">
                  {step}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
