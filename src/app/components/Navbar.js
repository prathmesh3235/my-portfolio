"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full p-6 z-50 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
    <ul className="flex justify-end space-x-8">
      {['About', 'Projects', 'Contact'].map((item) => (
        <li key={item}>
          <a href={`#${item.toLowerCase()}`} className="text-lg hover:text-purple-400 transition-colors">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
  );
}
