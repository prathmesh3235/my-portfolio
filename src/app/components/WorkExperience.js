import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowRight } from 'lucide-react';

const workExperience = [
  {
    title: "Frontend Web Developer",
    company: "Johannes Gutenberg-Universität Mainz",
    location: "Mainz, Germany",
    period: "04/2024 – 09/2024",
    type: "Part Time",
    highlights: [
      "Spearheaded the Behavioral Measurement Toolbox development, enabling researchers to conduct advanced behavioral studies",
      "Delivered intuitive, reusable interfaces by designing modular React templates",
      "Elevated project quality and collaboration by enforcing clean code practices"
    ]
  },
  {
    title: "Scientific Assistant (Web Development)",
    company: "Deutsche Sporthochschule",
    location: "Köln, Germany",
    period: "05/2023 – 04/2024",
    type: "Part Time",
    highlights: [
      "Enhanced user interaction analysis by developing e-commerce websites with React, AR, and 3D models",
      "Optimized data-driven decision-making processes using Firebase Firestore and Google Analytics",
      "Improved user-centric design through comprehensive UX research"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Azernis GmbH",
    location: "Paderborn, Germany",
    period: "06/2023 - 01/2024",
    type: "Part Time",
    highlights: [
      "Boosted website traffic through successful design of azernis.com landing page",
      "Achieved innovative, brand-consistent visuals with UI/UX collaboration",
      "Improved site visibility and deployed Dockerized web application on Azure"
    ]
  },
  {
    title: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    location: "Bengaluru, India",
    period: "12/2020 - 09/2022",
    type: "Full Time",
    highlights: [
      "Elevated user satisfaction by developing responsive web components",
      "Streamlined development processes through modular design practices",
      "Facilitated rapid iteration using Agile methodologies"
    ]
  }
];

const ExperienceCard = ({ experience, index, isInView }) => {
    const cardVariants = {
      hidden: { 
        opacity: 0, 
        x: -50,
        scale: 0.95
      },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 1.5,
          delay: index * 0.2
        }
      }
    };
  
    const highlightVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: i => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.9,
          delay: (index * 0.2) + (i * 0.1)
        }
      })
    };
  
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative px-5 pb-8 group"
      >
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 group-last:h-8"></div>
        
        <motion.div 
          className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-600 group-hover:border-purple-600 transition-colors duration-300"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: index * 0.2 }}
        />
        
        <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ml-4">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{experience.title}</h3>
              <p className="text-lg text-blue-600">{experience.company}</p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {experience.type}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
          
          <ul className="space-y-2">
            {experience.highlights.map((highlight, idx) => (
              <motion.li 
                key={idx}
                custom={idx}
                variants={highlightVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex items-start gap-2"
              >
                <ArrowRight className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };
  
  const WorkExperience = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
    const headerVariants = {
      hidden: { opacity: 0, y: -20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 0.2
        }
      }
    };
  
    return (
      <div className="min-h-screen py-10 px-3" ref={sectionRef}>
        <div className="max-w-9xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={headerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Work Experience
              </h2>
            </div>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"
              initial={{ width: 0 }}
              animate={isInView ? { width: "6rem" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            {/* <p className="text-gray-600 max-w-2xl mx-auto">
              My professional journey and key achievements
            </p> */}
          </motion.div>
  
          <div className="max-w-6xl mx-auto">
            {workExperience.map((experience, index) => (
              <ExperienceCard 
                key={index} 
                experience={experience} 
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default WorkExperience;