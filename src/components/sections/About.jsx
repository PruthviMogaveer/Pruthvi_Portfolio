import React, { useEffect, useRef } from "react";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import Button from "../Button";
import resume from "../../assets/PruthviResume.pdf";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

const Counter = ({ value, direction = "up" }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        ) + "+";
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
};

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      aria-labelledby="about-section-title"
      className="flex flex-col py-2 justify-center items-center px-16 max-lg:px-8 max-md:px-6 max-sm:px-4 transition-all duration-1000"
    >
      <div className="flex flex-col justify-center items-center">
        <h2
          id="about-section-title"
          className="text-3xl font-extrabold text-secondary dark:text-lightwhite mb-2 max-md:text-2xl"
        >
          About Me
        </h2>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          My Introduction
        </p>
      </div>
      <div className="flex flex-col mt-12 justify-center items-center space-y-10 max-w-4xl">
        <article className="flex justify-center flex-wrap text-center text-lg font-medium text-slate-700 dark:text-slate-300 leading-relaxed px-4 max-md:text-base">
          Software Developer with <span className="text-primary font-bold mx-1">4+ years</span> of experience in full-stack
          development and <span className="text-primary font-bold mx-1">1+ year</span> of professional experience building scalable
          applications using <span className="font-semibold text-secondary dark:text-lightwhite">React.js, Next.js, Node.js, Xano, and Supabase</span>.
          Experienced in delivering production applications, integrating APIs,
          and working across frontend, backend, and mobile platforms.
          Passionate about building impactful software and continuously
          learning new technologies.
        </article>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-5 justify-center p-5 items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-xs flex flex-col justify-start items-center space-y-1 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 shadow-sm border border-slate-100 dark:border-slate-700 transition-colors"
          >
            <h3 className="text-secondary dark:text-lightwhite font-montserrat text-3xl font-bold">
              <Counter value={1} />
            </h3>
            <span className="text-slate-700 dark:text-slate-400 font-montserrat text-xs font-medium text-center uppercase tracking-wider">
              Year professional experience
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-xs flex flex-col justify-start items-center space-y-1 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 shadow-sm border border-slate-100 dark:border-slate-700 transition-colors"
          >
            <h3 className="text-secondary dark:text-lightwhite font-montserrat text-3xl font-bold">
              <Counter value={4} />
            </h3>
            <span className="text-slate-700 dark:text-slate-400 font-montserrat text-xs font-medium text-center uppercase tracking-wider">
              Years full-stack experience
            </span>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-xs flex flex-col justify-start items-center space-y-1 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 shadow-sm border border-slate-100 dark:border-slate-700 transition-colors"
          >
            <h3 className="text-secondary dark:text-lightwhite font-montserrat text-3xl font-bold">
              <Counter value={10} />
            </h3>
            <span className="text-slate-700 dark:text-slate-400 font-montserrat text-xs font-medium text-center uppercase tracking-wider">
              Projects Completed
            </span>
          </motion.div>
        </div>
        <div>
          <a
            href={resume}
            download="Pruthvi_Mogaveer_Resume"
            className="w-full py-3"
          >
            <Button
              className={
                "rounded-md h-11 px-6 text-base font-semibold hover:bg-primaryhover active:scale-95 transition-all shadow-lg hover:shadow-primary/20"
              }
            >
              Download Resume{" "}
              <span className="ml-2">
                <FileDownloadRoundedIcon fontSize="small" />
              </span>
            </Button>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
