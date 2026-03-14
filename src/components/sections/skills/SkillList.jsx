import React from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { motion } from "framer-motion";

const SkillList = ({ skill }) => {
  const windowWidth = useWindowWidth();
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className={`flex dark:bg-slate-800/40 bg-white items-center rounded-xl p-2 pr-4 shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-700/50 transition-all duration-300 group cursor-default w-fit min-w-[140px] max-sm:min-w-[100px]`}
    >
      <div className="p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {skill.reactIcon ? (
          <div className="text-2xl">{skill.reactIcon}</div>
        ) : (
          <img
            src={skill.icon}
            alt={skill.desc}
            className="object-contain w-6 h-6"
          />
        )}
      </div>
      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-2 whitespace-nowrap">
        {skill.desc}
      </p>
    </motion.div>
  );
};

export default SkillList;
