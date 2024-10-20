import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const ProfileCard = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const socialIcons = [
    { icon: <Github size={24} />, href: "https://github.com/prathmesh3235", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/prathmeshdoddanawar", label: "LinkedIn" },
    { icon: <Mail size={24} />, href: "mailto:contact@prathmeshd.com", label: "Email" }
  ];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#0a0a0a]">
      <div 
        className="relative w-full max-w-6xl mx-auto overflow-hidden"
        onMouseMove={handleMouseMove}
        style={{
          '--x': mousePosition.x,
          '--y': mousePosition.y,
        }}
      >
        {/* Code-like background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="text-sm text-gray-500 font-mono" style={{ position: 'absolute', top: `${i * 7}%`, left: Math.random() * 100 + '%' }}>
              {'{  }  </>  ( )  =>'} 
            </div>
          ))}
        </div>

        {/* Main content container with spotlight effect */}
        <div 
          className="relative backdrop-blur-sm bg-black/40 rounded-2xl p-12 border border-gray-800
                     before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/20 before:via-transparent before:to-blue-500/20 before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-500
                     after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.08)_10%,transparent_80%)]"
        >
          {/* Name section with creative typography */}
          <div className="text-center mb-8 relative">
            <div className="inline-block">
              <h1 className="text-7xl md:text-8xl font-bold tracking-tighter mb-2">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                  Prathmesh
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/60">
                  Doddanawar
                </span>
              </h1>
            </div>
          </div>

          {/* Role with code-style decoration */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="font-mono text-gray-400 opacity-60">{"<"}</div>
            <h2 className="text-xl font-mono text-gray-300 tracking-widest relative overflow-hidden
                         before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-purple-500/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-1000">
              FULL STACK DEVELOPER
            </h2>
            <div className="font-mono text-gray-400 opacity-60">{"/>"}</div>
          </div>

          {/* Social links with tech-inspired hover effects */}
          <div className="flex justify-center space-x-8 mb-12">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="p-4 bg-white/5 rounded-lg border border-gray-800 
                               transform transition-all duration-300 
                               group-hover:border-purple-500/50 group-hover:bg-white/10
                               group-hover:shadow-[0_0_2rem_-0.5rem_theme(colors.purple.500)]">
                  <div className="text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                    {social.icon}
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                                 transition-all duration-300 text-sm text-gray-400 whitespace-nowrap font-mono">
                    {social.label}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bio with code-inspired styling */}
          {/* <div className="relative max-w-3xl mx-auto">
            <div className="text-gray-400 font-light leading-relaxed text-center space-y-4">
              <p className="relative overflow-hidden">
                <span className="inline-block transform hover:translate-x-2 transition-transform duration-300">
                  I am a Full Stack Developer with a Master's in Computer Science, skilled in building responsive, 
                  user-friendly web applications using React, Next.js, and Tailwind CSS.
                </span>
              </p>
              <p className="relative overflow-hidden">
                <span className="inline-block transform hover:translate-x-2 transition-transform duration-300">
                  I am committed to clean code and scalable solutions, proficient in both frontend and backend development.
                </span>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;