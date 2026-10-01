import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
  leadershipActivities,
  eventsData,
  achievementsData,
  certificationsData,
} from "../constants";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCertificate,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCamera,
} from "react-icons/fa";

const ExtracurricularCard = ({
  index,
  title,
  organization,
  date,
  role,
  description,
  technologies,
  icon,
  iconBg,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="bg-tertiary p-5 rounded-xl border border-gray-800/40 hover:border-violet-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-violet-500/10 h-full flex flex-col justify-between"
    >
      <div>
        {/* Header with icon and info */}
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center border border-gray-700/50 overflow-hidden"
              style={{ backgroundColor: iconBg || "#1a1a2e" }}
            >
              {icon ? (
                <img
                  src={icon}
                  alt={organization}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {organization.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-white text-lg font-bold mb-0.5 group-hover:text-violet-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-blue-400 text-sm font-medium">
              {organization}
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-gray-400 text-xs font-medium flex items-center gap-1">
                <FaCalendarAlt size={11} className="text-gray-500" /> {date}
              </span>
              {role && (
                <span className="inline-block px-2 py-0.5 bg-violet-600/20 text-violet-300 text-[11px] font-medium rounded-full border border-violet-500/30">
                  {role}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Technology / Skill Tags */}
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-2">
          {technologies.map((tech, i) => (
            <span
              key={`tech-${i}`}
              className="px-2.5 py-1 bg-[#1a1a2e] text-gray-300 text-xs font-medium rounded-full border border-gray-700/50 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const Extracurricular = () => {
  const [activeTab, setActiveTab] = useState("Leadership");

  const tabs = [
    { id: "Leadership", label: "Leadership & Community" },
    { id: "Achievements", label: "Achievements & Hackathons" },
    { id: "Certifications", label: "Certifications" },
    { id: "Creative", label: "Photography & Beyond" },
  ];

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Beyond Development</p>
        <h2 className={styles.sectionHeadText}>Extracurricular &amp; Honors.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        Balancing engineering rigor with community leadership, hackathons, continuous learning, and visual storytelling.
      </motion.p>

      {/* Sub-navigation tabs */}
      <div className="mt-8 flex flex-wrap gap-2.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30 scale-105"
                : "bg-[#1a1a2e] text-gray-300 border border-gray-800 hover:border-violet-500/50 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content Display */}
      <div className="mt-10 min-h-[300px]">
        <AnimatePresence mode="wait">
          {activeTab === "Leadership" && (
            <motion.div
              key="leadership-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Leadership cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {leadershipActivities.map((activity, index) => (
                  <ExtracurricularCard
                    key={`leadership-${index}`}
                    index={index}
                    {...activity}
                  />
                ))}
              </div>

              {/* Event / Learning Experience — Google I/O Connect */}
              <div className="mt-8">
                <h3 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  Events &amp; Industry Learning
                </h3>
                {eventsData.map((ev, i) => (
                  <div
                    key={`event-${i}`}
                    className="bg-tertiary p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div>
                        <h4 className="text-white font-bold text-base sm:text-lg">
                          {ev.title}
                        </h4>
                        <p className="text-cyan-400 text-xs sm:text-sm font-medium flex items-center gap-2 mt-0.5">
                          <span>{ev.organization}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <FaMapMarkerAlt size={10} /> {ev.location}
                          </span>
                        </p>
                      </div>
                      <span className="self-start sm:self-auto px-3 py-1 bg-cyan-500/10 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/30">
                        {ev.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-3">
                      {ev.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                      {ev.tags.map((t, idx) => (
                        <span
                          key={`ev-tag-${idx}`}
                          className="px-2 py-0.5 bg-[#1a1a2e] text-cyan-300/80 text-xs rounded-full border border-cyan-500/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "Achievements" && (
            <motion.div
              key="achievements-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {achievementsData.map((ach, index) => (
                <div
                  key={`achievement-${index}`}
                  className={`p-5 rounded-xl transition-all duration-300 flex flex-col justify-between ${
                    ach.highlight
                      ? "bg-gradient-to-br from-[#1a1a2e] via-[#20183b] to-[#16213e] border-2 border-violet-500/80 shadow-lg shadow-violet-500/20 md:col-span-2 lg:col-span-2"
                      : "bg-tertiary border border-gray-800/40 hover:border-violet-500/40"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            ach.highlight
                              ? "bg-violet-600/30 text-violet-300 border border-violet-500/50"
                              : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          }`}
                        >
                          {ach.highlight ? <FaTrophy size={18} /> : <FaMedal size={18} />}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-base sm:text-lg">
                            {ach.title}
                          </h4>
                          <p className="text-secondary text-xs">{ach.subtitle}</p>
                        </div>
                      </div>
                      <span
                        className={`px-2.5 py-1 text-xs font-semibold rounded-full flex-shrink-0 ${
                          ach.highlight
                            ? "bg-violet-500 text-white shadow-md shadow-violet-500/40"
                            : "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                        }`}
                      >
                        {ach.award}
                      </span>
                    </div>

                    <p className="text-blue-400 text-xs font-medium mt-1">
                      {ach.organization}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2.5">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "Certifications" && (
            <motion.div
              key="certifications-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg mb-3 flex items-center gap-2">
                  <FaCertificate className="text-violet-400" />
                  Featured &amp; Technical Credentials
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {certificationsData
                    .filter((c) => c.priority === "high")
                    .map((cert, index) => (
                      <div
                        key={`cert-high-${index}`}
                        className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-4 rounded-xl border border-violet-500/30 hover:border-violet-500 transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          <span className="text-[10px] font-bold text-violet-400 uppercase tracking-wider">
                            Verified Certification
                          </span>
                          <h4 className="text-white font-bold text-sm sm:text-base mt-1 leading-snug">
                            {cert.title}
                          </h4>
                          <p className="text-blue-400 text-xs font-medium mt-1">
                            {cert.issuer}
                          </p>
                          <p className="text-gray-400 text-[11px] mt-0.5">{cert.date}</p>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-gray-800">
                          {cert.skills.map((s, idx) => (
                            <span
                              key={`cert-s-${idx}`}
                              className="px-2 py-0.5 bg-black/40 text-gray-300 text-[10px] rounded-full"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h3 className="text-gray-300 font-semibold text-sm mb-3">
                  Foundational &amp; AI Principles Credentials
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {certificationsData
                    .filter((c) => c.priority !== "high")
                    .map((cert, index) => (
                      <div
                        key={`cert-std-${index}`}
                        className="bg-tertiary/70 p-3.5 rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
                      >
                        <h4 className="text-white font-medium text-xs sm:text-sm">
                          {cert.title}
                        </h4>
                        <p className="text-secondary text-[11px] mt-1">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "Creative" && (
            <motion.div
              key="creative-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-tertiary p-6 sm:p-8 rounded-2xl border border-gray-800/60 max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <FaCamera size={22} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">
                    Beyond Code — Visual Storytelling
                  </h3>
                  <p className="text-secondary text-sm">
                    Framing perspectives through the camera lens
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Photography complements my engineering approach — cultivating visual composition, meticulous attention to detail, and patience. From volunteer event coverage with Mudita and editorial work at ISKCON to street and architectural photography, framing moments remains a core creative outlet.
              </p>

              {/* Photography Profile Link */}
              <div className="mt-6 pt-6 border-t border-gray-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="text-white text-sm font-medium">
                    Explore curated photography work on 500px:
                  </p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    Portraits, urban scenes, and community moments
                  </p>
                </div>
                <a
                  href="https://500px.com/p/adityaaa073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold text-sm rounded-xl transition-all duration-300 shadow-md shadow-violet-600/20 hover:scale-105"
                >
                  <FaCamera size={14} />
                  <span>View 500px Profile (adityaaa073)</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating particles effect */}
      <div className="relative mt-8">
        <div className="absolute top-0 right-10 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-5 left-10 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      </div>
    </>
  );
};

export default SectionWrapper(Extracurricular, "extracurricular");