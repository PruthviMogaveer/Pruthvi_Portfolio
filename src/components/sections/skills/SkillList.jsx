import React from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";

const SkillList = ({ skill }) => {
  const windowWidth = useWindowWidth();
  return (
    <>
      <div
        className={`max-sm:border ${skill.color} flex dark:bg-[#0e0c19] max-sm:h-8 max-sm:justify-center justify-start items-center rounded-md max-sm:rounded w-60 max-sm:w-20 shadow-skillbox relative mx-2 my-5 h-12 hover:scale-95 transition-all duration-300`}
      >
        {windowWidth > 640 && (
          <>
            <div className="px-4 py-2">
              <img
                src={skill.icon}
                alt={skill.desc}
                className="object-cover w-[35px] "
              />
            </div>
            <span className="border-r h-8 dark:border-slate-400 border-slate-600"></span>
          </>
        )}

        <div className="px-4 py-2 ">
          <p className="text-md font-semibold max-sm:text-xs max-sm:font-medium text-slate-600 dark:text-slate-400">
            {skill.desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default SkillList;
