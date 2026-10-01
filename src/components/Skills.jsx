import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { skillCategories } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiFastapi,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPandas,
  SiTensorflow,
  SiDocker,
  SiLinux,
  SiVercel,
  SiGit,
  SiGithubactions,
  SiPlaywright,
  SiPostman,
  SiStripe,
  SiRazorpay,
} from "react-icons/si";
import { FaAws, FaNetworkWired, FaServer, FaRobot, FaDatabase } from "react-icons/fa";
import { TbBinaryTree } from "react-icons/tb";

const iconMap = {
  cpp: <SiCplusplus className="text-[#00599C] text-3xl" />,
  python: <SiPython className="text-[#3776AB] text-3xl" />,
  javascript: <SiJavascript className="text-[#F7DF1E] text-3xl" />,
  typescript: <SiTypescript className="text-[#3178C6] text-3xl" />,
  fastapi: <SiFastapi className="text-[#009688] text-3xl" />,
  nodejs: <SiNodedotjs className="text-[#339933] text-3xl" />,
  express: <SiExpress className="text-white text-3xl" />,
  flask: <SiFlask className="text-white text-3xl" />,
  api: <FaNetworkWired className="text-[#4FC3F7] text-3xl" />,
  microservices: <FaServer className="text-[#915EFF] text-3xl" />,
  reactjs: <SiReact className="text-[#61DAFB] text-3xl" />,
  nextjs: <SiNextdotjs className="text-white text-3xl" />,
  tailwind: <SiTailwindcss className="text-[#06B6D4] text-3xl" />,
  vite: <SiVite className="text-[#646CFF] text-3xl" />,
  postgresql: <SiPostgresql className="text-[#4169E1] text-3xl" />,
  mysql: <SiMysql className="text-[#4479A1] text-3xl" />,
  mongodb: <SiMongodb className="text-[#47A248] text-3xl" />,
  redis: <SiRedis className="text-[#DC382D] text-3xl" />,
  gemini: <FaRobot className="text-[#915EFF] text-3xl" />,
  chromadb: <FaDatabase className="text-[#FF6F61] text-3xl" />,
  pandas: <SiPandas className="text-[#150458] bg-white rounded p-0.5 text-3xl" />,
  tensorflow: <SiTensorflow className="text-[#FF6F00] text-3xl" />,
  aws: <FaAws className="text-[#FF9900] text-3xl" />,
  docker: <SiDocker className="text-[#2496ED] text-3xl" />,
  linux: <SiLinux className="text-[#FCC624] text-3xl" />,
  vercel: <SiVercel className="text-white text-3xl" />,
  git: <SiGit className="text-[#F05032] text-3xl" />,
  githubactions: <SiGithubactions className="text-[#2088FF] text-3xl" />,
  playwright: <SiPlaywright className="text-[#2EAD33] text-3xl" />,
  postman: <SiPostman className="text-[#FF6C37] text-3xl" />,
  n8n: <TbBinaryTree className="text-[#EA4B71] text-3xl" />,
  stripe: <SiStripe className="text-[#635BFF] text-3xl" />,
  razorpay: <SiRazorpay className="text-[#0C2340] bg-white rounded p-0.5 text-3xl" />,
};

const SkillCard = ({ name, iconKey, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="relative group flex justify-center"
      whileHover={{ y: -8 }}
    >
      <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#1a1a2e] rounded-2xl border border-gray-800 flex flex-col items-center justify-center p-3 hover:border-violet-500 transition-all duration-300 group-hover:bg-[#16213e] group-hover:shadow-lg group-hover:shadow-violet-500/20">
        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
          {iconMap[iconKey] || <FaServer className="text-violet-400 text-3xl" />}
        </div>
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
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const displayedSkills =
    activeCategory === "All"
      ? skillCategories.flatMap((c) => c.skills)
      : skillCategories.find((c) => c.category === activeCategory)?.skills || [];

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
        A comprehensive toolkit built through hands-on production engineering, full-stack application development, and applied AI systems.
      </motion.p>

      {/* Category filter pills */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-105"
                : "bg-[#1a1a2e] text-gray-300 border border-gray-800 hover:border-violet-500/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="mt-10 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 rounded-3xl blur-3xl"></div>
        
        <div className="relative grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 p-6 sm:p-8 bg-black/20 rounded-3xl border border-gray-800/50 backdrop-blur-sm min-h-[220px]">
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <SkillCard
                key={`${skill.name}-${skill.iconKey}`}
                name={skill.name}
                iconKey={skill.iconKey}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Floating particles effect */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-16 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
