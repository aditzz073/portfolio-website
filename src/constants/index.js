import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  flask,
  edunet,
  freesip,
  freesiplogo,
  embereye,
  kisansetu,
  threejs,
  trashview,
  sketcher,
  CompileVortex,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "extracurricular",
    title: "Extracurricular",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "Flask", icon: flask },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
];

export const experiences = [
  {
    title: "Web Development Intern",
    company_name: "FreeSip India",
    icon: freesiplogo,
    iconBg: "#161329",
    date: "Jan 2025 - May 2025",
    points: [
      "Completed web development internship at FreeSip, gaining a strong foundation in React ecosystem, including component architecture and state management.",
      "Acquired practical skills in modern web technologies, including Vite bundling, Framer Motion animations, and responsive design implementation.",
      "Developed expertise in full-stack development workflows for B2B marketing platforms, and customized user experience techniques for interactive promotional websites.",
    ],
  },
  // {
  //   title: "Mathwork Ai Virtual Intern",
  //   company_name: "Mathwork | AICTE",
  //   icon: mathwork,
  //   iconBg: "#161329",
  //   date: "May 2023 - Sep 2023",
  //   points: [
  //     "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
  //     "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
  //     "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
  //   ],
  // },
  // {
  //   title: "Artificial Intelligence Intern",
  //   company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
  //   icon: edunet,
  //   iconBg: "#161329",
  //   date: "June 2023 - July 2023",
  //   points: [
  //     "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
  //     "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
  //     "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
  //   ],
  // },
];

export const projects = [
  {
    name: "FreeSip Website",
    description:
      "A modern React-based website for FreeSip, an innovative B2B event marketing solution using branded water bottles as promotional media.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "Node", color: "green-text-gradient" },
      { name: "React+Vite", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: freesip,
    source_code_link: "https://github.com/aditzz073/FreeSip",
    demo_link: "https://www.freesipindia.xyz/",
  },
  {
    name: "EmberEye: AI-Powered Wildfire Risk Prediction",
    description:
      "It predicts and visualizes wildfire risks based on environmental factors and real-time weather data.",
    tags: [
      { name: "Tensorflow", color: "blue-text-gradient" },
      { name: "CNN", color: "green-text-gradient" },
      { name: "Fast-API", color: "pink-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: embereye,
    source_code_link: "https://github.com/aditzz073/ember-eye",
    demo_link: "https://embereye-three.vercel.app/",
  },
  {
    name: "Trash View On Maps",
    description:
      "An interactive game where players explore random street view locations from top Indian cities and identify whether they see trash.",
    tags: [
      { name: "Google Maps API", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Google Street View API", color: "pink-text-gradient" },
    ],
    image: trashview,
    source_code_link:
      "https://github.com/aditzz073/Trash-view-on-maps",
    demo_link: "https://trash-view-on-maps.vercel.app/",
  },
  {
    name: "Kisansetu",
    description:
      "A platform designed to facilitate assured contract farming agreements between farmers and buyers.",
    tags: [
      { name: "Firebase", color: "blue-text-gradient" },
      { name: "Solidity", color: "green-text-gradient" },
      { name: "Metamask", color: "pink-text-gradient" },
      { name: "Zetachain", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
    ],
    image: kisansetu,
    source_code_link: "https://github.com/slashexx/kisansetu",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/aditzz073/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/aditzz073/Image_to_Pencil_Sketch_App",
  },
];
