import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCard = ({ name, icon, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="relative group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#1a1a2e] rounded-2xl border border-gray-800 flex flex-col items-center justify-center p-4 hover:border-violet-500 transition-all duration-300 group-hover:bg-[#16213e] group-hover:shadow-lg group-hover:shadow-violet-500/20">
        <img
          src={icon}
          alt={name}
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-2 group-hover:scale-110 transition-transform duration-300"
        />
        <p className="text-white text-xs sm:text-sm font-medium text-center leading-tight">
          {name}
        </p>
      </div>
      
      {/* Floating animation dots */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
    </motion.div>
  );
};

const Skills = () => {
  // Combine programming languages and technologies
  const allSkills = [
    ...services.map(skill => ({ name: skill.title, icon: skill.icon })),
    ...technologies.map(tech => ({ name: tech.name, icon: tech.icon }))
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Technical Arsenal</p>
        <h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I work with a diverse range of programming languages, frameworks, and tools to build 
        robust and scalable applications. Here's my technical toolkit:
      </motion.p>

      {/* Skills Grid */}
      <div className="mt-16 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-3xl blur-3xl"></div>
        
        <div className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-8 bg-black/20 rounded-3xl border border-gray-800/50 backdrop-blur-sm">
          {allSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Programming Languages Highlight */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-12"
      >
        <h3 className="text-white text-xl font-semibold mb-6 text-center">
          Core Programming Languages
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="px-6 py-3 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-full border border-violet-500/30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white font-medium">{service.title}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
