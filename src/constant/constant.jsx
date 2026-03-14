import React from "react";
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
  blogsPoster,
  passwordGeneratorPoster,
  fightingGamePoster,
  fushionShoesPoster,
  movieSitePoster,
  weatherAppPoster,
  othersPoster,
} from "../assets";

import {
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiMongodb,
  SiGooglecloud,
  SiTwilio,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";

import { TbBrandReactNative, TbDeviceMobileCode, TbApi } from "react-icons/tb";
import { BsDatabaseFillGear } from "react-icons/bs";

// Contact
const contactDetail = {
  phone: "+91 7892251871",
  email: "pruthvimogaveer18@gmail.com",
  location: "Bangalore, Karnataka",
};

// Nav items
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
    id: "experience",
    name: "Experience",
    slug: "/experience",
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

// Footer items
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
    id: "experience",
    name: "Experience",
    slug: "/experience",
  },
  {
    id: "contact-me",
    name: "Contact Me",
    slug: "/contact-me",
  },
];

// Education
const educations = [
  {
    collage: "CMR Institute of Technology, Bangalore",
    degree: "Master of Computer Applications (MCA)",
    year: "2021 - 2023",
    score: "8.5 CGPA",
  },
  {
    collage: "Milagres College, Kallianpur, Udupi",
    degree: "Bachelor of Computer Applications (BCA)",
    year: "2018 - 2021",
    score: "79.15%",
  },
];

// Experiences
const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Trikon Software Labs",
    duration: "Oct 2024 - Present",
    location: "Mangalore",
    points: [
      "Built Search Assistant, a business-buying platform using React.js, Xano, and Outseta.",
      "Developed backend services for Tender Library in Xano to fetch and process procurement notices from the Find-a-Tender API.",
      "Developed and deployed multiple production websites using Next.js and React.js ensuring responsive UI and performance optimization.",
      "Designed ~75% of the system architecture for Digitized Health, integrating AWS SES, S3, Lambda, Stripe, and Mailgun.",
      "Developed Brickloop mobile application using Expo (React Native) and Supabase, integrating Gemini API for AI-generated construction progress updates.",
      "Architected a WhatsApp Automation SaaS Platform using Next.js, Supabase, Meta Business APIs, and Twilio.",
      "Led frontend development for EMAS mobile app extending ERP systems, featuring Gemini API-powered OCR extraction.",
      "Built a GPS tracking prototype using React.js, Node.js, and Flespi APIs for real-time device monitoring and map visualization.",
    ],
  },
];

// Skills
const frontendSkills = [
  {
    id: "react",
    desc: "React.js",
    icon: reactIcon,
    color: "border-indigo-400",
  },
  {
    id: "nextjs",
    desc: "Next.js",
    reactIcon: <SiNextdotjs size={30} className="text-black dark:text-white" />,
    color: "border-gray-500",
  },
  {
    id: "reactnative",
    desc: "React Native (Expo)",
    reactIcon: <TbBrandReactNative size={30} className="text-blue-500" />,
    color: "border-blue-500",
  },
  { id: "js", desc: "JS", icon: jsIcon, color: "border-yellow-400" },
  {
    id: "ts",
    desc: "TypeScript",
    reactIcon: <SiTypescript size={30} className="text-blue-600" />,
    color: "border-blue-600",
  },
  { id: "html", desc: "HTML", icon: htmlIcon, color: "border-orange-400" },
  { id: "css", desc: "CSS", icon: cssIcon, color: "border-blue-600" },
  {
    id: "tailwindcss",
    desc: "Tailwind CSS",
    icon: tailwindIcon,
    color: "border-sky-400",
  },
  {
    id: "bootstrap",
    desc: "Bootstrap",
    icon: bootstrapIcon,
    color: "border-primary",
  },
];

const backendSkills = [
  {
    id: "nodejs",
    desc: "Node.js",
    reactIcon: <SiNodedotjs size={30} className="text-green-500" />,
    color: "border-green-500",
  },
  {
    id: "expressjs",
    desc: "Express.js",
    reactIcon: (
      <SiExpress size={30} className="text-gray-600 dark:text-gray-300" />
    ),
    color: "border-gray-600",
  },
  {
    id: "supabase",
    desc: "Supabase",
    reactIcon: <SiSupabase size={30} className="text-emerald-500" />,
    color: "border-emerald-500",
  },
  {
    id: "xano",
    desc: "Xano",
    reactIcon: <BsDatabaseFillGear size={30} className="text-blue-500" />,
    color: "border-blue-500",
  },
  {
    id: "appwrite",
    desc: "Appwrite",
    icon: appwriteIcon,
    color: "border-pink-500",
  },
];

