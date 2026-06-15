// ============================================================
// data.js — YOUR PORTFOLIO DATA
// Edit this file to update your portfolio content.
// No need to touch HTML or CSS!
// ============================================================

// ── Personal Info ──────────────────────────────────────────
const personalInfo = {
  name: "Yash",
  firstName: "YASH",
  // The second word renders in italic for the brutalist split-title style
  lastName: "",
  tagline: "PORTFOLIO · " + new Date().getFullYear(),
  roles: ["Build", "Learn", "Iterate"],
  shortBio:
    "Drawn to products, data, and the messy process in between. I enjoy uncovering insights, questioning assumptions, and shipping things that solve real problems.",
  location: "India · GMT+5:30",
  resumeLink: "assets/YashGupta_CV.pdf",
  linkedinUrl: "https://www.linkedin.com/in/iamyash011",
  githubUrl: "https://github.com/iamyash011",
  email: "yash4328gupta@gmail.com",
  profilePhoto: "assets/profile.jpg",
};

// ── Projects ───────────────────────────────────────────────
// To add a new project, copy-paste a block and fill it in.
// Each project will render as a card with a grayscale image preview.
//
// {
//   year: "2025",
//   role: "LEAD DEVELOPER",
//   title: "Project Name — Subtitle",
//   description: "Short project description.",
//   tags: ["TAG1", "TAG2", "TAG3"],
//   link: "path/to/project.pdf",
//   image: ""  ← leave empty for a generated placeholder
// },

const projects = [
  {
  year: "2026",
    role: "PRODUCT BUILDER",
    title: "KGP Find",
    description:
      "Built and launched a campus-exclusive lost & found platform for IIT Kharagpur, featuring secure claims, smart matching, and institute-only access.",
    tags: ["PRODUCT", "AI WORKFLOWS", "REACT", "MONGODB"],
  },
  {
    year: "2024",
    role: "ML ENGINEER",
    title: "Stock Price Predictor",
    description:
      "Machine learning model using LSTM networks to predict stock price movements with historical data analysis and visualization.",
    tags: ["PYTHON", "TENSORFLOW", "ML"],
    link: "#",
    image: "",
  },
  {
    year: "2023",
    role: "EMBEDDED SYSTEMS",
    title: "Autonomous Drone Control",
    description:
      "Designed a PID controller for autonomous drone stabilization and waypoint navigation using embedded C and ROS.",
    tags: ["C", "EMBEDDED", "ROS"],
    link: "#",
    image: "",
  },
];

// ── Skills ─────────────────────────────────────────────────
// Each category has a name, index, and a list of capabilities.

const skills = [
  {
    category: "Languages",
    index: "01",
    items: ["Python", "JavaScript", "C/C++", "Java", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks",
    index: "02",
    items: ["React", "Node.js", "Express", "Flask", "TensorFlow", "PyTorch"],
  },
  {
    category: "Tooling",
    index: "03",
    items: ["Git", "Docker", "Linux", "AWS", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Concepts",
    index: "04",
    items: [
      "Machine Learning",
      "Data Structures",
      "System Design",
      "REST APIs",
      "CI/CD",
      "Agile",
    ],
  },
];

// ── Fun Facts (Off the Record) ─────────────────────────────
// Large, informal text statements about you.

const funFacts = [
  "I survive on an unhealthy amount of chai and late-night maggi sessions at hall canteens.",
  "I refuse to use light mode after sunset — dark mode is a lifestyle, not a preference.",
  "If you find a great hackathon, send me the link. I'll bring the energy.",
];

// ── Stats (Off the Record) ─────────────────────────────────
// Big bold numbers with monospace labels underneath.

const stats = [
  { value: "5+", label: "CHAI / DAY" },
  { value: "07", label: "SEMESTERS IN" },
  { value: "20+", label: "PROJECTS BUILT" },
  { value: "∞", label: "SIDE PROJECTS" },
];

// ── Currently (Live Status) ────────────────────────────────
// What you're currently up to — shown in a "live status" bar.

const currently = [
  { icon: "book", label: "READING", value: "Clean Code — Robert C. Martin" },
  { icon: "music", label: "LISTENING", value: "Lo-fi Beats · Bollywood Classics" },
  { icon: "code", label: "BUILDING", value: "This portfolio" },
  { icon: "brain", label: "LEARNING", value: "System Design Fundamentals" },
];
