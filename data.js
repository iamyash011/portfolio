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
      "Built a campus-exclusive lost & found platform that replaces scattered WhatsApp posts with a secure, privacy-first system for reconnecting students with their belongings.",
    tags: ["PRODUCT", "AI WORKFLOWS", "REACT", "POSTGRES SQL"],
    link: "https://kgpfind.vercel.app/",
    image: "assets/kgpfind.png",
  },
  {
  year: "2026",
    role: "STRATEGY & INSIGHTS",
    title: "HUL Case Study",
    description:
      "Developed a data-backed growth strategy addressing quick commerce, rural expansion, and sustainability challenges across a large-scale FMCG ecosystem.",
    tags: ["STRATEGY", "MARKET RESEARCH", "ANALYTICS"],
    link: "assets/HUL_Analysis.pdf",
    image: "assets/hul.jpg",
  },
  {
    year: "2025",
    role: "BUSINESS STRATEGY",
    title: "Ather Energy Recommendation",
    description:
      "Leveraging data, user behavior, and market insights to uncover opportunities for product and business growth.",
    tags: ["BUSINESS STRATEGY", "BUSINESS ANALYSIS", "DATA ANALYSIS"],
    link: "assets/Ather_analysis.pdf",
    image: "assets/ather.jpg",
  },
  {
    year: "2025",
    role: "PRODUCT MANAGER",
    title: "ERP Optimisation Framework",
    description:
      "Exploring how AI can transform procurement through predictive insights, supplier intelligence, and autonomous workflows.",
    tags: ["PROCUREMENT", "AUTOMATION", "DECISION INTELLIGENCE"],
    link: "assets/ERP_optimisation.pdf",
    image: "assets/erp.jpg",
  },
];

// ── Skills ─────────────────────────────────────────────────
// Each category has a name, index, and a list of capabilities.

const skills = [
  {
    category: "Languages",
    index: "01",
    items: ["Python", "Java", "C/C++", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    index: "02",
    items: ["React", "Node.js", "FastAPI", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    category: "Tools & Platforms",
    index: "03",
    items: [
      "Git/GitHub",
      "Power BI",
      "Google Analytics",
      "Microsoft Clarity",
      "Postman",
      "Figma",
    ],
  },
  {
    category: "Product & Analytics",
    index: "04",
    items: [
      "Product Analytics",
      "KPI Tracking",
      "Funnel Analysis",
      "Market Research",
      "Business Analysis",
      "Data Visualization",
    ],
  },
];

// ── Fun Facts (Off the Record) ─────────────────────────────
// Large, informal text statements about you.

const funFacts = [
  "Most of my best memories started with an unplanned decision.",
  "Cinema is my favorite form of storytelling and probably my most time-consuming hobby.",
  "Still convinced that some of life's best lessons came from a pirate anime."
];

// ── Stats (Off the Record) ─────────────────────────────────
// Big bold numbers with monospace labels underneath.

const stats = [
  { value: "15+", label: "PROJECTS SHIPPED" },
  { value: "05", label: "COUNTRIES VISITED" },
  { value: "04", label: "SEMESTERS IN" },
  { value: "1000+", label: "HOURS OF ONE PIECE" },
];

// ── Currently (Live Status) ────────────────────────────────
// What you're currently up to — shown in a "live status" bar.

const currently = [
  { icon: "book", label: "READING", value: "Inspired by Marty Cagan" },
  { icon: "music", label: "LISTENING", value: "Lo-fi Beats · Bollywood Classics" },
  { icon: "code", label: "BUILDING", value: "This portfolio" },
  { icon: "brain", label: "LEARNING", value: "System Design Fundamentals" },
];
