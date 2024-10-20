import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    { 
      Icon: Github, 
      href: 'https://github.com/prathmesh3235', 
      color: 'text-gray-600 hover:text-gray-800',
      label: 'Github'
    },
    { 
      Icon: Linkedin, 
      href: 'https://linkedin.com/in/prathmeshdoddanawar', 
      color: 'text-gray-600 hover:text-blue-600',
      label: 'LinkedIn'
    },
    { 
      Icon: Mail, 
      href: 'mailto:prathmesh.admg@gmail.com', 
      color: 'text-gray-600 hover:text-red-500',
      label: 'Email'
    },
    { 
      Icon: MapPin, 
      color: 'text-gray-600 hover:text-purple-500', 
      label: 'Paderborn, Germany'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0,
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <div className="bg-gray-50 py-20 px-4" ref={ref}>
      <div className="max-w-8xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[#6366f1] mb-16"
        >
          Get in Touch
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center items-center gap-8 flex-wrap"
        >
          {contacts.map(({ Icon, href, color, label }, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-3 px-6 py-4 rounded-2xl bg-white shadow-lg 
                transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
            >
              <Icon className={`w-6 h-6 transition-colors duration-300 ${color}`} />
              <span className="text-gray-600 font-medium">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;