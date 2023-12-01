import React from "react";

const Portfolio = () => {
  return (
    <div className="flex flex-col py-8 justify-center items-center px-72 max-xl:px-40 max-lg:px-20 max-md:px-20 max-sm:px-5 transition-all duration-1000">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-secondary dark:text-lightwhite">
          Portfolio
        </h2>
        <p className="text-sm font-medium text-slate-700 dark:text-slate-400">
          My Projects
        </p>
      </div>
      
    </div>
  );
};

export default Portfolio;
