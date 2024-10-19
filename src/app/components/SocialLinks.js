import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const SocialLinks = () => (
  <div className="flex justify-center space-x-6">
    {[FiGithub, FiLinkedin, FiMail].map((Icon, index) => (
      <a key={index} href="#" className="text-3xl hover:text-purple-400 transition-colors">
        <Icon />
      </a>
    ))}
  </div>
);

export default SocialLinks;
