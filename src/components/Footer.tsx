import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-foreground/95 text-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="Shat Al Arab Express Delivery Logo" 
                className="h-16 w-auto hover:scale-105 transition-transform duration-300 hand-drawn animate-gentle-bounce"
              />
            </div>
            <p className="text-sm opacity-80 mb-4">
              Your trusted delivery partner in the Middle East. Fast, reliable, and secure logistics solutions.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm opacity-90">
                      <li><Link to="/services" className="hover:opacity-70 transition-opacity">Our Services</Link></li>
                      <li><Link to="/track" className="hover:opacity-70 transition-opacity">Track Parcel</Link></li>
                      <li><Link to="/about" className="hover:opacity-70 transition-opacity">About Us</Link></li>
                      <li><Link to="/faq" className="hover:opacity-70 transition-opacity">FAQ</Link></li>
                      <li><Link to="/contact" className="hover:opacity-70 transition-opacity">Contact Us</Link></li>
                      <li><Link to="/careers" className="hover:opacity-70 transition-opacity">Careers</Link></li>
                    </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Same-Day Delivery</li>
              <li>International Shipping</li>
              <li>E-Commerce Fulfillment</li>
              <li>Corporate Logistics</li>
              <li>Cash on Delivery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a 
                  href="tel:+971555478989"
                  className="hover:text-primary transition-colors"
                >
                  +971555478989
                </a>
              </li>
              <li className="flex items-center gap-2">
                <a 
                  href="https://wa.me/971555478989" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@shatalarab.ae</span>
              </li>
            </ul>
            <p className="text-sm mt-4 font-semibold">24/7 Support Available</p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Shat Al Arab Express Delivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
