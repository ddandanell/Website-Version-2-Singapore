import { Link } from "wouter";
import { CONTENT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
        <div className="md:col-span-1">
          <h3 className="text-2xl font-heading font-bold mb-4">myCHEF.sg</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Professional private chef services in Singapore. Bringing the fine dining experience to your home.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Discover</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/services"><a className="hover:text-white transition-colors">Services</a></Link></li>
            <li><Link href="/how-it-works"><a className="hover:text-white transition-colors">How it Works</a></Link></li>
            <li><Link href="/pricing"><a className="hover:text-white transition-colors">Pricing</a></Link></li>
            <li><Link href="/reviews"><a className="hover:text-white transition-colors">Reviews</a></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/about"><a className="hover:text-white transition-colors">About Us</a></Link></li>
            <li><Link href="/locations"><a className="hover:text-white transition-colors">Locations</a></Link></li>
            <li><Link href="/faq"><a className="hover:text-white transition-colors">FAQ</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact Us</a></Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>{CONTENT.contact.phone}</li>
            <li>{CONTENT.contact.email}</li>
            <li>{CONTENT.contact.address}</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-white/10 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} myCHEF.sg. All rights reserved.</p>
      </div>
    </footer>
  );
}
