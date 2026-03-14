import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="flex overflow-hidden flex-col py-20 max-md:py-8 justify-center items-center w-full transition-all duration-1000">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-center items-center mb-16"
      >
        <h2 className="text-3xl font-extrabold text-secondary dark:text-lightwhite mb-2 max-md:text-2xl">
          Portfolio
        </h2>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          My Projects
        </p>
      </motion.div>
      <div className="w-full">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Portfolio;
