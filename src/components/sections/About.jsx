import React from "react";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import Button from "../Button";
import resume from "../../assets/PruthviResume.pdf";

const About = () => {
  return (
    <div className="flex flex-col py-8 justify-center items-center px-80 max-lg:px-40 max-md:px-20 ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold text-secondary dark:text-lightwhite">
          About Me
        </h2>
        <h4 className="text-sm font-medium text-slate-700 dark:text-slate-400">
          My Introduction
        </h4>
      </div>
      <div className="flex flex-col my-10 justify-center items-center space-y-8">
        <div className="flex justify-center flex-wrap text-center text-lg font-normal text-slate-700 dark:text-slate-300">
          Welcome to my digital playground, where creativity meets
          functionality. As a passionate Web Developer, I thrive on crafting
          captivating online experiences. I specialize in transforming ideas
          into visually stunning and interactive websites.
        </div>
        <div className="flex space-x-5 justify-center p-5 items-start">
          <div className=" w-32 flex flex-col justify-start items-center space-y-1">
            <h3 className="text-secondary dark:text-lightwhite font-montserrat text-3xl font-bold">
              3+
            </h3>
            <span className="text-slate-700 dark:text-slate-400 font-montserrat text-sm font-thin text-center">
              Years experience in development
            </span>
          </div>
          <div className=" w-32 flex flex-col justify-start items-center space-y-1">
            <h3 className="text-secondary dark:text-lightwhite font-montserrat text-3xl font-bold">
              10+
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
    </div>
  );
};

export default About;
