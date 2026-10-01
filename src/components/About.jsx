import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a final-year Information Science undergraduate at Dayananda Sagar College of Engineering who builds and ships production systems. With a strong foundation in backend engineering, scalable APIs, and applied generative AI, I focus on turning complex technical ideas into robust, user-ready products.
      </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.2, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My strongest areas center around full-stack development, distributed backend systems, database architecture, cloud deployment, and pairing deterministic analytics with LLMs and developer tooling.
      </motion.p>

      <motion.div
        variants={fadeIn('up', 'spring', 0.3, 0.75)}
        className="mt-8 flex flex-wrap gap-4"
      >
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl px-5 py-3 hover:border-violet-500/50 transition-all">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Education</p>
          <p className="text-white font-semibold text-sm mt-0.5">B.E. in Information Science &amp; Engineering</p>
          <p className="text-violet-400 text-xs mt-0.5">Dayananda Sagar College of Engineering • Expected 2027 • CGPA: 9.0</p>
        </div>
        <div className="bg-[#1a1a2e] border border-gray-800 rounded-xl px-5 py-3 hover:border-violet-500/50 transition-all">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Focus Areas</p>
          <p className="text-white font-semibold text-sm mt-0.5">Full-Stack &amp; Applied AI Systems</p>
          <p className="text-blue-400 text-xs mt-0.5">Backend APIs • Cloud Architecture • Intelligent Agents</p>
        </div>
      </motion.div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
