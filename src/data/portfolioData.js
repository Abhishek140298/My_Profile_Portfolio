export const personalInfo = {
  name: "Abhishek Yadav",
  title: "Frontend Engineer",
  tagline: "I build accessible, pixel-perfect digital experiences for the web.",
  email: "abhishekyadavfeb1498@gmail.com",
  phone: "+91-8896370667",
  resume: "#",
  social: [
    { name: "GitHub", url: "https://github.com/Abhishek1402_Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abhishek-yadav-41b593171/" },
  ],
};

export const navLinks = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#experience" },
  { name: "Projects", url: "#projects" },
  { name: "Contact", url: "#contact" },
];

export const aboutContent = {
  intro: "I'm a frontend engineer with 3.5+ years of experience, focused on building pixel-perfect, intuitive user interfaces. I enjoy working at the intersection of design and engineering, where great user experience meets robust, clean, and scalable code.",
  paragraph1:
    "Currently, I'm a frontend web engineer at Gammastack, where I develop casino modules, integrate WebSockets, and improve code performance. I've worked on real-time APIs, SSR/SSG implementations, and secure flows for deposits, withdrawals, and KYC.",
  paragraph2:
    "Previously, I've worked at Vikgol (Validus Fintech) and Horizon Broadband LLP, building SASS-based platforms, enhancing state management with Redux, and collaborating with designers and backend teams. These experiences have shaped how I think about building products that are both well-crafted and widely usable.",
  tech: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Node.js",
    "Express",
    "Material UI",
    "SASS",
    "MongoDB",
    "Git",
    "AWS S3",
  ],
};

export const experience = [
  {
    id: 1,
    company: "Gammastack",
    companyUrl: "https://gammastack.com",
    role: "Frontend Web Engineer",
    period: "April 2025 — Present",
    location: "Bangalore",
    points: [
      "Developed casino modules, integrated WebSockets, fixed bugs, and improved code performance.",
      "Integrated real-time APIs / WebSockets to support live betting updates and instant UI refresh.",
      "Optimised casino pages for faster load time, improving engagement and player retention by 16%.",
      "Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG), improving performance by 10–15%.",
      "Implemented secure flows for Deposits, Withdrawals, KYC verification, and Wallet balance.",
    ],
    tech: ["JavaScript", "TypeScript", "React", "Next.js", "WebSockets"],
  },
  {
    id: 2,
    company: "Vikgol (Validus Fintech)",
    companyUrl: "#",
    role: "Frontend Web Engineer",
    period: "Sep 2024 — March 2025",
    location: "Bangalore",
    points: [
      "Developed new features, bug fixing, test cases, and code refactoring.",
      "Enhanced UX and followed Agile SDLC as a front-end developer.",
      "Implemented Redux to enhance state management and improve application performance.",
      "Collaborated with the backend to enhance the login system for better security and usability.",
      "Participated in code reviews to uphold code quality and best practices.",
    ],
    tech: ["JavaScript", "React", "Redux", "HTML & CSS"],
  },
  {
    id: 3,
    company: "Horizon Broadband LLP",
    companyUrl: "#",
    role: "Frontend Web Engineer",
    period: "Nov 2021 — July 2024",
    location: "Bangalore",
    points: [
      "Led the development of a SASS-based user experience app (XPP Platform) from scratch using React JS.",
      "Designed and developed the frontend in collaboration with product managers and backend teams.",
      "Collaborated with UI/UX experts to craft intuitive, responsive designs with cross-browser compatibility.",
      "Increased performance by 10%, enhancing UX through optimised code and Lazy Loading.",
      "Built the application using Webpack for efficient module bundling. Implemented Git and CI/CD for deployments.",
    ],
    tech: ["JavaScript", "React", "Next.js", "Redux", "Node.js", "Webpack", "Git", "CI/CD"],
  },
];

export const projects = [
  {
    id: 1,
    title: "URL Shortener",
    description: "A full-stack URL shortening service with analytics, custom slugs, and redirect management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Safe Key",
    description: "Secure password manager and key vault for storing and managing credentials safely.",
    tech: ["React", "Node.js", "Encryption"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Weather React App",
    description: "Real-time weather application with location-based forecasts and interactive UI.",
    tech: ["React", "Weather API", "CSS"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Covid-19 Tracker",
    description: "Dashboard for tracking Covid-19 statistics, cases, and vaccination data globally.",
    tech: ["React", "REST API", "Charts"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Mindloop",
    description: "Productivity and mindfulness app for task management and mental wellness.",
    tech: ["React", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with rooms, direct messaging, and presence indicators.",
    tech: ["React", "WebSockets", "Node.js"],
    link: "#",
    github: "#",
  },
  {
    id: 7,
    title: "Ecommerce Backend Services",
    description: "RESTful API and backend services for e-commerce: orders, inventory, payments.",
    tech: ["Node.js", "Express", "MongoDB", "REST API"],
    link: "#",
    github: "#",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (Computer Science and Engineering)",
    institute: "PSIT",
    period: "JUN 2015 — MAY 2019",
  },
  {
    degree: "Intermediate (PCM)",
    institute: "Kendriya Vidyalaya, IIT Kanpur",
    period: "MAY 2013 — JUN 2014",
  },
];
