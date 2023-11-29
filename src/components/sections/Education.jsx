import React from "react";
import { educations } from "../../constant/constant";

const Education = () => {
  return (
    <div className=" flex flex-col py-8 justify-center items-center px-64 max-lg:px-40 max-md:px-20 max-sm:px-8 transition-all duration-1000">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-secondary dark:text-lightwhite">
          Education
        </h2>
        <h4 className="text-sm font-medium text-slate-700 dark:text-slate-400">
          My recent qualifications
        </h4>
      </div>
      <div className="relative lg:self-center flex space-x-40 max-md:space-x-20 max-md:self-center max-sm:space-x-12 self-start my-6">
        <div className="border-r-2 border-secondary dark:border-lightwhite relative h-[17.5rem] max-sm:h-[24rem] top-12"></div>
        <div>
          {educations.map((education) => (
            <div
              key={education.year}
              className="dark:bg-[#0e0c19] max-sm:w-[17rem] p-5 b rounded-md shadow-educationbox my-12 before:absolute before:rounded-full before:-left-1 before:border-[5px] before:border-secondary dark:before:border-lightwhite "
            >
              <h3 className="text-lg font-bold text-secondary dark:text-lightwhite">
                {education.collage}
              </h3>
              <h4 className="text-base font-medium max-sm:text-[0.9rem] text-slate-700 dark:text-slate-400">
                {education.degree}
              </h4>
              <span className="text-sm max-sm:text-[0.8rem] font-medium text-slate-700 dark:text-slate-400">
                {education.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
