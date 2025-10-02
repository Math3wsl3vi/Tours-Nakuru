import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nakuru Tours</h3>
            <p className="text-gray-300 mb-4">
              Your premier tourism agency for exploring the beauty of Nakuru and
              {"Kenya's"} magnificent landscapes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-300 hover:text-green-400 transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-300 hover:text-green-400 transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-green-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-green-400" />
                <span className="text-gray-300">
                  123 Kenyatta Avenue, Nakuru, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-green-400" />
                <a href="tel:+254700000000" className="text-gray-300 hover:text-green-400">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-green-400" />
                <a href="mailto:info@nakurutours.com" className="text-gray-300 hover:text-green-400">
                  info@nakurutours.com
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Your email address" className="px-4 py-2 rounded-md focus:outline-none text-gray-800" />
              <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Nakuru Tours. All rights reserved.
          </p>
          <div className="mt-2 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-green-400 mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-green-400">
              Terms of Service
            </Link>
          </div>
          <p className="mt-6 text-lg font-semibold text-green-400">
            Book Your Nakuru Adventure Today – {"Let's"} Explore Together!
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;