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
  mysql,
  freesip,
  freesiplogo,
  embereye,
  kisansetu,
  threejs,
  trashview,
  spaceinvaders,
  scopuz,
  decisioncopilot,
  facultyappraisal,
  mudita,
  genesis,
  iskcon,
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
  { name: "MySQL", icon: mysql },
  { name: "Flask", icon: flask },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
];

// Comprehensive technical skills grouped by domain as per latest resume
export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "C / C++", iconKey: "cpp" },
      { name: "Python", iconKey: "python" },
      { name: "JavaScript", iconKey: "javascript" },
      { name: "TypeScript", iconKey: "typescript" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "FastAPI", iconKey: "fastapi" },
      { name: "Node.js", iconKey: "nodejs" },
      { name: "Express", iconKey: "express" },
      { name: "Flask", iconKey: "flask" },
      { name: "REST APIs", iconKey: "api" },
      { name: "Microservices", iconKey: "microservices" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", iconKey: "reactjs" },
      { name: "Next.js", iconKey: "nextjs" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "Vite", iconKey: "vite" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", iconKey: "postgresql" },
      { name: "SQL", iconKey: "mysql" },
      { name: "MongoDB", iconKey: "mongodb" },
      { name: "Redis", iconKey: "redis" },
    ],
  },
  {
    category: "AI / Data",
    skills: [
      { name: "Gemini API", iconKey: "gemini" },
      { name: "ChromaDB", iconKey: "chromadb" },
      { name: "Pandas", iconKey: "pandas" },
      { name: "TensorFlow", iconKey: "tensorflow" },
    ],
  },
  {
    category: "Cloud & Infra",
    skills: [
      { name: "AWS", iconKey: "aws" },
      { name: "Docker", iconKey: "docker" },
      { name: "Linux CLI", iconKey: "linux" },
      { name: "Vercel", iconKey: "vercel" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", iconKey: "git" },
      { name: "GitHub Actions", iconKey: "githubactions" },
      { name: "Playwright", iconKey: "playwright" },
      { name: "Postman", iconKey: "postman" },
      { name: "N8N", iconKey: "n8n" },
      { name: "Stripe", iconKey: "stripe" },
      { name: "Razorpay", iconKey: "razorpay" },
    ],
  },
];

export const experiences = [
  {
    title: "Core Engineer — AI Search Optimization",
    company_name: "Scopuz",
    icon: scopuz,
    iconBg: "#1f1b2e",
    date: "2024 - Present",
    role: "Primary Project & Platform",
    points: [
      "Built an AI search optimization platform that audits websites across 20+ AEO/GEO signals, generating deterministic visibility scores and actionable recommendations.",
      "Engineered a hybrid crawling pipeline using Playwright and HTTP requests to analyze metadata, structured content, schema, citations, indexability, trust signals, and technical accessibility.",
      "Developed historical intelligence to track new issues, resolved issues, regressions, and changes across recurring website audits through dashboard-based reporting.",
      "Deployed the FastAPI backend on AWS EC2 using Docker, Nginx, HTTPS, and CI/CD, integrating MongoDB, OAuth authentication, and webhook-driven Stripe/Razorpay subscriptions."
    ],
    tags: ["FastAPI", "React", "Python", "Playwright", "MongoDB", "AWS", "Docker", "Stripe", "Razorpay"],
  },
  {
    title: "Web Development Intern",
    company_name: "FreeSip India",
    icon: freesiplogo,
    iconBg: "#87CEEB",
    date: "Jan 2025 - May 2025",
    role: "Intern: Onsite",
    points: [
      "Completed web development internship at FreeSip, focusing on B2B marketing platforms and building responsive UIs using React, Vite, and Tailwind CSS.",
      "Implemented component-based architecture with effective state management and integrated Framer Motion for smooth UI animations and transitions.",
      "Gained experience in full-stack workflows, interactive user experience design, and customized promotional website features for enhanced user engagement."
    ],
    tags: ["React", "JavaScript", "Vite", "Tailwind CSS", "Framer Motion"],
  },
];

