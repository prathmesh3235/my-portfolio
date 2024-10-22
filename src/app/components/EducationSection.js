import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Building2, Calendar, MapPin, Award, Languages, ExternalLink, Code } from 'lucide-react';


const educationData = {
    degrees: [
      {
        degree: "Master's in Computer Science",
        institution: "Universität Paderborn",
        location: "Paderborn, Germany",
        period: "10/2022 - Present",
        details: [
          "Specialization in Software Engineering and Web Technologies",
          "Master Thesis: Analyzing the AI and digital potential of late factory planning",
          "Key projects in cybersecurity and digital factory planning"
        ]
      },
      {
        degree: "Master's Project: Design It Develop It Deploy It",
        institution: "Fraunhofer IEM and Universität Paderborn",
        location: "Paderborn, Germany",
        period: "04/2023 – 04/2024",
        details: [
          "Delivered a user-centric design for a Next-gen cybersecurity platform by leading the UI development using React JS, Next JS, TypeScript, and Bootstrap, resulting in an intuitive and secure user interface",
          "Enhanced application functionality and user experience by integrating RESTful APIs for dynamic content management, ensuring seamless interaction and real-time data updates",
          "Improved overall project efficiency and effectiveness by closely collaborating with the backend team, successfully enabling dynamic content delivery through seamless API integration"
        ]
      },
    //   {
    //     degree: "Master Thesis",
    //     institution: "Fraunhofer IEM",
    //     location: "Paderborn, Germany",
    //     period: "05/2024 – 10/2024",
    //     details: [
    //       "Analyzing the AI and digital potential of late factory planning",
    //       "Enhanced late factory planning efficiency by developing the Digital Integrative Factory Planning methodology with AI and digital technology integration",
    //       "Improved digital factory planning by identifying inefficiencies and designing advanced tools, including an Interface Matrix and AI Potential Catalogue",
    //       "Delivered a dynamic web-based application with React, Next.js, Node.js, Express, and MySQL for real-time interaction and visualization of factory planning, boosting decision-making and efficiency"
    //     ]
    //   },
      {
        degree: "Bachelor of Engineering",
        institution: "Visvesvaraya Technological University",
        location: "Bengaluru, India",
        period: "08/2016 - 08/2020",
        details: [
          "Major in Computer Science and Engineering",
          "Focus on core computer science fundamentals",
          "Strong foundation in programming and algorithms"
        ]
      }
    ],
    certificates: [
      {
        name: "Programming using JavaScript",
        issuer: "Microsoft Technology Associate",
        link: "https://bit.ly/3ZnqI84"
      },
      {
        name: "Cross-Platform Mobile App Development",
        issuer: "Microsoft AEP",
        link: "https://bit.ly/3KGYcdk"
      },
      {
        name: "Python",
        issuer: "NPTEL, IIT Madras",
        link: "https://bit.ly/3EMBqgu"
      }
    ],
    languages: [
      { name: "English", level: "C1", proficiency: 90 },
      { name: "German", level: "A2", proficiency: 40 },
      { name: "Hindi", level: "C1", proficiency: 90 },
      { name: "Kannada", level: "C1", proficiency: 90 },
      { name: "Marathi", level: "C1", proficiency: 90 },
      { name: "Telugu", level: "B1", proficiency: 70 }
    ]
  };

const TimelinePoint = ({ children }) => (
  <div className="absolute -left-3 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
    {children}
  </div>
);

const EducationCard = ({ education, index, isInView }) => {
    const isProject = education.degree.includes("Project") || education.degree.includes("Thesis");
    
    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="relative pl-8 pb-12 last:pb-0"
      >
        <TimelinePoint>
          {isProject ? (
            <Code className="w-3 h-3 text-white" />
          ) : (
            <GraduationCap className="w-3 h-3 text-white" />
          )}
        </TimelinePoint>
        <div className="absolute left-0 top-6 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-transparent" />
        
        <div className="backdrop-blur-sm bg-black/40 rounded-xl p-6 border border-purple-900/20 
                      hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {education.degree}
          </h3>
          
          <div className="mt-4 space-y-2">
            <div className="flex items-center text-gray-400 gap-2">
              <Building2 className="w-4 h-4 text-purple-400/60" />
              <span>{education.institution}</span>
            </div>
            
            <div className="flex items-center text-gray-400 gap-2">
              <MapPin className="w-4 h-4 text-purple-400/60" />
              <span>{education.location}</span>
            </div>
            
            <div className="flex items-center text-gray-400 gap-2">
              <Calendar className="w-4 h-4 text-purple-400/60" />
              <span>{education.period}</span>
            </div>
          </div>
  
          <ul className="mt-4 space-y-2">
            {education.details.map((detail, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                className="text-gray-400 pl-4 border-l border-purple-500/30"
              >
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };

const CertificateCard = ({ cert, index, isInView }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="backdrop-blur-sm bg-black/40 rounded-lg p-4 border border-purple-900/20
               hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
  >
    <div className="flex items-center justify-between mb-2">
      <Award className="w-5 h-5 text-purple-400" />
      {cert.link && (
        <a 
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      )}
    </div>
    <h4 className="font-semibold text-gray-300">{cert.name}</h4>
    <p className="text-sm text-gray-400">{cert.issuer}</p>
  </motion.div>
);

const LanguageBar = ({ language, isInView }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-300">{language.name}</span>
      <span className="text-gray-400">{language.level}</span>
    </div>
    <div className="h-2 bg-black/40 rounded-full overflow-hidden backdrop-blur-sm border border-purple-900/20">
      <motion.div
        className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${language.proficiency}%` } : { width: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const EducationSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen py-1 px-4 bg-[#0a0a0a]" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="absolute text-sm text-gray-500 font-mono" 
               style={{ 
                 top: `${i * 7}%`, 
                 left: Math.random() * 100 + '%',
                 transform: `rotate(${Math.random() * 360}deg)`
               }}>
            {'{ edu }  <>  ( )  =>'}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Education
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <div className="relative pl-4">
              {educationData.degrees.map((edu, index) => (
                <EducationCard 
                  key={index} 
                  education={edu} 
                  index={index} 
                  isInView={isInView}
                />
              ))}
            </div>
          </div>

          {/* Certificates and Languages */}
          <div className="space-y-8">
            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                Certificates
              </h3>
              <div className="grid gap-4">
                {educationData.certificates.map((cert, index) => (
                  <CertificateCard 
                    key={index} 
                    cert={cert} 
                    index={index} 
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="backdrop-blur-sm bg-black/40 rounded-xl p-6 border border-purple-900/20"
            >
              <div className="flex items-center gap-2 mb-4">
                <Languages className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  Languages
                </h3>
              </div>
              {educationData.languages.map((lang, index) => (
                <LanguageBar 
                  key={index} 
                  language={lang} 
                  isInView={isInView}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;