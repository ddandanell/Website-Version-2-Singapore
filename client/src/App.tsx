import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import HowItWorks from "@/pages/how-it-works";
import Pricing from "@/pages/pricing";
import Reviews from "@/pages/reviews";
import FAQ from "@/pages/faq";
import Locations from "@/pages/locations";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import { ScrollToTop } from "@/components/layout/scroll-to-top";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/faq" component={FAQ} />
      <Route path="/locations" component={Locations} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
