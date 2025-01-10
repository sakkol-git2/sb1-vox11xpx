import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white text-gray-800 shadow-lg' : 'bg-transparent text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 transition-all duration-300 ${
                isScrolled ? 'text-indigo-600' : 'text-white'
              }`}
            >
              <div className={`p-2 rounded-lg ${
                isScrolled ? 'bg-indigo-100' : 'bg-white/10'
              }`}>
                <GraduationCap className="h-8 w-8" />
              </div>
              <span className="font-bold text-xl">YADO</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['Home', 'Programs', 'Mentorship', 'Events', 'About Us'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                  className={`font-medium transition-all duration-300 hover:text-indigo-500 relative group ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 transition-transform group-hover:scale-x-100" />
                </Link>
              ))}
              <button 
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  isScrolled
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-white text-indigo-600 hover:bg-gray-100'
                }`}
              >
                Join Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'hover:bg-gray-100' 
                  : 'hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden`}>
        <div className={`px-4 pt-2 pb-3 space-y-2 shadow-lg ${
          isScrolled ? 'bg-white' : 'bg-indigo-700'
        }`}>
          {['Home', 'Programs', 'Mentorship', 'Events', 'About Us'].map((item) => (
            <Link
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
              className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-800 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          <button 
            className={`w-full mt-4 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              isScrolled
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-white text-indigo-600 hover:bg-gray-100'
            }`}
          >
            Join Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;