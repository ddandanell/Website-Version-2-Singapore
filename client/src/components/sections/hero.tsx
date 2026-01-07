import { CONTENT } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/professional_chef_plating_a_gourmet_dish_in_a_modern_kitchen..png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 sm:w-2/3" />
        <img 
          src={heroImage} 
          alt="Professional Chef Plating" 
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-xl space-y-8 animate-in slide-in-from-left-10 duration-700 fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
            {CONTENT.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            {CONTENT.hero.subtitle}
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-none px-8 h-14 text-lg font-semibold shadow-lg shadow-primary/20"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {CONTENT.hero.cta}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-none px-8 h-14 text-lg font-semibold bg-white/50 backdrop-blur border-primary/20 hover:bg-white text-primary"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              How It Works <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
