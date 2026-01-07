import { CONTENT } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is required"),
  date: z.string().min(1, "Date is required"),
  guests: z.string().min(1, "Number of guests is required"),
  message: z.string().optional(),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Booking Request Sent",
      description: "We'll be in touch with a proposal shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              {CONTENT.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to elevate your dining experience? Fill out the form, and we'll match you with the perfect chef.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="p-6 bg-secondary rounded-lg border border-primary/5">
                <h4 className="font-bold text-primary mb-4">Contact Details</h4>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-center gap-3">
                    <span className="font-semibold w-16">Phone:</span>
                    <a href={`tel:${CONTENT.contact.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{CONTENT.contact.phone}</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold w-16">Email:</span>
                    <a href={`mailto:${CONTENT.contact.email}`} className="hover:text-primary transition-colors">{CONTENT.contact.email}</a>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="font-semibold w-16 shrink-0">Address:</span>
                    <span>{CONTENT.contact.address}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 shadow-xl border border-gray-100 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="rounded-none bg-gray-50 border-gray-200 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp / Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="+65 9123 4567" {...field} className="rounded-none bg-gray-50 border-gray-200 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" {...field} className="rounded-none bg-gray-50 border-gray-200 focus-visible:ring-primary" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} className="rounded-none bg-gray-50 border-gray-200 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>No. of Guests</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" {...field} className="rounded-none bg-gray-50 border-gray-200 focus-visible:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dietary Requirements / Preferences</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="E.g. No seafood, Asian Fusion preferred, Corporate Luncheon..." 
                          className="min-h-[120px] rounded-none bg-gray-50 border-gray-200 focus-visible:ring-primary"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-none font-semibold text-lg py-6">
                  Request Booking
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
