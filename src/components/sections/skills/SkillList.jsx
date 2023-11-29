import React from "react";

const SkillList = ({ skill }) => {
  return (
    <>
      <div className={`border ${skill.color} flex max-sm:flex-col dark:bg-[#0e0c19] max-sm:h-24 max-sm:justify-center justify-start items-center rounded-md w-60 max-sm:w-32 shadow-skillbox relative mx-2 my-5 h-12 hover:scale-95 transition-all duration-300`}>
        <div className="px-4 py-2">
          <img
            src={skill.icon}
            alt={skill.desc}
            className="object-cover w-[35px] "
          />
        </div>
        <span className="sm:border-r max-sm:border-b sm:h-8 max-sm:w-16 max-sm:py-1 max-sm:border-slate-300 dark:border-slate-400 border-slate-600"></span>
        <div className="px-4 py-2 ">
          <p className="text-md font-semibold text-slate-700 dark:text-slate-300">
            {skill.desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillList;
