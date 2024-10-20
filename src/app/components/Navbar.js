"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = window.innerHeight * 0.25;
      setShowName(window.scrollY > headerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Technical Skills', 'Work Experience', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full p-4 lg:p-6 z-50 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between lg:justify-between relative">
          {/* Brand/Name - Left aligned on mobile/tablet, centered on desktop */}
          <div 
            className={`
              transition-all duration-300 ease-in-out
              ${showName ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
              lg:flex lg:justify-start
            `}
          >
            <a 
              href="#" 
              className="text-lg sm:text-xl lg:text-2xl font-semibold hover:text-purple-400 transition-colors whitespace-nowrap"
            >
              Prathmesh Doddanawar
            </a>
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-400 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-base lg:text-lg hover:text-purple-400 transition-colors whitespace-nowrap"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile/Tablet menu dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col items-center space-y-4 py-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-base sm:text-lg hover:text-purple-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}