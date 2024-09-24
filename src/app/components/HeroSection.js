"use client";
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="hero min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-white"
      >
        <h1 className="text-5xl font-bold">Prathmesh Doddanawar</h1>
        <p className="mt-4 text-xl">Full Stack Developer</p>
        <button className="mt-8 px-6 py-3 bg-white text-blue-500 rounded-full shadow-lg hover:bg-gray-200">
          View My Work
        </button>
      </motion.div>
    </section>
  );
}