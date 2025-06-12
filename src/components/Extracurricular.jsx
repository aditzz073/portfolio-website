import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { iskcon, mudita } from "../assets";

const ExtracurricularCard = ({ index, title, organization, date, role, description, technologies, icon, iconBg }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="bg-tertiary p-6 rounded-2xl border border-gray-800/30 hover:border-violet-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-violet-500/10"
    >
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Icon/Logo */}
        <div className="flex-shrink-0">
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center border border-gray-700/50"
            style={{ backgroundColor: iconBg || '#1a1a2e' }}
          >
            {icon ? (
              <img
                src={icon}
                alt={organization}
                className="w-10 h-10 object-contain"
              />
            ) : (
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {organization.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
            <div className="flex-1">
              <h3 className="text-white text-xl font-bold mb-1 group-hover:text-violet-400 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-blue-400 text-base font-medium hover:text-blue-300 transition-colors cursor-pointer">
                {organization}
              </p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm font-medium mb-1">
                {date}
              </p>
              {role && (
                <span className="inline-block px-3 py-1 bg-violet-600/20 text-violet-300 text-xs font-medium rounded-full border border-violet-500/30">
                  {role}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {description}
          </p>

          {/* Technology Tags */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={`tech-${i}`}
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full border border-gray-700/50 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Extracurricular = () => {
  // Volunteering and community service activities
  const activities = [
    {
      title: "Associate Photo Editor",
      organization: "ISKCON, Bangalore",
      date: "Jul 2023 - Present",
      role: "Volunteer",
      description: "As a volunteer photographer at ISKCON Bangalore, I capture the essence of temple festivals and events, ensuring each moment reflects the spiritual vibrancy of the celebrations. Through this role, I've refined my photography skills while contributing to the community's visual storytelling.",
      technologies: ["Photography", "Photo Editing", "Event Coverage", "Adobe Photoshop", "Lightroom", "Community Service"],
      icon: iskcon,
      iconBg: "#2563eb"
    },
    {
      title: "Team Lead",
      organization: "Mudita",
      date: "Nov 2023 - Present",
      role: "Volunteer",
      description: "I'm an event photographer capturing the heart of Team Mudita's community projects. From events like Valuable Vintage to Pawsitivity, I aim to spread smiles and promote basic ethics through my lens.",
      technologies: ["Event Photography", "Community Projects", "Social Impact", "Visual Storytelling", "Adobe Creative Suite"],
      icon: mudita,
      iconBg: "#d97706"
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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My journey includes contributions to open source projects, professional internships, 
        and collaborative development experiences that have shaped my technical expertise 
        and professional growth.
      </motion.p>

      <div className="mt-20 space-y-6">
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