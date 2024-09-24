"use client";
import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, tech, link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-4 rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-2 text-blue-500">{tech}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 underline">
        View Project
      </a>
    </motion.div>
  );
}
