export type SectionId =
  | "introduction"
  | "about"
  | "education"
  | "skills"
  | "projects"
  | "achievements"
  | "certifications"
  | "contact";

export type Section = {
  id: SectionId;
  label: string;
  index: string;
  caption: string;
};

export const SECTIONS: Section[] = [
  { id: "introduction", label: "INTRODUCTION", index: "No. 01", caption: "Profile summary" },
  { id: "about", label: "ABOUT ME", index: "No. 02", caption: "Personal note" },
  { id: "education", label: "EDUCATION", index: "No. 03", caption: "Academic record" },
  { id: "skills", label: "SKILLS", index: "No. 04", caption: "Technical index" },
  { id: "projects", label: "PROJECTS", index: "No. 05", caption: "Selected work" },
  { id: "achievements", label: "ACHIEVEMENTS", index: "No. 06", caption: "Recognitions" },
  { id: "certifications", label: "CERTIFICATIONS", index: "No. 07", caption: "Credentials" },
  { id: "contact", label: "CONTACT / CONNECT", index: "No. 08", caption: "Get in touch" },
];

export const PROFILE = {
  name: "AVNISH SINGH",
  subtitle: "B.Tech CSE | Artificial Intelligence & Machine Learning",
  email: "avnish879507@gmail.com",
  linkedin: "https://www.linkedin.com/in/avnish-singh-353061384/",
  github: "https://github.com/AvnishSingh-R",
  mobile: "9369178707",
  university: "Lovely Professional University",
  cgpa: "7.60",
};

export const ABOUT_PARAGRAPHS = [
  "I am Avnish Singh, a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Lovely Professional University. My work sits at the meeting point of clean engineering and applied intelligence — building software that is useful before it is impressive.",
  "I spend most of my time writing code, reading about model architectures, and turning small ideas into working prototypes. Hackathons taught me to build under pressure; coursework taught me to build with structure. I enjoy both.",
  "Outside of formal study, I explore modern web technologies, experiment with datasets, and document what I learn so it can be reused later.",
];

export const ABOUT_HIGHLIGHTS = [
  "Focus areas: Artificial Intelligence, Machine Learning, Web & Software Development",
  "Comfortable across the stack — from data preparation to deployed interface",
  "Learning approach: build a small version first, then refine it properly",
  "Values: clarity, consistency, curiosity",
];

export const EDUCATION = [
  {
    period: "Aug 2026 — Present",
    title: "Bachelor of Technology — Computer Science & Engineering",
    specialisation: "Specialization: Artificial Intelligence & Machine Learning",
    institution: "Lovely Professional University, Phagwara, Punjab",
    detail: "CGPA: 7.60",
    notes: [
      "Core coursework: Data Structures, DBMS, Operating Systems, Computer Networks",
      "Specialization coursework: Artificial Intelligence, Machine Learning fundamentals",
    ],
  },
  {
    period: "2024",
    title: "Intermediate (Class XII)",
    specialisation: "Percentage: 73",
    institution: "Universal Public School, Deoria, Uttar Pradesh",
    detail: "Senior secondary education",
    notes: ["Built the mathematics and reasoning base for engineering study"],
  },
  {
    period: "2022",
    title: "Matriculation (Class X)",
    specialisation: "Percentage: 82",
    institution: "Universal Public School, Deoria, Uttar Pradesh",
    detail: "Secondary education",
    notes: ["First exposure to computers and programming"],
  },
];

export const SKILL_GROUPS = [
  {
    heading: "Languages",
    items: ["C", "Python", "C++"],
  },
  {
    heading: "Technologies",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    heading: "Databases / Tools",
    items: ["MySQL", "Git", "GitHub"],
  },
  {
    heading: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Time Management", "Adaptability"],
  },
];

export const PROJECTS = [
  {
    title: "Water Quality Index Calculator",
    stack:
      "HTML · CSS · JavaScript · Chart.js · FastAPI / Python · PostgreSQL · SQLAlchemy · CSV Processing · Vercel",
    link: "https://github.com/AvnishSingh-R",
    linkLabel: "View on GitHub",
    summary:
      "A website that analyses water quality using important parameters such as pH, Dissolved Oxygen (DO) and BOD. These values help determine the overall condition of water and provide useful information about its quality through a simple and systematic analysis process.",
    points: [
      "Calculates the Water Quality Index (WQI) by combining different water-quality parameters with assigned weights, producing an overall score that is easy to understand, compare and evaluate across samples",
      "Interactive dashboard where users enter water-quality parameters and view calculated results in an organised format, making assessment faster and easier",
      "Supports CSV file uploads for structured data entry, plus computation-log export for future reference, documentation and further analysis",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Webathon 2.0 — Top 25 of 100 Teams",
    detail:
      "Participated in Webathon 2.0, a university-organised hackathon, and ranked among the top 25 teams out of 100 teams.",
  },
  {
    title: "Code-A-Thone — Top 10 of 70 Teams",
    detail:
      "Participated in Code-A-Thone, a university-organised hackathon, and ranked among the top 10 teams out of 70 teams.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Object Oriented Programming (C++)",
    issuer: "Infosys Springboard",
    date: "Feb 2026",
    detail: "Classes and objects, inheritance, polymorphism and problem solving in C++.",
    url: "https://infyspringboard.onwingspan.com/",
  },
  {
    title: "Introduction to AI",
    issuer: "Infosys Springboard",
    date: "Mar 2026",
    detail: "Foundations of artificial intelligence, core concepts and practical applications.",
    url: "https://infyspringboard.onwingspan.com/",
  },
  {
    title: "Healthy Habits for Healthy Life",
    issuer: "Edutech Hub",
    date: "Oct 2026",
    detail: "Personal effectiveness, routine building and well-being fundamentals.",
    url: "",
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "Sep 2025",
    detail: "Generative AI tooling, prompting workflows and applied use cases.",
    url: "https://www.outskill.com/",
  },
];
