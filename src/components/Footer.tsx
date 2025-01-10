import React from 'react';
import { Mail, Phone, MapPin, Facebook, Youtube, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">YADO</h3>
            <p className="text-gray-400">Empowering youth through education, mentorship, and community development.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>contact@yado.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>123 Community St, City, State</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/programs" className="hover:text-indigo-400">Programs</a></li>
              <li><a href="/mentorship" className="hover:text-indigo-400">Mentorship</a></li>
              <li><a href="/events" className="hover:text-indigo-400">Events</a></li>
              <li><a href="/about" className="hover:text-indigo-400">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400" aria-label="Facebook"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-indigo-400" aria-label="YouTube"><Youtube className="h-6 w-6" /></a>
              <a href="#" className="hover:text-indigo-400" aria-label="Telegram"><MessageSquare className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} YADO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;