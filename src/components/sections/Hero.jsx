import React, { useState, useEffect } from "react";
import { Button, ProfileImage } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import useWindowWidth from "../../hooks/useWindowWidth";
import { TypeAnimation } from "react-type-animation";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

const Hero = () => {
  const windowWidth = useWindowWidth();
  const [offset, setOffset] = useState();

  useEffect(() => {
    setTimeout(() => {
      if (windowWidth > 768) {
        setOffset(-100);
      } else {
        setOffset(0);
      }
    }, 2000);
  }, [windowWidth]);

  return (
    <div className=" flex flex-wrap max-md:py-6 pt-16 max-md:flex-col-reverse justify-between items-center relative px-60 max-xl:px-36 max-lg:px-10 max-md:px-0 max-lg:justify-around h-full transition-all duration-1000">
      <Fade left duration={1300}>
        <div className="flex flex-row justify-start space-x-10 items-center px-10 w-[32rem] max-lg:w-[30rem] max-sm:w-96">
          {windowWidth > 768 && (
            <div>
              <ul className=" flex flex-col flex-wrap space-y-5 relative">
                <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                  <a
                    href="https://www.instagram.com/pruthvi__18/"
                    aria-label="Visit my instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                  <a
                    href="https://github.com/PruthviMogaveer"
                    aria-label="Visit my github"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                  <a
                    href="https://www.linkedin.com/in/pruthvi-mogaveer-52b47a205/"
                    aria-label="Visit my linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          )}

          <div className="flex flex-col space-y-3">
            <h1 className="font-extrabold text-4xl text-primary max-lg:text-3xl">
              <span className="block pb-3">Hi, I am </span>{" "}
              <span className="inline-block pb-3">
                {" "}
                <TypeAnimation
                  sequence={[
                    " Pruthvi Mogaveer",
                    1000,
                    "Web developer",
                    1000,
                    "Frontend developer",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            {/* <h4 className="font-semibold text-lg max-lg:text-base text-slate-700 dark:text-slate-400">
            Frontend developer
          </h4> */}
            <p className="font-normal text-base max-lg:text-sm max-lg:font-medium text-slate-700 dark:text-slate-400 ">
              An enthusiastic and a passionate coder, always ready to adapt new
              skills.
            </p>
            <Link
              to="contact-me"
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
            >
              <Button
                className={
                  "max-md:top-5 relative top-10 w-36 h-11 font-medium flex items-center justify-between rounded-[8px] hover:bg-primaryhover active:scale-90 transition-all duration-300"
                }
              >
                Contact Me{" "}
                <span className="relative -top-[2px] ">
                  <SendRoundedIcon fontSize="small" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </Fade>
      <Fade right duration={1300}>
        <div className="flex flex-row justify-start space-x-10 items-center max-md:w-[21rem]">
          {windowWidth < 768 && (
            <div>
              <ul className=" flex flex-col flex-wrap space-y-5 relative">
                <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                  <a
                    href="https://www.instagram.com/pruthvi__18/"
                    aria-label="Visit my instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                  <a
                    href="https://github.com/PruthviMogaveer"
                    aria-label="Visit my github"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className=" text-primary text-lg w-fit cursor-pointer dark:hover:text-lightwhite hover:text-secondary hover:scale-125 transition-all duration-500">
                  <a
                    href="https://www.linkedin.com/in/pruthvi-mogaveer-52b47a205/"
                    aria-label="Visit my linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          )}
          <ProfileImage />
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