const programmingLang = [
  { id: "java", desc: "Java", icon: javaIcon, color: "border-red-400" },
  { id: "python", desc: "Python", icon: pythonIcon, color: "border-green-600" },
  { id: "c", desc: "C", icon: cIcon, color: "border-blue-800" },
  { id: "vb.net", desc: "VB.Net", icon: vbIcon, color: "border-indigo-900" },
  { id: "php", desc: "PHP", icon: phpIcon, color: "border-slate-500" },
];

const database = [
  {
    id: "mongodb",
    desc: "MongoDB",
    reactIcon: <SiMongodb size={30} className="text-green-600" />,
    color: "border-green-600",
  },
  { id: "mysql", desc: "MySQL", icon: mysqlIcon, color: "border-yellow-300" },
  {
    id: "postgresql",
    desc: "PostgreSQL",
    icon: postgresIcon,
    color: "border-blue-400",
  },
];

const otherSkills = [
  { id: "git", desc: "Git/GitHub", icon: gitIcon, color: "border-red-800" },
  {
    id: "aws",
    desc: "AWS",
    reactIcon: <FaAws size={30} className="text-orange-500" />,
    color: "border-orange-500",
  },
  {
    id: "gcp",
    desc: "Google Cloud",
    reactIcon: <SiGooglecloud size={30} className="text-blue-500" />,
    color: "border-blue-500",
  },
  {
    id: "twilio",
    desc: "Twilio",
    reactIcon: <SiTwilio size={30} className="text-red-500" />,
    color: "border-red-500",
  },
];

// Projects
const projects = [
  {
    id: "blogs",
    title: "Blogs",
    desc: "Explore our user-friendly blogsite, where you can effortlessly create, edit, and delete your posts. Dive into a community where diverse perspectives thrive, and share the joy of expression with others.",
    poster: blogsPoster,
    url: "https://blogs-pi-two.vercel.app/",
  },
  {
    id: "passwordGenerator",
    title: "Password Generator",
    desc: "Explore our Password Generator and Saver website, where you can effortlessly generate strong, secure passwords and conveniently save them for future use. ",
    poster: passwordGeneratorPoster,
    url: "https://password-generator-and-saver.vercel.app/",
  },
  {
    id: "fusionShoes",
    title: "Fusion Shoes",
    desc: "Fusion Shoes serves as the landing page for a prominent shoe company, Developed using React.js and Tailwind CSS, this static frontend page beautifully showcases the brand's offerings.",
    poster: fushionShoesPoster,
    url: "https://fusion-shoes-landing-page.vercel.app/",
  },
  {
    id: "moviesite",
    title: "Movie Site",
    desc: "Explore a world of cinematic wonders on our movie site, crafted with JavaScript and enriched by a free movie API. Dive into an extensive collection.",
    poster: movieSitePoster,
    url: "https://movie-site-pearl.vercel.app/",
  },
  {
    id: "weatherApp",
    title: "Weather App",
    desc: "Experience weather updates at your fingertips with our JavaScript-powered Weather App site, utilizing the OpenWeather free API.",
    poster: weatherAppPoster,
    url: "https://weather-app-chi-six-66.vercel.app/",
  },
  {
    id: "fightingGame",
    title: "Fighting Game",
    desc: "Enjoy the Fighting Game created using javascript where you can attack or heal using simple keyboard controls. Dive into the action and experience strategic combat at your fingertips!",
    poster: fightingGamePoster,
    url: "https://fighiting-game.vercel.app/",
  },
  {
    id: "others",
    title: "Others",
    desc: "Explore many other projects on github.",
    poster: othersPoster,
    url: "https://github.com/PruthviMogaveer?tab=repositories",
  },
];

export {
  navItems,
  footerItems,
  experiences,
  educations,
  frontendSkills,
  backendSkills,
  programmingLang,
  database,
  otherSkills,
  projects,
  contactDetail,
};
