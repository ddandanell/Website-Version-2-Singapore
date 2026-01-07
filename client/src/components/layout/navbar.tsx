import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "How it Works", href: "/how-it-works" },
    { label: "Locations", href: "/locations" },
    { label: "Pricing", href: "/pricing" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-heading font-bold text-primary tracking-tight z-50">
            HireLocalChef<span className="text-muted-foreground text-lg font-normal">.com</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className={`transition-colors hover:text-primary ${location === item.href ? "text-primary font-bold" : ""}`}>
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+6512345678" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" />
            +65 1234 5678
          </a>
          <Link href="/contact">
            <Button
              className="bg-primary hover:bg-primary/90 text-white rounded-none px-6 font-semibold"
            >
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a
                      onClick={handleLinkClick}
                      className={`text-lg font-medium transition-colors hover:text-primary ${location === item.href ? "text-primary font-bold" : "text-muted-foreground"}`}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
                <div className="h-px bg-border my-2" />
                <a href="tel:+6512345678" className="flex items-center gap-2 text-lg font-semibold text-primary">
                  <Phone className="w-4 h-4" />
                  +65 1234 5678
                </a>
                <Link href="/contact">
                  <Button className="w-full mt-2" onClick={handleLinkClick}>
                    Book Now
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
