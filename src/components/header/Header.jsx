import React, { useState, useEffect } from "react";
import DarkModeToggle from "../DarkModeToggle";
import { Link } from "react-scroll";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import useWindowWidth from "../../hooks/useWindowWidth";

const Header = () => {
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
      id: "resume",
      name: "Resume",
      slug: "/resume",
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

  const windowWidth = useWindowWidth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`${
        !menuOpen
          ? "max-md:h-20 transition-all duration-1000"
          : " max-md:h-56 transition-all duration-1000"
      } relative px-56 max-xl:px-28 max-lg:px-0 flex flex-wrap justify-center items-center py-6 w-screen`}
    >
      <nav
        className={`flex flex-wrap justify-between w-full items-center px-10 ${
          menuOpen && "max-md:-mt-32"
        } transition-all duration-1000`}
      >
        <div className="text-xl relative font-bold max-md:text-lg text-secondary dark:text-lightwhite cursor-pointer">
          Pruthvi Mogaveer
        </div>
        <div className="">
          <ul
            className={`${
              menuOpen
                ? "transition-all duration-1000 max-md:absolute max-md:bottom-5 max-md:left-0 max-md:my-6 max-md:justify-center max-md:items-center max-md: max-md:w-full max-md:px-10"
                : "transition-all duration-1000 max-md:absolute max-md:-bottom-32 max-md:left-0 max-md:my-6 max-md:justify-center max-md:items-center max-md: max-md:w-full max-md:px-10"
            } relative flex flex-wrap space-x-6 `}
          >
            {navItems.map((item) => (
              <li key={item.id} className="max-md:py-2">
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass=" text-[#6E58E0] dark:text-[#6E58E0] border-b-2 border-[#6E58E0] transition-all duration-100 text-base font-medium"
                  className={`cursor-pointer text-secondary dark:text-lightwhite hover:text-primary dark:hover:text-primary transition-all duration-100 text-base font-medium
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <DarkModeToggle />
          {windowWidth < 768 && (
            <div
              className={`py-[6px] flex justify-center items-center px-2 ml-3 rounded-[3px] bg-lightwhite cursor-pointer group`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <WidgetsOutlinedIcon
                fontSize="small"
                className={`${
                  menuOpen
                    ? "text-primary dark:text-primary"
                    : "text-secondary dark:text-secondary"
                } group-hover:scale-110 transition-all duration-300`}
              />
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
