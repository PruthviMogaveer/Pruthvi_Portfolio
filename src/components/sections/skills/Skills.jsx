import React from "react";
import { frontendSkills } from "../../../constant/constant";
import SkillList from "../skills/SkillList";

const Skills = () => {
  return (
    <div className="flex flex-col py-8 justify-center items-center px-72 max-xl:px-40 max-lg:px-20 max-md:px-20 max-sm:px-8 transition-all duration-1000">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-secondary dark:text-lightwhite">
          Skills
        </h2>
        <h4 className="text-sm font-medium text-slate-700 dark:text-slate-400">
          My tech stack
        </h4>
      </div>
      <div className="self-start mt-10">
        <h3 className="text-lg self-start font-medium text-slate-700 dark:text-slate-300">
          Frontend
        </h3>
        <div className="flex flex-wrap justify-center items-center my-5 ">
          {frontendSkills.map((skill) => (
            <SkillList key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
