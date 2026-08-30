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
    period: "2023 — 2027",
    title: "B.Tech, Computer Science & Engineering",
    specialisation: "Specialization: Artificial Intelligence & Machine Learning",
    institution: "Lovely Professional University, Punjab",
    detail: "CGPA: 7.60",
    notes: [
      "Core coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks",
      "Specialization coursework: Machine Learning, Deep Learning, Data Science foundations",
    ],
  },
  {
    period: "Completed",
    title: "Senior Secondary (Class XII)",
    specialisation: "Science stream — Physics, Chemistry, Mathematics",
    institution: "CBSE",
    detail: "Foundation in mathematics and analytical reasoning",
    notes: ["Early interest in programming and computer fundamentals"],
  },
];

export const SKILL_GROUPS = [
  {
    heading: "Programming Languages",
    items: ["Python", "C / C++", "Java", "JavaScript", "SQL"],
  },
  {
    heading: "AI / Machine Learning",
    items: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow basics", "Data preprocessing", "Model evaluation"],
  },
  {
    heading: "Web Development",
    items: ["HTML5", "CSS3", "React", "Tailwind CSS", "Node.js basics", "REST APIs"],
  },
  {
    heading: "Tools & Platforms",
    items: ["Git & GitHub", "VS Code", "Jupyter Notebook", "Google Colab", "Figma basics"],
  },
  {
    heading: "Core Concepts",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Problem Solving"],
  },
];

export const PROJECTS = [
  {
    title: "Machine Learning Prediction System",
    stack: "Python · Scikit-learn · Pandas · Matplotlib",
    summary:
      "A supervised learning pipeline that cleans raw tabular data, engineers features, trains multiple candidate models and reports comparative accuracy metrics.",
    points: [
      "End-to-end pipeline from raw dataset to evaluated model",
      "Model comparison with accuracy, precision and recall reporting",
      "Reusable preprocessing utilities for future experiments",
    ],
  },
  {
    title: "Responsive Web Application",
    stack: "React · Tailwind CSS · REST API",
    summary:
      "A component-driven front-end application with clean state handling, accessible forms and a fully responsive layout across devices.",
    points: [
      "Reusable component library and consistent design tokens",
      "Form validation with clear user feedback",
      "Optimised rendering and mobile-first layout",
    ],
  },
  {
    title: "Data Analysis & Visualisation Study",
    stack: "Python · Pandas · Seaborn · Jupyter",
    summary:
      "An exploratory analysis notebook that turns a raw dataset into readable insight through statistical summaries and clear visual storytelling.",
    points: [
      "Data cleaning, outlier handling and correlation study",
      "Chart set designed for non-technical readers",
      "Documented findings and conclusions",
    ],
  },
  {
    title: "Academic Utility Tool",
    stack: "Java / Python · SQL",
    summary:
      "A small practical tool built to solve a real day-to-day academic problem, with persistent storage and a simple, predictable interface.",
    points: [
      "CRUD operations backed by a relational schema",
      "Input validation and error handling",
      "Built during coursework and iterated after feedback",
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Hackathon Participation",
    detail:
      "Took part in inter-college and university-level hackathons, building working prototypes within strict time limits as part of a small team.",
  },
  {
    title: "Consistent Academic Standing",
    detail: "Maintaining a CGPA of 7.60 in B.Tech CSE (AI & ML) at Lovely Professional University.",
  },
  {
    title: "Coding Practice Milestones",
    detail:
      "Regular problem solving across data structures and algorithms platforms, with steady improvement in contest performance.",
  },
  {
    title: "Technical Events & Workshops",
    detail:
      "Attended and contributed to university technical sessions on artificial intelligence, machine learning and modern web development.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Machine Learning Foundations",
    issuer: "Online learning platform",
    detail: "Supervised and unsupervised learning, model evaluation, practical assignments.",
  },
  {
    title: "Python Programming",
    issuer: "Online learning platform",
    detail: "Core language, data handling with NumPy and Pandas, scripting practice.",
  },
  {
    title: "Web Development Essentials",
    issuer: "Online learning platform",
    detail: "HTML, CSS, JavaScript and responsive front-end development.",
  },
  {
    title: "Database Management Systems",
    issuer: "University coursework certification",
    detail: "Relational design, normalisation and SQL querying.",
  },
];
