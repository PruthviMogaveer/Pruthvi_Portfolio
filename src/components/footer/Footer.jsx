import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "../";

const Footer = () => {
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

  return (
    <footer className="relative bottom-0 w-screen bg-primary flex flex-wrap justify-between items-center py-20 px-56">
      <div className="self-start flex flex-col flex-wrap space-y-2">
        <h2 className="text-white font-extrabold text-xl cursor-pointer">
          <Link to="/">Pruthvi Mogaveer</Link>
        </h2>
        <h3 className="text-white font-normal text-sm cursor-pointer">
          <Link to="/">Frontend developer</Link>
        </h3>
      </div>
      <div className="">
        <ul className="flex flex-wrap flex-col space-y-2">
          {footerItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.slug}
                className="text-white font-semibold cursor-pointer hover:text-secondary transition-all duration-500"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="self-start flex flex-col space-y-5">
        <ul className=" flex flex-wrap space-x-6 ">
          <li className="text-white text-lg cursor-pointer hover:text-secondary hover:scale-125 transition-all duration-300">
            <Link to="https://www.instagram.com/pruthvi__18/">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li className="text-white text-lg cursor-pointer hover:text-secondary hover:scale-125 transition-all duration-300">
            <Link to="https://github.com/PruthviMogaveer">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
          </li>
          <li className="text-white text-lg cursor-pointer hover:text-secondary hover:scale-125 transition-all duration-300">
            <Link to="https://www.linkedin.com/in/pruthvi-mogaveer-52b47a205/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </li>
        </ul>
        <Link
          to="/contact-me"
          className="active:scale-90 transition-all duration-300"
        >
          <Button bgColor="bg-secondary" className="hover:bg-[#251f3b]">
            Contact
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
