import React, { useEffect, useState } from "react";
import { experiences } from "../../../constant/constant";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center px-72 max-xl:px-40 max-lg:px-20 max-md:px-20 max-sm:px-5 transition-all duration-1000 py-10"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-extrabold text-secondary dark:text-lightwhite mb-2 max-md:text-2xl">
          Experience
        </h2>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest">
          My professional journey
        </p>
      </div>
      <div className="mt-12 w-full relative">
        <VerticalTimeline
          animate={true}
          lineColor={
            document.documentElement.classList.contains("dark")
              ? "#6E58E0"
              : "#6E58E0"
          }
        >
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "transparent",
                color: "inherit",
                boxShadow: "none",
                padding: "0",
                border: "none",
              }}
              contentArrowStyle={{
                display: "none",
              }}
              date={exp.duration}
              dateClassName="text-slate-700 dark:text-slate-400 font-bold"
              iconStyle={{ background: "#6E58E0", color: "#fff" }}
              icon={<WorkIcon />}
            >
              <div className="dark:bg-slate-800/50 bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all duration-300">
                <h3 className="vertical-timeline-element-title text-xl font-bold text-secondary dark:text-lightwhite max-md:text-lg">
                  {exp.role}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-md font-medium text-primary mt-1 max-md:text-sm">
                  {exp.company}
                </h4>
                <p className="text-sm font-medium text-slate-500 mb-4 max-md:text-xs">
                  {exp.location}
                </p>
                <ul className="list-disc ml-5 space-y-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-4">
                  {exp.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
