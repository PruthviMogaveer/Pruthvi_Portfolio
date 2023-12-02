import React from "react";
import { htmlIcon } from "../../assets";

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
      <div>
        <div className="rounded-xl shadow-skillbox flex flex-col justify-center  h-52 w-56 overflow-hidden relative">
          <div className="p-1 m-1 relative ">
            <img
              src={htmlIcon}
              alt="a"
              className="object-cover w-60 h-32 rounded-lg border"
            />
          </div>
          <h3 className="text-lg font-bold self-start px-2 my-1 mx-3">Title</h3>
          <p className="text-sm self-start px-2 my-1 mx-3 font-medium">desc</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
