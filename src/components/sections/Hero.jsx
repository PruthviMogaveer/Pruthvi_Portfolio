import React from "react";
import { ProfileImage } from "../";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import useWindowWidth from "../../hooks/useWindowWidth";

const Hero = () => {
  const windoWidth = useWindowWidth();

  return (
    <div className=" flex flex-wrap max-md:py-6 max-md:flex-col-reverse justify-start items-center relative px-64 max-xl:px-36 max-lg:px-10 max-md:px-0 max-lg:justify-around h-full">
      <div className="flex flex-row justify-start space-x-10 items-center px-10 w-[32rem] max-lg:w-[30rem] max-sm:w-96">
        {windoWidth > 768 && (
          <div>
            <ul className=" flex flex-col flex-wrap space-y-5 relative">
              <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                <Link to="https://www.instagram.com/pruthvi__18/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                <Link to="https://github.com/PruthviMogaveer">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>
              <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                <Link to="https://www.linkedin.com/in/pruthvi-mogaveer-52b47a205/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div className="flex flex-col space-y-3">
          <h1 className="font-extrabold text-4xl text-primary max-lg:text-3xl">
            <span className="block pb-3">Hi, I am </span>{" "}
            <span className="inline-block pb-3">Pruthvi</span>
            <span className=""> Mogaveer</span>
          </h1>
          <h4 className="font-semibold text-lg max-lg:text-base text-slate-700 dark:text-slate-400">
            Frontend developer
          </h4>
          <p className="font-normal text-base max-lg:text-sm max-lg:font-medium text-slate-700 dark:text-slate-400">
            An enthusiastic and a passionate coder, always ready to adapt new
            skills.
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-start space-x-10 items-center max-md:w-[21rem]">
        {windoWidth < 768 && (
          <div>
            <ul className=" flex flex-col flex-wrap space-y-5 relative">
              <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                <Link to="https://www.instagram.com/pruthvi__18/">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </li>
              <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                <Link to="https://github.com/PruthviMogaveer">
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
              </li>
              <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                <Link to="https://www.linkedin.com/in/pruthvi-mogaveer-52b47a205/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </li>
            </ul>
          </div>
        )}
        <ProfileImage />
      </div>
    </div>
  );
};

export default Hero;
