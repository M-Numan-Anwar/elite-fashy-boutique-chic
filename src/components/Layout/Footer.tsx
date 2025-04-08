import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-elite-DEFAULT text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and About */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/5d870798-b67c-4094-a05b-d910d9e425a8.png" 
              alt="Elite Fashy Logo" 
              className="h-20 w-auto object-contain mb-4 hover:scale-105 transition-transform"
            />
            <p className="text-gray-300 text-sm">
              Luxury handbags and accessories for the modern woman. Elevate your style with our curated collection.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" className="hover:text-elite-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-elite-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-elite-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-elite-gold mb-4 font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-elite-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-elite-gold transition-colors">Shop</Link>
              </li>
              <li>
                <Link to="/collections" className="text-gray-300 hover:text-elite-gold transition-colors">Collections</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-elite-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-elite-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-elite-gold mb-4 font-medium">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-elite-gold transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-elite-gold transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-elite-gold transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-elite-gold transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-elite-gold mb-4 font-medium">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 focus:border-elite-gold" 
              />
              <Button className="bg-elite-gold hover:bg-elite-gold/80 text-elite-DEFAULT">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Elite Fashy. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <img 
                src="https://cdn.pixabay.com/photo/2021/12/06/13/48/visa-6850402_1280.png" 
                alt="Visa" 
                className="h-6 opacity-60" 
              />
              <img 
                src="https://cdn.pixabay.com/photo/2021/12/06/13/45/mastercard-6850401_1280.png" 
                alt="Mastercard" 
                className="h-6 opacity-60" 
              />
              <img 
                src="https://cdn.pixabay.com/photo/2022/03/28/03/37/paypal-7096590_1280.png" 
                alt="PayPal" 
                className="h-6 opacity-60" 
              />
              <img 
                src="https://cdn.pixabay.com/photo/2021/12/06/13/51/american-express-6850405_1280.png" 
                alt="American Express" 
                className="h-6 opacity-60" 
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
