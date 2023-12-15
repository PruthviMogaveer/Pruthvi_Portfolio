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
  },
  {
    collage: "Milagres College, Kallianpur, Udupi",
    degree: "Bachelor of Computer Applications (BCA)",
    year: "2018 - 2021",
  },
];

// Skills
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
  educations,
  frontendSkills,
  programmingLang,
  database,
  otherSkills,
  projects,
};
