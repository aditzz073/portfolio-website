import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = '/Resume.pdf';
    window.open(resumeUrl);
  };

  useEffect(() => {
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <div className={`${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'} ${isSecondary ? 'flex-col' : 'flex-row'} gap-6`}>
      <ul className={`list-none flex ${isSecondary ? 'flex-col' : 'flex-row'} gap-6`}>
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
            } hover:text-white text-[20px] font-medium cursor-pointer`}
            onClick={() => {
              setActive(link.title);
              if (isSecondary) {
                setToggle(false);
              }
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
        <li
          className={`text-${
            isSecondary ? 'secondary' : 'white'
          } hover:text-white text-[20px] font-medium cursor-pointer`}
        >
          <button onClick={toggleResume}>Resume</button>
        </li>
      </ul>
      
      {/* Social links for mobile menu */}
      {isSecondary && (
        <div className="flex flex-row gap-4 justify-center mt-4 pt-4 border-t border-gray-600">
          <a
            href="https://github.com/aditzz073"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
            aria-label="GitHub"
            onClick={() => setToggle(false)}
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/aditya-your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
            aria-label="LinkedIn"
            onClick={() => setToggle(false)}
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://instagram.com/aditzz073"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
            aria-label="Instagram"
            onClick={() => setToggle(false)}
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#contact"
            className="text-secondary hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
            aria-label="Contact Me"
            onClick={() => {
              setActive('Contact');
              setToggle(false);
            }}
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      )}
    </div>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex items-center max-w-7xl mx-auto">
          {/* Left side - Brand Logo and Name (Centered) */}
          <div className="flex-1 flex justify-center sm:justify-start">
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive('');
                window.scrollTo(0, 0);
              }}
            >
              <p className="brand-name text-[24px] cursor-pointer flex items-center">
                adityaaa073&nbsp;
              </p>
            </Link>
          </div>
          
          {/* Center - Navigation Links (hidden on mobile) */}
          <div className="hidden sm:flex items-center">
            {renderNavLinks(false)}
          </div>
          
          {/* Right side - Social Links + Mobile Menu */}
          <div className="flex-1 flex justify-end items-center">
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-4 mr-4">
              <a
                href="https://github.com/aditzz073"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-purple-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-pujer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://www.instagram.com/adityaaa073/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#contact"
                className="text-white hover:text-green-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
                aria-label="Contact Me"
                onClick={() => setActive('Contact')}
              >
                <FaEnvelope size={20} />
              </a>
            </div>
            
            {/* Mobile menu toggle */}
            <div className="sm:hidden flex items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[18px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />
            </div>
          </div>
          
          {/* Mobile menu dropdown */}
          <div
            className={`p-4 black-gradient absolute top-14 right-0 mx-2 my-2 min-w-[120px] z-10 rounded-xl foggy-glass ${
              toggle ? 'flex' : 'hidden'
            } sm:hidden`}
          >
            {renderNavLinks(true)}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
