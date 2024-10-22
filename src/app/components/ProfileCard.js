import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Code, Terminal, Globe, 
         Layout, Command, Braces, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProfileCard = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [typing, setTyping] = useState(true);
  const roles = ["SOFTWARE DEVELOPER", "FULL STACK ENGINEER", "UI/UX ENTHUSIAST"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  const socialLinks = [
    { 
      icon: <Github className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />, 
      href: "https://github.com/prathmesh3235",
      label: "GitHub",
      color: "group-hover:text-emerald-400"
    },
    { 
      icon: <Linkedin className="transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110" />, 
      href: "https://linkedin.com/in/prathmeshdoddanawar",
      label: "LinkedIn",
      color: "group-hover:text-blue-400"
    },
    { 
      icon: <Mail className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />, 
      href: "mailto:prathmesh.admg@gmail.com",
      label: "Email",
      color: "group-hover:text-purple-400"
    }
  ];

  useEffect(() => {
    // Role cycling animation
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setTyping(true);
    }, 2000);

    return () => clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    // Floating animation
    const animate = () => {
      const time = Date.now() * 0.001;
      if (cardRef.current && !isHovered) {
        const floatX = Math.sin(time) * 2;
        const floatY = Math.cos(time * 1.5) * 2;
        setRotation({ x: floatY, y: floatX });
      }
    };

    intervalRef.current = setInterval(animate, 1000 / 60);
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !isHovered) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setRotation({
      x: (y - 0.5) * 20,
      y: (x - 0.5) * 20,
    });

    setGlowPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="min-h-[20vh] flex items-center justify-center p-4 mt-20 perspective-1000">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setRotation({ x: 0, y: 0 });
        }}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
        className="relative w-full max-w-5xl transition-all duration-200 ease-out"
      >
        {/* Glow Effect */}
        <div
          className="absolute inset-0 opacity-50 rounded-2xl transition-opacity duration-300"
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${glowPosition.x}px ${glowPosition.y}px, rgba(124,58,237,0.3) 0%, transparent 70%)`
              : 'none',
            opacity: isHovered ? 1 : 0
          }}
        />

        {/* Main Card */}
        <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl p-8 border border-gray-800
                     shadow-[0_0_50px_-12px_rgba(124,58,237,0.5)]
                     hover:shadow-[0_0_100px_-12px_rgba(124,58,237,0.8)]
                     transition-all duration-300">
          
          {/* Terminal Header */}
          <motion.div 
            className="relative mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute -top-6 left-4 flex space-x-2">
              <motion.div 
                className="w-3 h-3 rounded-full bg-red-500/50"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-500/50"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-green-500/50"
                whileHover={{ scale: 1.2 }}
              />
            </div>
            <div className="flex items-center justify-between mb-2">
              <Command className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-gray-400" />
                <motion.span 
                  className="text-xs font-mono text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  prathmesh.dev
                </motion.span>
              </div>
              <Braces className="w-5 h-5 text-gray-400" />
            </div>
          </motion.div>

          {/* Name with Animated Gradient */}
          <motion.div 
            className="relative z-10 text-center mb-12"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 blur-2xl animate-pulse" />
              <h1>
                <motion.span 
                  className="block text-5xl sm:text-7xl font-bold tracking-tighter mb-2 
                           text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500
                           hover:from-purple-400 hover:to-blue-400 transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  Prathmesh
                </motion.span>
                <motion.span 
                  className="block text-4xl sm:text-6xl font-bold tracking-tighter
                           text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600
                           hover:from-blue-400 hover:to-purple-400 transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  Doddanawar
                </motion.span>
              </h1>
            </div>
          </motion.div>

          {/* Animated Role Badge */}
          <div className="relative z-10 flex items-center justify-center space-x-4 mb-12">
            <Layout className="w-5 h-5 text-purple-400 animate-pulse" />
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-lg blur opacity-75 
                            group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <div className="relative px-6 py-2 bg-black text-center rounded-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.code
                    key={currentRoleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="text-xl font-mono text-gray-300 tracking-wider block"
                  >
                    {roles[currentRoleIndex]}
                  </motion.code>
                </AnimatePresence>
              </div>
            </motion.div>
            <Globe className="w-5 h-5 text-blue-400 animate-pulse" />
          </div>

          {/* Social Links with Advanced Hover Effects */}
          <motion.div 
            className="relative z-10 flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative p-4 bg-black/30 rounded-xl border border-gray-800
                             transform transition-all duration-300
                             hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]
                             group-hover:-translate-y-1">
                  <div className={`text-gray-400 transition-colors duration-300 ${social.color}`}>
                    {social.icon}
                  </div>
                  <motion.span 
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 
                             opacity-0 group-hover:opacity-100 transition-all duration-300 
                             text-sm text-gray-400 whitespace-nowrap bg-black/70 
                             px-3 py-1 rounded-full"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                  >
                    {social.label}
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileCard;