import { projects } from "../../../constant/constant";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from "@mui/icons-material/Close";

const ProjectCard = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    let scrollPosition = scrollContainer.scrollLeft || 0;
    const scrollSpeed = 1; // pixels per frame
    
    const scroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        // Reset to start when reaching the end
        if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };
    
    animationRef.current = requestAnimationFrame(scroll);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div 
      className="w-full relative group/carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient Fades for edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-secondary to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-secondary to-transparent z-10 pointer-events-none"></div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Duplicate projects for infinite scroll effect */}
        {[...projects, ...projects].map((project, index) => (
          <motion.div
            key={`${project.id}-${index}`}
            whileHover={{ y: -10 }}
            onClick={() => setSelectedProject(project)}
            className="dark:bg-slate-800/40 bg-white rounded-3xl shadow-sm hover:shadow-2xl border border-slate-100 dark:border-slate-700/50 flex flex-col justify-start h-[22rem] w-[22rem] overflow-hidden relative group mx-6 my-10 transition-all duration-500 backdrop-blur-sm flex-shrink-0 cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden m-4 rounded-2xl">
              <img
                src={project.poster}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                <div className="text-white text-center">
                  <p className="text-sm font-medium mb-2">Click to view details</p>
                  <div className="flex gap-2 justify-center">
                    {project.github && (
                      <div className="p-2 bg-white/20 backdrop-blur-md rounded-full">
                        <GitHubIcon fontSize="small" />
                      </div>
                    )}
                    {project.url && (
                      <div className="p-2 bg-white/20 backdrop-blur-md rounded-full">
                        <LaunchIcon fontSize="small" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-2">
              <h3 className="text-xl font-bold font-montserrat dark:text-lightwhite text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm font-medium font-montserrat dark:text-slate-400 text-slate-600 line-clamp-3 leading-relaxed">
                {project.desc}
              </p>
            </div>
            
            <div className="mt-auto px-6 pb-6">
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((tech, index) => (
                  <span 
                    key={index}
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 text-primary dark:bg-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-secondary rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-colors duration-300"
              >
                <CloseIcon />
              </button>

              {/* Project Image */}
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={selectedProject.poster}
                  alt={selectedProject.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  {selectedProject.tech && (
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech?.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 md:p-8">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-secondary dark:text-lightwhite mb-4">
                    About this project
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.desc}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/30"
                    >
                      <GitHubIcon />
                      View on GitHub
                    </a>
                  )}
                  {selectedProject.url && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${selectedProject.github ? 'flex-1' : 'w-full'} flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-primary text-white rounded-xl font-semibold hover:from-purple-700 hover:to-primary/90 transition-all duration-300 shadow-lg hover:shadow-purple-500/30`}
                    >
                      <LaunchIcon />
                      {selectedProject.github ? 'Live Demo' : selectedProject.url.includes('github') ? 'View on GitHub' : 'Live Demo'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
