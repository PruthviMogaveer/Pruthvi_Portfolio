import React from "react";
import DarkModeToggle from "../DarkModeToggle";
import { NavLink } from "react-router-dom";

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

  return (
    <header className="relative px-56 max-sm:px-20 flex flex-wrap justify-center items-center py-6 w-screen">
      <nav className="flex flex-wrap justify-between w-full items-center px-10">
        <div className="text-xl font-bold text-secondary dark:text-lightwhite cursor-pointer">
          Pruthvi Mogaveer
        </div>
        <div className="">
          <ul className="flex flex-wrap space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.slug}
                  className={({ isActive }) =>
                    isActive
                      ? `${"text-primary dark:text-primary border-b-2 border-primary transition-all duration-100 text-base font-medium"}`
                      : `${" text-secondary dark:text-lightwhite hover:text-primary dark:hover:text-primary transition-all duration-100 text-base font-medium"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
