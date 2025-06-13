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
  embereye,
  payloadmaster,
  threejs,
  trashview,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
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
    title: "AI/ML Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
  {
    title: "Mathwork Ai Virtual Intern",
    company_name: "Mathwork | AICTE",
    icon: mathwork,
    iconBg: "#161329",
    date: "May 2023 - Sep 2023",
    points: [
      "Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.",
      "Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.",
    ],
  },
  {
    title: "Artificial Intelligence Intern",
    company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
    icon: edunet,
    iconBg: "#161329",
    date: "June 2023 - July 2023",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
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
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
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
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
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
    source_code_link: "https://github.com/lohitkolluri/Image_to_Pencil_Sketch_App",
  },
];