export const projects = [
  {
    name: "Scopuz — AI Search Optimization",
    description:
      "Built an AI search optimization platform that audits websites across 20+ AEO/GEO signals, generating deterministic visibility scores and actionable recommendations with hybrid crawling and historical intelligence.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
      { name: "Playwright", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
    ],
    image: scopuz,
    source_code_link: "https://github.com/aditzz073",
    demo_link: "https://scopuz.com/",
  },
  {
    name: "Enterprise AI Decision Copilot",
    description:
      "An AI-powered decision copilot combining deterministic numerical analysis via Pandas with grounded business insights via Gemini and ChromaDB, featuring verification against source data to eliminate hallucinated statistics.",
    tags: [
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Gemini API", color: "green-text-gradient" },
      { name: "ChromaDB", color: "pink-text-gradient" },
      { name: "Pandas", color: "blue-text-gradient" },
      { name: "Streamlit", color: "green-text-gradient" },
    ],
    image: decisioncopilot,
    source_code_link: "https://github.com/aditzz073",
  },
  {
    name: "Faculty Performance Management System",
    label: "Department Project — Deployed at DSCE",
    description:
      "Role-based faculty performance management and appraisal system deployed at DSCE supporting Faculty, HOD, External Auditor, Principal, and Admin workflows with automated evaluations and PDF generation.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Express", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "JWT", color: "green-text-gradient" },
      { name: "REST APIs", color: "pink-text-gradient" },
    ],
    image: facultyappraisal,
    source_code_link: "https://github.com/aditzz073",
  },
  {
    name: "EmberEye: Wildfire Risk Prediction",
    description:
      "An intelligent web application that predicts wildfire risk in real time using AI and weather data, featuring a CNN deep learning model, 5-tier risk classification, and interactive threat mapping.",
    tags: [
      { name: "TensorFlow", color: "blue-text-gradient" },
      { name: "FastAPI", color: "green-text-gradient" },
      { name: "CNN", color: "pink-text-gradient" },
      { name: "React", color: "blue-text-gradient" },
      { name: "OpenWeatherMap", color: "pink-text-gradient" },
    ],
    image: embereye,
    source_code_link: "https://github.com/aditzz073/ember-eye",
    demo_link: "https://embereye-three.vercel.app/",
  },
  {
    name: "Trash Detection Game",
    description:
      "An interactive environmental awareness platform gamifying urban cleanliness education by challenging users to spot trash in Google Street View locations across India's top 10 cities with 10-round scoring.",
    tags: [
      { name: "Google Maps API", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Street View", color: "pink-text-gradient" },
      { name: "Gamification", color: "blue-text-gradient" },
    ],
    image: trashview,
    source_code_link: "https://github.com/aditzz073/Trash-view-on-maps",
    demo_link: "https://trash-view-on-maps.vercel.app/",
  },
  {
    name: "FreeSip Website",
    description:
      "A modern React-based website for FreeSip, an innovative B2B event marketing solution utilizing branded water bottles as promotional media.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Vite", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "pink-text-gradient" },
      { name: "Framer Motion", color: "blue-text-gradient" },
    ],
    image: freesip,
    source_code_link: "https://github.com/aditzz073/FreeSip",
    demo_link: "https://www.freesipindia.xyz/",
  },
  {
    name: "Kisansetu",
    description:
      "A platform designed to facilitate assured contract farming agreements between farmers and buyers with transparent, verified contract workflows.",
    tags: [
      { name: "Solidity", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" },
      { name: "Docker", color: "pink-text-gradient" },
    ],
    image: kisansetu,
    source_code_link: "https://github.com/slashexx/kisansetu",
  },
];

// Extracurricular, Leadership, Achievements, Certifications & Learning
export const leadershipActivities = [
  {
    title: "Team Head",
    organization: "Mudita, DSI",
    date: "Nov 2023 - Present",
    role: "Leadership & Community",
    description:
      "Led community initiatives by coordinating team activities, managing outreach efforts, and supporting project execution through content, social media, and event photography.",
    technologies: ["Community Leadership", "Event Photography", "Outreach", "Social Impact"],
    icon: mudita,
    iconBg: "#d97706",
  },
  {
    title: "Technical Team Head / Member",
    organization: "Genesis, ISE",
    date: "Nov 2024 - Present",
    role: "Technical Coordination",
    description:
      "Contributed to planning and execution of technical events including Hackman (24-hour hackathon) and Catalysis while collaborating with teams to ensure smooth coordination.",
    technologies: ["Hackathon Organizing", "Technical Coordination", "Event Management", "Team Collaboration"],
    icon: genesis,
    iconBg: "#7c3aed",
  },
  {
    title: "Associate Photographer & Editor",
    organization: "ISKCON, Bangalore",
    date: "Jul 2023 - May 2026",
    role: "Past Volunteer Role",
    description:
      "Served in a past volunteer photography and editorial capacity, capturing temple festivals and events while refining visual storytelling and photo editing workflows.",
    technologies: ["Photography", "Photo Editing", "Event Coverage", "Lightroom"],
    icon: iskcon,
    iconBg: "#2563eb",
  },
];

