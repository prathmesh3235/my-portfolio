import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';
import ProjectCard from '../components/ProjectCard';
import SocialLinks from '../components/SocialLinks';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsSection from './ProjectsSection';
import WorkExperience from './WorkExperience';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      <div className="container mx-auto px-2 py-20">
        <header className="text-center mb-2">
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
        <section id= "technical-skills">
        <SkillsShowcase />
        </section>
        <section id ="work-experience">
        <WorkExperience/>
        </section>
        <section id="projects">
        <ProjectsSection/>
        </section>
        <SocialLinks />
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;
