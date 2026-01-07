import { CONTENT } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import foodImage from "@assets/generated_images/gourmet_asian_fusion_dish_presentation..png";

export function FAQ() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {CONTENT.faq.title}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {CONTENT.faq.items.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-gray-200">
                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -inset-4 border-2 border-primary/10 -z-10 translate-x-4 translate-y-4" />
            <img 
              src={foodImage} 
              alt="Gourmet dish" 
              className="w-full h-auto object-cover shadow-lg aspect-square" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
