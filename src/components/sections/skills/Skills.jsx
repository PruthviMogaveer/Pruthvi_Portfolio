import React from "react";
import {
  frontendSkills,
  programmingLang,
  database,
  otherSkills,
} from "../../../constant/constant";
import SkillList from "../skills/SkillList";
import Fade from "react-reveal/Fade";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center px-72 max-xl:px-40 max-lg:px-20 max-md:px-20 max-sm:px-5 transition-all duration-1000">
      <Fade right duration={1300}>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-secondary dark:text-lightwhite">
            Skills
          </h2>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-400">
            My tech stack
          </p>
        </div>
      </Fade>
      <Fade bottom duration={1300}>
        <div className="self-start mt-12 max-sm:shadow-skillbox max-sm:p-5 max-sm:rounded-md max-sm:w-full">
          <h3 className="text-lg self-start font-medium text-slate-700 dark:text-slate-300">
            Frontend
          </h3>
          <div className="flex flex-wrap justify-center max-sm:-mx-4 items-center my-5">
            {frontendSkills.map((skill) => (
              <SkillList key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1300}>
        <div className="self-start mt-12 max-sm:shadow-skillbox max-sm:p-5 max-sm:rounded-md max-sm:w-full">
          <h3 className="text-lg self-start font-medium text-slate-700 dark:text-slate-300">
            Programming Languages
          </h3>
          <div className="flex flex-wrap justify-center max-sm:-mx-4 items-center my-5">
            {programmingLang.map((skill) => (
              <SkillList key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1300}>
        <div className="self-start mt-12 max-sm:shadow-skillbox max-sm:p-5 max-sm:rounded-md max-sm:w-full">
          <h3 className="text-lg self-start font-medium text-slate-700 dark:text-slate-300">
            Database
          </h3>
          <div className="flex flex-wrap justify-center max-sm:-mx-4 items-center my-5">
            {database.map((skill) => (
              <SkillList key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1300}>
        <div className="self-start mt-12 max-sm:shadow-skillbox max-sm:p-5 max-sm:rounded-md max-sm:w-full">
          <h3 className="text-lg self-start font-medium text-slate-700 dark:text-slate-300">
            Others
          </h3>
          <div className="flex flex-wrap justify-center max-sm:-mx-4 items-center my-5">
            {otherSkills.map((skill) => (
              <SkillList key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