export const eventsData = [
  {
    title: "Google I/O Connect India 2026",
    organization: "Google Developer Event",
    location: "Bengaluru",
    date: "2026",
    type: "Event & Learning Experience",
    description:
      "Attended Google I/O Connect India 2026 in Bengaluru. Explored cutting-edge developer tooling, architecture, and live demos across Gemini, Gemma, Agentic Web, WebMCP, Model Context Protocol (MCP), Chrome DevTools, Modern Web Guidance, ADK, Flutter, Firebase, and Cloud AI.",
    tags: ["Gemini", "Gemma", "Agentic Web", "WebMCP", "MCP", "Chrome DevTools", "ADK", "Flutter", "Firebase"],
  },
];

export const achievementsData = [
  {
    title: "Code of Honour 2.0",
    subtitle: "30-Hour Hackathon",
    organization: "Shunya, The Mathematics Club of PES University (in collaboration with Samarpana India)",
    award: "Secured 4th Place",
    highlight: true,
    description:
      "Secured 4th place in an intensive 30-hour hackathon, designing and pitching an end-to-end technical system within tight constraints.",
  },
  {
    title: "AGMTA Mathematics Quiz",
    subtitle: "Mathematics Competition",
    organization: "AGMTA",
    award: "Winner",
    highlight: false,
    description:
      "Secured 1st place in the competitive mathematics quiz testing quantitative problem-solving and algorithmic logic.",
  },
  {
    title: "State-Level Gold in Athletics",
    subtitle: "Athletics Championship",
    organization: "State Championship",
    award: "Gold Medal",
    highlight: false,
    description:
      "Awarded State-Level Gold Medal for athletic performance in competitive track and field.",
  },
  {
    title: "State-Level Gold in Football",
    subtitle: "State Sports Championship",
    organization: "State Championship",
    award: "Gold Medal",
    highlight: false,
    description:
      "Won State-Level Gold Medal representing football tournament champions.",
  },
  {
    title: "State-Level Gold in Rope Skipping",
    subtitle: "Agility Championship",
    organization: "State Championship",
    award: "Gold Medal",
    highlight: false,
    description:
      "Achieved State-Level Gold Medal in competitive sports rope skipping agility.",
  },
];

export const certificationsData = [
  {
    title: "Agents and Workflows",
    issuer: "OpenAI",
    date: "Jul 2026",
    priority: "high",
    skills: ["AI Agents", "Agentic Workflows", "LLM Orchestration"],
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud Skills Boost",
    date: "Jul 2026",
    priority: "high",
    skills: ["Generative AI", "Google Cloud", "Foundation Models"],
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud Skills Boost",
    date: "Jul 2026",
    priority: "high",
    skills: ["LLM Architecture", "Prompting", "Model Tuning"],
  },
  {
    title: "GEN AI Certification",
    issuer: "AlgoUniversity",
    date: "Jul 2026",
    priority: "high",
    skills: ["Applied Gen AI", "Full-Stack AI", "Inference Pipelines"],
  },
  {
    title: "Generative AI vs. Traditional AI",
    issuer: "LinkedIn Learning",
    date: "Jun 2024",
    priority: "standard",
    skills: ["AI Paradigms", "Machine Learning"],
  },
  {
    title: "Ethics in the Age of Generative AI",
    issuer: "LinkedIn Learning",
    date: "Apr 2024",
    priority: "standard",
    skills: ["AI Ethics", "Responsible AI"],
  },
  {
    title: "Introduction to Prompt Engineering for Generative AI",
    issuer: "LinkedIn Learning",
    date: "Apr 2024",
    priority: "standard",
    skills: ["Prompt Engineering", "Context Design"],
  },
];
