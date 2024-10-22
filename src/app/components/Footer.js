import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/prathmesh3235',
      className: 'hover:text-purple-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://linkedin.com/in/prathmeshdoddanawar',
      className: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:prathmesh.admg@gmail.com',
      className: 'hover:text-purple-400'
    }
  ];

  const quickLinks = [
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Skills', url: '#technical-expertise' },
    { name: 'Education', url: '#education' }
  ];

  return (
    <footer className="bg-[#0f172a] mt-20">
      {/* Gradient Separator Line */}
      <div className="h-px bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-purple-400/20" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Prathmesh.dev
            </h3>
            <p className="text-gray-400 text-sm">
              Software Developer crafting delightful web experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-white text-sm flex items-center justify-center md:justify-start gap-1 transition-colors"
                  >
                    <ExternalLink size={12} />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`text-gray-400 transition-colors ${social.className}`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Location & Availability */}
          <div className="text-center md:text-left">
            <h4 className="text-white font-semibold mb-4">Location</h4>
            <p className="text-gray-400 text-sm">
               Germany
              <br />
              Open for opportunities
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <p>
              &copy; {currentYear} Prathmesh Doddanawar. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Built with React Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}