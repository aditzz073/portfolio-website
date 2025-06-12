import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { slideIn, fadeIn } from '../utils/motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/aditzz073",
      label: "GitHub",
      color: "hover:text-gray-400"
    },
    {
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/aditya-pujer/",
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/adityaaa073/",
      label: "Instagram",
      color: "hover:text-pink-400"
    },
    {
      icon: FaEnvelope,
      url: "#contact",
      label: "Contact",
      color: "hover:text-green-400"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Extracurricular", href: "#extracurricular" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="relative bg-black-100 border-t border-gray-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand section */}
          <motion.div
            variants={fadeIn("up", "spring", 0.1, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="brand-name text-2xl font-bold">
              adityaaa073
            </h3>
            <p className="text-secondary text-sm leading-relaxed max-w-xs">
              Coding the future by day, capturing it through the lens by dusk.
            </p>
            <div className="flex items-center gap-2 text-secondary text-sm">
              <FaCode className="text-violet-400" />
              <span>Building with passion & precision</span>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            variants={fadeIn("up", "spring", 0.2, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect section */}
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-white text-lg font-semibold">Let's Connect</h4>
            <p className="text-secondary text-sm">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : '_self'}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`text-secondary ${social.color} transition-all duration-300 p-3 bg-tertiary rounded-full hover:bg-violet-600/20 hover:scale-110`}
                  aria-label={social.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          variants={slideIn("left", "spring", 0.4, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="border-t border-gray-800/50 pt-8"
        >
          {/* Bottom section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-secondary text-sm">
              <span>© {currentYear} Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>by Aditya</span>
            </div>
            
            <div className="text-secondary text-sm">
              <span>Built with React • Three.js • Tailwind CSS</span>
            </div>
          </div>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-violet-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-30"></div>
      </div>
    </footer>
  );
};

export default Footer;
