
export const RESUME_URL =
  "https://drive.google.com/file/d/1VxpiMsWgihEFe1kc9qRJ9axClgPaxk_m/view?usp=sharing";

export const educationData = [
  {
    level: "10th",
    institution: "Lal Bahadur High School",
    scoreType: "cgpa",
    score: "9.4"
  },
  {
    level: "12th",
    institution: "Sri Gayatri Junior College",
    scoreType: "percentage",
    score: "96.8"
  },
  {
    level: "BTech (Cse)",
    institution: "Indian Institute Of Information Technology Manipur (IIIT M)",
    scoreType: "cpi",
    score: "7.80"
  }
];


export const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Adweb Technology",
    year: "2025",
    logo: "/assets/svgs/ADWEB.svg",
    points: [
      "Worked on backend systems and APIs following production-grade practices, including clean code architecture, error handling, and RESTful API design.",
      "Gained hands-on experience with ORMs, authentication systems.",
      "Designed relational and non-relational databases (MySQL, MongoDB) for real production systems.",
    ],
  },
];

export const linksData = [
  {
    name: "Leetcode Profile",
    url: "https://leetcode.com/u/Mech_12/",
    username: "Mech_12",
    icon: "/assets/svgs/leetcode.svg",
  },
  {
    name: "Github Profile",
    url: "https://github.com/RecursiveByte",
    username: "RecursiveByte",
    icon: "/assets/svgs/githubsmall.svg",
  },
  {
    name: "Linkedin Profile",
    url: "https://www.linkedin.com/in/retesh-mourya-766646274/",
    username: "Retesh Mourya",
    icon: "/assets/svgs/linkedin.svg",
  },
];


export const skills = {
  programmingLanguages: [
    { name: "Javascript" },
    { name: "Typescript" },
    { name: "Python" },
    { name: "C" },
    { name: "C++" },
  ],

  // development: {
    frontend: [
      { name: "Html" },
      { name: "Css" },
      { name: "React" },
      { name: "Redux" },
      { name: "Tailwindcss" },
      { name: "Gsap" },
      // { name: "Threejs" },
      { name: "Framer-motion" },
    ],
    backend: [
      { name: "Nodejs" },
      { name: "Expressjs" },
      { name: "Sequelize" },
      { name: "Fast-api" },
      { name: "Mongodb" },
      { name: "Mysql" },
      { name: "Postgresql" },
      { name: "Prisma" }
    ]

  ,
  tools: [
    { name: "Git" },
    { name: "Github" },
    { name: "Github-Copilot" },
    { name: "Colab" },
    { name: "Jupyter" },
    { name: "VS-Code" },
    { name: "Postman" },
    { name: "Figma" },
    //   {name:"Canva"},
    { name: "Render" }
  ],
};


export const softSkills = [
  {
    title: "Effective Communication Skills",
    description: "Effectively conveys ideas and collaborates with diverse teams.",
  },
  {
    title: "Adaptability",
    description: "Quickly learns and adjusts to new technologies and environments.",
  },
  {
    title: "Problem-Solving",
    description: "Approaches challenges with creativity and logic to find efficient solutions.",
  },
  {
    title: "Team Player",
    description: "Works well in team settings, contributing positively to group dynamics.",
  },
  {
    title: "Time Management",
    description: "Prioritizes tasks effectively to meet deadlines and maintain productivity.",
  },
];

export const languages = [
  {
    title: "English",
    description:
      "Professional Proficiency (C1 Level) – Fluent in reading, writing, and speaking.",
  },
  {
    title: "Hindi",
    description:
      "Native Proficiency – Expert in conversational and formal communication.",
  },
  {
    title: "Telugu",
    description:
      "Basic Proficiency – Able to understand and engage in simple conversations.",
  },
  {
    title: "Japanese",
    description:
      "Basic Proficiency – Familiar with beginner-level speaking and writing.",
  },
  {
    title: "Marathi",
    description:
      "Basic Proficiency – Able to understand and engage in simple conversations.",
  },
];

export const otherSkills = [
  {
    title: "Video Editing",
    description: "Medium-level editing skills using DaVinci Resolve 19, including Fusions, cutting, transitions, effects, and color correction."
  },
  {
    title: "Gaming",
    description: "Strong skills in boss fights, quick adaptation to new game mechanics, and strategic gameplay."
  }
];

export const project = [
  {
    projectName: "BookVerse",
    projectImageUrl: "https://res.cloudinary.com/dhjxpn70k/image/upload/v1773587666/bookVerse_iqfkmm.png",
    projectGithubLink: "https://github.com/RecursiveByte/BookVerse",
    projectLink: "https://bookverse-5h53.onrender.com",
    projectDesc: "BookVerse is a production-grade full-stack book review platform where users can discover books, write reviews, and explore community recommendations. Features include authentication, authorization, role-based access control, rate limiting, proper input validation, debouncing, PostgreSQL indexing, virtual list rendering, pagination with client-side caching, responsive design, and an immersive UI/UX — and more."
  },
  {
    projectName: "ISL-Vision",
    projectImageUrl: "/assets/images/isl-vision.png",
    projectGithubLink: "https://github.com/RecursiveByte/ISL-Vision",
    projectLink: "https://isl-vision.onrender.com/",
    projectDesc: "ISL-Vision is a real-time hand gesture recognition system that detects and predicts Indian Sign Language (ISL) using a webcam. It leverages a custom-trained Deep Neural Network (DNN) model to accurately interpret hand gestures and translate them into meaningful letters."
  },
  {
    projectName: "Password Manager",
    projectImageUrl: "/assets/images/pass.png",
    projectLink: "https://passwordmanager-2-0-owpd.onrender.com",
    projectGithubLink: "https://github.com/RecursiveByte/Mern_Projects/tree/main/PasswordManager_2.0",
    projectDesc: "A secure multi-user password management application built with the MERN stack, featuring encryption, user authentication, and an intuitive interface for safe password storage and management."
  }
];
