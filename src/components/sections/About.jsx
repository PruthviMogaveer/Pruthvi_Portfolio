import React from "react";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import Button from "../Button";
import resume from "../../assets/PruthviResume.pdf";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Fade right duration={1300}>
      <section
        aria-labelledby="about-section-title"
        className="flex flex-col py-2 justify-center items-center px-80 max-lg:px-40 max-md:px-20 transition-all duration-1000"
      >
        <div className="flex flex-col justify-center items-center">
          <h2
            id="about-section-title"
            className="text-2xl font-bold text-secondary dark:text-lightwhite"
          >
            About Me
          </h2>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-400">
            My Introduction
          </p>
        </div>
        <div className="flex flex-col my-10 justify-center items-center space-y-8">
          <article className="flex justify-center flex-wrap text-center text-lg font-normal text-slate-700 dark:text-slate-300">
            Welcome to my digital playground, where creativity meets
            functionality. As a passionate Web Developer specializing in
            frontend development, I thrive on crafting captivating online
            experiences. With expertise in React, JavaScript, and modern CSS
            frameworks, I specialize in transforming ideas into visually
            stunning, responsive, and interactive websites that deliver
            exceptional user experiences.
          </article>
          <div className="flex space-x-5 justify-center p-5 items-start">
            <div className="w-32 flex flex-col justify-start items-center space-y-1">
              <h3 className="text-secondary dark:text-lightwhite font-montserrat text-3xl font-bold">
                5+
              </h3>
              <span className="text-slate-700 dark:text-slate-400 font-montserrat text-sm font-thin text-center">
                Years experience in web development
              </span>
            </div>
            <div className="w-32 flex flex-col justify-start items-center space-y-1">
              <h3 className="text-secondary dark:text-lightwhite font-montserrat text-3xl font-bold">
                8+
              </h3>
              <span className="text-slate-700 dark:text-slate-400 font-montserrat text-sm font-thin text-center">
                Projects Completed
              </span>
            </div>
          </div>
          <div>
            <a
              href={resume}
              download="Pruthvi_Mogaveer_Resume"
              className="w-full py-3"
            >
              <Button
                className={
                  "rounded-md h-11 text-base font-semibold hover:bg-primaryhover active:scale-90 transition-all divide-blue-300"
                }
              >
                Download Resume{" "}
                <span>
                  <FileDownloadRoundedIcon fontSize="small" />
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default About;
