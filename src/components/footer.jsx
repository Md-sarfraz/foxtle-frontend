import { Phone, Mail, MapPin, Clock } from "lucide-react";
import foxtleLogo from "../assets/images/foxtle-logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-orange-600 via-orange-700 to-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
          
          {/* Logo + About */}
          <div>
<div className="flex flex-col items-center mb-5 sm:items-start">
  <img
    src={foxtleLogo}
    alt="Foxtle Logo"
    className="h-10 w-10 object-contain"
  />
  <span className="text-white font-semibold text-sm mt-1">
    Foxtle
  </span>
</div>

            <p className="text-sm leading-relaxed text-gray-200">
              Foxtle is one such digital marketing company that can turn the 
              tables around for a business sinking down through various digital 
              marketing services.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacts</h3>
            <p className="text-sm mb-2">
              <strong>Address:</strong> 623/10, Aman Enclave, Begariya Road, Dubagga Bypass, Lucknow - 2234103
            </p>
            <p className="text-sm mb-2">
              <strong>Office Time:</strong> 9:00 am to 6:00 pm
            </p>
            <p className="text-sm mb-2">
              <strong>Email:</strong> contact@foxtle.com
            </p>
            <p className="text-sm">
              <strong>Phone:</strong> +91 79156 5757
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Digital Marketing</li>
              <li>Social Media Marketing</li>
              <li>Search Engine Optimization</li>
              <li>Lead Generation</li>
              <li>PPC Advertising</li>
              <li>Web Development</li>
              <li>Graphic Designing</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-orange-400">Home</a></li>
              <li><a href="#" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400">Portfolio</a></li>
              <li><a href="#" className="hover:text-orange-400">Blogs</a></li>
              <li><a href="#" className="hover:text-orange-400">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © 2024 Foxtle Digital Marketing Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
