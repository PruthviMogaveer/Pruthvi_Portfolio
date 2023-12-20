import React from "react";
import ProjectCard from "./ProjectCard";
import Fade from "react-reveal/Fade";

const Portfolio = () => {
  return (
    <Fade bottom duration={1300}>
      <div className="flex overflow-hidden flex-col py-8 justify-center items-center mx-56 max-xl:mx-32 max-lg:mx-10 max-md:mx-12 max-sm:mx-6 transition-all duration-1000">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-secondary dark:text-lightwhite">
            Portfolio
          </h2>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-400">
            My Projects
          </p>
        </div>
        <div className="mt-12">
          <ProjectCard />
        </div>
      </div>
    </Fade>
  );
};

export default Portfolio;
