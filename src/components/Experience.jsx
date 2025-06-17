import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="relative mb-6"
  >
    {/* Timeline line - only show if not the last item */}
    {index < experiences.length - 1 && (
      <div className="absolute left-5 top-12 w-0.5 h-full bg-gradient-to-b from-[#915EFF]/60 to-transparent z-0"></div>
    )}
    
    {/* Timeline circle - smaller and more subtle */}
    <div className="absolute left-3.5 top-6 w-3 h-3 rounded-full bg-[#915EFF] z-10 shadow-sm"></div>
    
    {/* Experience card - glass effect */}
    <div className="ml-12 bg-white/5 backdrop-blur-md rounded-[12px] p-5 border border-white/10 hover:border-[#915EFF]/30 transition-all duration-300 hover:shadow-md hover:shadow-[#915EFF]/10 hover:bg-white/8">
      
      {/* Header - more compact */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div 
            className="w-12 h-12 rounded-[8px] flex items-center justify-center shadow-sm"
            style={{ backgroundColor: experience.iconBg }}
          >
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-7 h-7 object-contain"
            />
          </div>
          <div>
            <h3 className="text-[#4FC3F7] text-[18px] font-semibold mb-1">
              {experience.title}
            </h3>
            <p className="text-[#915EFF] text-[14px] font-medium">
              {experience.company_name}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-white text-[13px] font-medium bg-[#232631]/40 px-3 py-1 rounded-[6px]">
            {experience.date}
          </p>
          {experience.role && (
            <p className="text-secondary text-[11px] italic mt-1">
              {experience.role}
            </p>
          )}
        </div>
      </div>

      {/* Description - more compact */}
      {experience.description && (
        <div className="mb-4">
          <p className="text-white-100 text-[14px] leading-[22px] text-justify">
            {experience.description}
          </p>
        </div>
      )}

      {/* Points */}
      {experience.points && experience.points.length > 0 && (
        <ul className="mt-3 mb-4 space-y-2">
          {experience.points.map((point, pointIndex) => (
            <li
              key={`experience-point-${pointIndex}`}
              className="text-white-100 text-[13px] leading-[20px] flex items-start"
            >
              <span className="text-[#915EFF] mr-2 mt-1 text-[8px]">▶</span>
              {point}
            </li>
          ))}
        </ul>
      )}

      {/* Tags - smaller and more subtle */}
      {experience.tags && experience.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.tags.map((tag, tagIndex) => (
            <span
              key={`${experience.title}-tag-${tagIndex}`}
              className="bg-[#232631]/60 text-white/90 px-2.5 py-1 rounded-[6px] text-[11px] font-medium border border-[#915EFF]/20 hover:border-[#915EFF]/40 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const Experience = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        What I have done so far
      </p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
    </motion.div>

    <div className="mt-16 relative max-w-4xl mx-auto px-4">
      {experiences.map((experience, index) => (
        <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Experience, "work");
