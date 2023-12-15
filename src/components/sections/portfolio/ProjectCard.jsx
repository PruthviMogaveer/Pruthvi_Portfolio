import { projects } from "../../../constant/constant";
import ScrollCarousel from "scroll-carousel-react";

const ProjectCard = () => {
  return (
    <>
      <ScrollCarousel autoplay autoplaySpeed={8} speed={7}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="dark:bg-[#0e0c19] rounded-xl shadow-skillbox flex flex-col justify-start h-[11.5rem] w-64 overflow-hidden relative group mx-5 my-8"
          >
            <div className="p-1 m-1 relative">
              <img
                src={project.poster}
                alt="a"
                className="object-cover w-full h-[7.6rem] rounded-lg"
              />
            </div>
            <div className="group-hover:-translate-y-20 transition-all duration-500 min-h-full group-hover:shadow-menu dark:group-hover:shadow-darkmenu group-hover:rounded-lg w-full bg-white dark:bg-[#0e0c19]">
              <h3 className="text-base font-bold self-start px-1 py-2 my-1 mx-3 font-montserrat dark:text-slate-300 text-slate-900">
                {project.title}
              </h3>
              <p className="text-xs self-start px-2 my-1 mx-3 font-medium font-montserrat dark:text-slate-400 text-slate-700 h-16 line-clamp-4 overflow-hidden ">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </ScrollCarousel>
    </>
  );
};

export default ProjectCard;
