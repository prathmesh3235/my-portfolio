import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SkillsShowcase from './SkillsShowcase';
import ProjectCard from '../components/ProjectCard';
import ContactSection from './ContactSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsSection from './ProjectsSection';
import WorkExperience from './WorkExperience';
import ProfileCard from './ProfileCard';
import EducationSection from './EducationSection';
import LinkedInRecommendations from './LinkedInRecommendations';

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
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      <Navbar />
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ width: '100vw', height: '100vh' }}
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(124, 58, 237, 0.2) 0%, rgba(31, 41, 55, 0) 40%)`,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0.2 }}
      />
      <div className="container mx-auto px-4 py-4">
        <section id="about" className="section">
          <ProfileCard />
        </section>
        <section id="work-experience" className="section">
          <WorkExperience/>
        </section>
        <section id="technical-expertise" className="section">
          <SkillsShowcase />
        </section>
        <section id="projects" className="section">
          <ProjectsSection/>
        </section>
        <section id="education" className="section">
        <EducationSection/>
        </section>
        <section id="LinkedInRecommendations" className="section">
        <LinkedInRecommendations/>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HeroSection;