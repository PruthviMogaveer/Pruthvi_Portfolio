import React from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";
import { motion } from "framer-motion";

const SkillList = ({ skill }) => {
  const windowWidth = useWindowWidth();
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      className={`flex dark:bg-slate-800/60 bg-white items-center rounded-xl p-3 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-600 transition-all duration-300 group cursor-default w-fit min-w-[140px] max-sm:min-w-[120px] backdrop-blur-sm`}
    >
      <div className="p-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {skill.reactIcon ? (
          <div className="text-2xl text-primary dark:text-purple-400">
            {skill.reactIcon}
          </div>
        ) : (
          <img
            src={skill.icon}
            alt={skill.desc}
            className="object-contain w-7 h-7 filter dark:invert dark:brightness-110"
          />
        )}
      </div>
      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 ml-2 whitespace-nowrap group-hover:text-primary dark:group-hover:text-purple-400 transition-colors duration-300">
        {skill.desc}
      </p>
    </motion.div>
  );
};

export default SkillList;
