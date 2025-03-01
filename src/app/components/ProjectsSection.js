import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code2, Layout, Server } from 'lucide-react';

const projects = [
  {
    title: 'Azernis GmbH Website',
    description: 'Professional landing page with modern design principles and optimized performance metrics.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Docker'],
    link: 'https://azernis.com',
    github: null,
    image: '/logos/projectAzernis.png',
    type: 'Frontend'
  },
  {
    title: 'Superhero Team Builder',
    description: 'An interactive app to explore superheroes, build dream teams, and engage in epic battles. Offers recommendations for balanced or random teams based on powers and alignments.',
    tech: ['React','Next.js','Node.js','Docker', 'Openshift'],
    link: null,
    github: 'https://github.com/prathmesh3235/superhero-team-builder',
    image: '/logos/projectSuperheroes.png',
  },
  {
    title: 'Request Management System',
    description: 'A microservices-based system for handling employee requests and approvals, featuring Google SSO, role-based access control, email notifications, and real-time status updates.',
    tech: [
      'React', 
      'Node.js', 
      'MongoDB', 
      'Google Cloud', 
      'SSO', 
      'Express'
    ],
    link: null,
    github: 'https://github.com/prathmesh3235/microservicesApp',
    image: '/logos/projectMicroservicesApp.png', 
    type: 'Fullstack'
  },
  {
    title: 'Yaml & Dockerfile Generator',
    description: 'A web-based application to generate YAML files and Dockerfiles, allowing developers to create these configuration files easily through an intuitive interface.',
    tech: ['React', 'Node.js', 'Docker'],
    link: 'https://yaml-dockerfile-generator-application.vercel.app',
    github: 'https://github.com/prathmesh3235/Yaml_and_Dockerfile_Generator_Application',
    image: '/logos/dockerfileGenerator.png',
    type: 'Fullstack'
  },
  {
    title: 'Shristerling: E-commerce Website',
    description: 'Modern portfolio website with sleek animations, dynamic content loading, and responsive design. Features interactive UI elements and smooth navigation experience.',
    tech: ['Next.js', 'Tailwind CSS', 'React'],
    link: 'https://shristerling.vercel.app/',
    github: 'https://github.com/prathmesh3235/sterling_next',
    image: '/logos/projectSterling.webp',
    type: 'Frontend'
  }
];

const ProjectCard = ({ project, index, isInView }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`backdrop-blur-sm bg-black/40 rounded-xl overflow-hidden border border-purple-900/20
        hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group
        ${project.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-end gap-3">
            {project.github && (
              <motion.a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:bg-white/20 border border-white/10
                         transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-white" />
              </motion.a>
            )}
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:bg-white/20 border border-white/10
                       transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            {project.title}
          </h3>
          <Code2 className="w-5 h-5 text-purple-400/60" />
        </div>
        
        <p className="text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 backdrop-blur-sm bg-purple-500/10 border border-purple-500/20 
                       text-purple-400 text-sm rounded-full hover:bg-purple-500/20 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const PatternElement = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="absolute text-sm text-gray-500 font-mono transform rotate-45" 
             style={{ 
               top: `${i * 7}%`, 
               left: Math.random() * 100 + '%',
               transform: `rotate(${Math.random() * 360}deg)`
             }}>
          {'{  }  </>  ( )  =>'}
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative h-auto py-10 px-4 bg-[#0a0a0a]" ref={sectionRef}>
      <PatternElement />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
            Featured Projects
          </h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsSection;