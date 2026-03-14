import React from "react";
import {
  frontendSkills,
  backendSkills,
  programmingLang,
  database,
  otherSkills,
} from "../../../constant/constant";
import SkillList from "../skills/SkillList";
import { motion } from "framer-motion";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const SkillSection = ({ title, skills }) => (
    <motion.div
      variants={itemVariants}
      className="flex flex-col w-full bg-slate-50/50 dark:bg-slate-800/20 p-6 rounded-3xl border border-slate-100 dark:border-slate-700/50 backdrop-blur-sm"
    >
      <h3 className="text-xl font-bold text-secondary dark:text-lightwhite mb-6 flex items-center gap-2 max-md:text-lg">
        <span className="w-2 h-6 bg-primary rounded-full"></span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillList key={skill.id} skill={skill} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="flex flex-col justify-center items-center px-4 md:px-20 lg:px-40 xl:px-64 py-20 max-md:py-8 transition-all duration-1000 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center mb-16"
      >
        <h2 className="text-3xl font-extrabold text-secondary dark:text-lightwhite mb-2 max-md:text-2xl">
          Skills
        </h2>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          My technical expertise
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl"
      >
        <SkillSection title="Programming Languages" skills={programmingLang} />
        <SkillSection title="Frontend Development" skills={frontendSkills} />
        <SkillSection title="Backend & Cloud" skills={backendSkills} />
        <div className="grid grid-cols-1 gap-8 h-full">
          <SkillSection title="Databases" skills={database} />
          <SkillSection title="Other Tools" skills={otherSkills} />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
