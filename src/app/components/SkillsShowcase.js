import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillData = [
  {
    title: "Frontend Development",
    titleColor: "text-white",
    bgGradient: "bg-gradient-to-br from-purple-900/10 to-blue-900/10",
    borderColor: "border-purple-900/20",
    skills: [
      {
        name: "React",
        level: 90,
        logo: "/logos/react.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      },
      {
        name: "Next.js",
        level: 85,
        logo: "/logos/nextdotjs.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      },
      {
        name: "TypeScript",
        level: 85,
        logo: "/logos/typescript.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      },
      {
        name: "Tailwind CSS",
        level: 90,
        logo: "/logos/tailwindcss.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      }
    ]
  },

  {
    title: "Backend Development",
    titleColor:  "text-white",
    bgGradient: "bg-gradient-to-br from-purple-900/10 to-blue-900/10",
    borderColor: "border-purple-900/20",
    skills: [
      {
        name: "Node.js",
        level: 85,
        logo: "/logos/nodejs.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      },
      {
        name: "Express",
        level: 80,
        logo: "/logos/express.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      },
      {
        name: "Python",
        level: 75,
        logo: "/logos/python.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      }
    ]
  },

  {
    title: "Database & Cloud",
    titleColor:  "text-white",
    bgGradient: "bg-gradient-to-br from-purple-900/10 to-blue-900/10",
    borderColor: "border-purple-900/20",
    skills: [
      {
        name: "MongoDB",
        level: 80,
        logo: "/logos/mongodb.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      },
      {
        name: "Firebase",
        level: 85,
        logo: "/logos/firebase.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      }
    ]
  },

  {
    title: "DevOps & Tools",
    titleColor:  "text-white",
    bgGradient: "bg-gradient-to-br from-purple-900/10 to-blue-900/10",
    borderColor: "border-purple-900/20",
    skills: [
      {
        name: "Docker",
        level: 75,
        logo: "/logos/docker.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      },
      {
        name: "Git",
        level: 90,
        logo: "/logos/git.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      },
      {
        name: "Kubernetes",
        level: 65,
        logo: "/logos/kubernetes.svg",
        color: "bg-gradient-to-r from-purple-500 to-blue-500"
      }
    ]
  }
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: width => ({
    width: `${width}%`,
    transition: { duration: 1, ease: "easeOut" }
  })
};

const SkillCard = ({ skill }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div 
      className="flex items-center space-x-3 mb-6"
      variants={cardVariants}
    >
      <motion.div 
        className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm border border-gray-100"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
      </motion.div>
      <div className="flex-1" ref={ref}>
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
          <motion.span 
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            {skill.level}%
          </motion.span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${skill.color}`}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={progressVariants}
            custom={skill.level}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkillSection = ({ category, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={`p-6 rounded-2xl border ${category.borderColor} ${category.bgGradient}
        transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
    >
      <motion.h3 
        className={`text-xl font-bold mb-6 ${category.titleColor}`}
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {category.title}
      </motion.h3>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const FloatingTag = ({ children, index }) => (
  <motion.span
    className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-300 transition-all duration-200"
    initial={{ opacity: 0, y: 20 }}
    whileHover={{ 
      y: -5,
      scale: 1.05,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
    }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.3,
      delay: index * 0.1
    }}
  >
    {children}
  </motion.span>
);

const SkillsShowcase = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          {/* <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            A comprehensive overview of my technical stack and proficiency levels
          </motion.p> */}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {skillData.map((category, index) => (
            <SkillSection 
              key={category.title} 
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Tools & Technologies Tags */}
        <motion.div 
          className="mt-12 p-6 rounded-2xl border border-gray-200 bg-white"
          variants={cardVariants}
        >
          <motion.h3 
            className="text-xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Additional Tools & Technologies
          </motion.h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Redux", "Webpack", "Jest", "Cypress", "CI/CD", "REST APIs",
              "Agile", "Scrum", "VS Code", "Figma", "Sass", "JWT"
            ].map((tool, index) => (
              <FloatingTag key={tool} index={index}>
                {tool}
              </FloatingTag>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsShowcase;