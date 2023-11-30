import {
  htmlIcon,
  bootstrapIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  tailwindIcon,
  javaIcon,
  pythonIcon,
  vbIcon,
  cIcon,
  phpIcon,
  mysqlIcon,
  postgresIcon,
  gitIcon,
  appwriteIcon,
} from "../assets";

const navItems = [
  {
    id: "home",
    name: "Home",
    slug: "/",
  },
  {
    id: "about",
    name: "About",
    slug: "/about",
  },
  {
    id: "education",
    name: "Education",
    slug: "/education",
  },
  {
    id: "skills",
    name: "Skills",
    slug: "/skills",
  },
  {
    id: "portfolio",
    name: "Portfolio",
    slug: "/portfolio",
  },
  {
    id: "contact-me",
    name: "Contact Me",
    slug: "/contact-me",
  },
];

const footerItems = [
  {
    id: "home",
    name: "Home",
    slug: "/",
  },
  {
    id: "about",
    name: "About",
    slug: "/about",
  },
  {
    id: "contact-me",
    name: "Contact Me",
    slug: "/contact-me",
  },
];

const educations = [
  {
    collage: "CMR Institute of Technology, Bangalore",
    degree: "Master of Computer Applications (MCA)",
    year: "2021 - 2023",
  },
  {
    collage: "Milagres College, Kallianpur, Udupi",
    degree: "Bachelor of Computer Applications (BCA)",
    year: "2018 - 2021",
  },
];

const frontendSkills = [
  {
    id: "html",
    desc: "HTML",
    icon: htmlIcon,
    color: "border-orange-400",
  },
  {
    id: "css",
    desc: "CSS",
    icon: cssIcon,
    color: "border-blue-600",
  },
  {
    id: "bootstrap",
    desc: "Bootstrap",
    icon: bootstrapIcon,
    color: "border-primary",
  },
  {
    id: "tailwindcss",
    desc: "Tailwindcss",
    icon: tailwindIcon,
    color: "border-sky-400",
  },
  {
    id: "js",
    desc: "JS",
    icon: jsIcon,
    color: "border-yellow-400",
  },
  {
    id: "react",
    desc: "React.js",
    icon: reactIcon,
    color: "border-indigo-400",
  },
];

const programmingLang = [
  {
    id: "java",
    desc: "Java",
    icon: javaIcon,
    color: "border-red-400",
  },
  {
    id: "python",
    desc: "Python",
    icon: pythonIcon,
    color: "border-green-600",
  },
  {
    id: "vb.net",
    desc: "Vb.net",
    icon: vbIcon,
    color: "border-indigo-900",
  },
  {
    id: "c",
    desc: "C",
    icon: cIcon,
    color: "border-blue-800",
  },
  {
    id: "php",
    desc: "Php",
    icon: phpIcon,
    color: "border-slate-500",
  },
];

const database = [
  {
    id: "mysql",
    desc: "MySQL",
    icon: mysqlIcon,
    color: "border-yellow-300",
  },
  {
    id: "postgresql",
    desc: "PostgreSQL",
    icon: postgresIcon,
    color: "border-blue-400",
  },
];

const otherSkills = [
  {
    id: "git",
    desc: "git",
    icon: gitIcon,
    color: "border-red-800",
  },
  {
    id: "appwrite",
    desc: "Appwrite",
    icon: appwriteIcon,
    color: "border-pink-500",
  },
];

export {
  navItems,
  footerItems,
  educations,
  frontendSkills,
  programmingLang,
  database,
  otherSkills
};
