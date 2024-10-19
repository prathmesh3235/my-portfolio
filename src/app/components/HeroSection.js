import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    { name: 'E-commerce Platform', description: 'A full-stack online store with React and Node.js' },
    { name: 'Task Management App', description: 'A productivity app built with Next.js and GraphQL' },
    { name: 'Data Visualization Dashboard', description: 'Interactive charts using D3.js and React' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      <Navbar />
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.2) 0%, rgba(31, 41, 55, 0) 50%)`,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
      />
      <div className="container mx-auto px-4 py-20">
        <header className="text-center mb-20">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Prathmesh Doddanawar
          </motion.h1>
          <motion.p 
            className="text-2xl md:text-3xl text-purple-400"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.p>
        </header>
        <SkillsShowcase />
        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} title={project.name} description={project.description} />
            ))}
          </div>
        </section>
        <SocialLinks />
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
