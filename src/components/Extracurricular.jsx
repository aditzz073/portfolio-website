import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { iskcon, mudita, genesis } from "../assets";

const ExtracurricularCard = ({ index, title, organization, date, role, description, technologies, icon, iconBg }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="bg-tertiary p-4 rounded-xl border border-gray-800/30 hover:border-violet-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-violet-500/10 h-full flex flex-col"
    >
      {/* Header with icon and basic info */}
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-700/50 overflow-hidden"
            style={{ backgroundColor: iconBg || '#1a1a2e' }}
          >
            {icon ? (
              <img
                src={icon}
                alt={organization}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {organization.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-lg font-bold mb-1 group-hover:text-violet-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors cursor-pointer">
            {organization}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-gray-400 text-xs font-medium">
              {date}
            </p>
            {role && (
              <span className="inline-block px-2 py-1 bg-violet-600/20 text-violet-300 text-xs font-medium rounded-full border border-violet-500/30">{role}</span>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-xs leading-relaxed mb-3 flex-1">
        {description}
      </p>

      {/* Technology Tags */}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-auto">
          {technologies.slice(0, 4).map((tech, i) => (
            <span
              key={`tech-${i}`}
              className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full border border-gray-700/50 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs font-medium rounded-full border border-gray-600/50">
              +{technologies.length - 4}
            </span>
          )}
        </div>
      )}
    </motion.div>
  );
};

const Extracurricular = () => {
  // Volunteering and community service activities
  const activities = [
    {
      title: "Team Lead",
      organization: "Mudita",
      date: "Nov 2023 - Present",
      role: "Volunteer",
      description: "Event photographer capturing Team Mudita's community projects. From Valuable Vintage to Pawsitivity, spreading smiles and promoting ethics through my lens.",
      technologies: ["Event Photography", "Community Projects", "Social Impact", "Visual Storytelling", "Adobe Creative Suite"],
      icon: mudita,
      iconBg: "#d97706"
    },
    {
      title: "Associate Photo Editor",
      organization: "ISKCON, Bangalore",
      date: "Jul 2023 - Present",
      role: "Volunteer",
      description: "Volunteer photographer capturing temple festivals and events, ensuring each moment reflects spiritual vibrancy while refining photography skills.",
      technologies: ["Photography", "Photo Editing", "Event Coverage", "Adobe Photoshop", "Lightroom", "Community Service"],
      icon: iskcon,
      iconBg: "#2563eb"
    },
    {
      title: "Technical Team Member",
      organization: "Genesis",
      date: "Nov 2024 - Present",
      role: "Team Member",
      description: "Contributing to technical initiatives and collaborative projects as part of the Genesis team, focusing on innovation and technical excellence.",
      technologies: ["Team Collaboration", "Technical Development", "Project Management", "Innovation", "Problem Solving", "Leadership"],
      icon: genesis,
      iconBg: "#7c3aed"
    }
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Beyond Development</p>
        <h2 className={styles.sectionHeadText}>Extracurricular.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        Beyond coding, I actively contribute to community initiatives through photography, mentoring, and volunteer work, 
        capturing meaningful moments and promoting social impact through various organizations.
      </motion.p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((activity, index) => (
          <ExtracurricularCard
            key={`activity-${index}`}
            index={index}
            {...activity}
          />
        ))}
      </div>

      {/* Floating particles effect */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
    </>
  );
};

export default SectionWrapper(Extracurricular, "extracurricular");