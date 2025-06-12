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
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
      I am a Computer Science student at Dayananda Sagar College of Engineering, Bengaluru, and a multilingual speaker with a strong passion for product development, artificial intelligence, and neural language processing. I am seeking an opportunity at a company that values innovation, collaboration, and continuous learning. With a deep enthusiasm for technology and a drive to build impactful solutions, I am confident in my ability to thrive in any role that aligns with my interests and skills.
      </motion.p>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
