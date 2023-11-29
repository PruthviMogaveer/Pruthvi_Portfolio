import {
  htmlIcon,
  bootstrapIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  tailwindIcon,
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
    desc: "Tailwind css",
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

export { navItems, footerItems, educations, frontendSkills };
