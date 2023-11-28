import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "../";
import { footerItems } from "../../constant/constant";

const Footer = () => {
  
  return (
    <footer className="transition-all duration-1000 relative w-screen bg-primary flex flex-wrap justify-between max-md:pb-28 max-sm:justify-center items-center py-14 max-md:py-8 px-56 max-lg:px-0 max-xl:px-28">
      <div className="self-start flex flex-col flex-wrap space-y-2 px-10 py-5">
        <h2 className="text-lightwhite font-extrabold text-xl cursor-pointer max-sm:text-center max-lg:w-52">
          <Link to="home" smooth={true} offset={-100} duration={500}>
            Pruthvi Mogaveer
          </Link>
        </h2>
        <h3 className="text-lightwhite font-normal text-sm cursor-pointer max-sm:text-center">
          <Link to="home" smooth={true} offset={-100} duration={500}>
            Frontend developer
          </Link>
        </h3>
      </div>
      <div className="px-10 py-5 max-sm:flex">
        <ul className="flex flex-wrap flex-col space-y-2 max-sm:justify-center max-sm:items-center">
          {footerItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                offset={-100}
                duration={500}
                className="text-lightwhite font-semibold cursor-pointer hover:text-secondary transition-all duration-500"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="self-start flex flex-col space-y-5 px-10 py-5">
        <ul className=" flex flex-wrap space-x-6 ">
          <li className="text-lightwhite text-lg cursor-pointer hover:text-secondary hover:scale-125 transition-all duration-300">
            <a href="https://www.instagram.com/pruthvi__18/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="text-lightwhite text-lg cursor-pointer hover:text-secondary hover:scale-125 transition-all duration-300">
            <a href="https://github.com/PruthviMogaveer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="text-lightwhite text-lg cursor-pointer hover:text-secondary hover:scale-125 transition-all duration-300">
            <a href="https://www.linkedin.com/in/pruthvi-mogaveer-52b47a205/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
        <Link
          to="contact-me"
          smooth={true}
          offset={-100}
          duration={500}
          className="active:scale-90 transition-all duration-300"
        >
          <Button
            bgColor="bg-secondary"
            className="hover:bg-[#251f3b] w-full rounded-lg"
          >
            Contact
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
