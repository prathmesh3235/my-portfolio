import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = window.innerHeight * 0.25;
      setShowName(window.scrollY > headerHeight);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Work Experience', 'Technical Expertise', 'Projects', 'Education', 'Recommendations'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Main navbar background */}
      <div className="bg-[#0a0a0a] border-b border-purple-900/20 shadow-lg shadow-purple-500/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand/Logo with enhanced gradient */}
            <div className={`transform transition-all duration-500 ${showName ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              <a href="#" className="text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-purple-500 hover:via-blue-500 hover:to-purple-500 transition-all">
                Prathmesh.dev
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 ml-auto pr-1">
              {navItems.map((item) => {
                const itemId = item.toLowerCase().replace(/\s+/g, '-');
                const isActive = activeSection === itemId;
                return (
                  <a
                    key={item}
                    href={`#${itemId}`}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group
                      ${isActive 
                        ? 'text-white bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'}
                    `}
                  >
                    {item}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 transform origin-left transition-transform duration-200" />
                    )}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 transform origin-left scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button with enhanced hover effect */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown with improved styling */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-[#0a0a0a]`}
        >
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => {
              const itemId = item.toLowerCase().replace(/\s+/g, '-');
              const isActive = activeSection === itemId;
              return (
                <a
                  key={item}
                  href={`#${itemId}`}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive 
                      ? 'bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 text-white' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'}
                  `}
                >
                  {item}
                  <ChevronRight 
                    size={16} 
                    className={`transform transition-transform ${isActive ? 'translate-x-1 text-purple-400' : ''}`} 
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}