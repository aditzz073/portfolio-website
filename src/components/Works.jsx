import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, externalLink } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link, demo_link, darkIcons }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="flex flex-col gap-2">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className={`${darkIcons ? 'bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30' : 'bg-black bg-opacity-20 backdrop-blur-sm border border-gray-500 border-opacity-30'} w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform`}
              >
                <img 
                  src={github} 
                  alt="source code" 
                  className="w-1/2 h-1/2 object-contain" 
                  style={darkIcons ? {filter: 'invert(1)'} : {}}
                />
              </div>
              {demo_link && (
                <div
                  onClick={() => window.open(demo_link, "_blank")}
                  className={`${darkIcons ? 'bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30' : 'bg-black bg-opacity-20 backdrop-blur-sm border border-gray-500 border-opacity-30'} w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition-all hover:scale-110`}
                >
                  <img 
                    src={externalLink} 
                    alt="demo link" 
                    className="w-1/2 h-1/2 object-contain" 
                    style={darkIcons ? {} : {filter: 'invert(1)'}}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
