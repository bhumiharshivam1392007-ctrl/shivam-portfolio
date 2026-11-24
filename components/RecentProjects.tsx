"use client";

import { FaLocationArrow, FaGithub } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Featured Work & <span className="text-purple">Recent Projects</span>
      </h1>
      <p className="text-center text-white-200 mt-3 text-sm md:text-base max-w-2xl mx-auto">
        A curated showcase of full-stack web applications, AI automation pipelines, and management systems.
      </p>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => {
          // Display cleaned URL or project title for the floating 3D pin badge
          const displayUrl = item.link && item.link !== "#" 
            ? item.link.replace(/^https?:\/\//, "") 
            : item.title;

          return (
            <div
              className="lg:min-h-[34.5rem] h-[27rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer
                title={displayUrl}
                href={item.link !== "#" ? item.link : item.github}
              >
                {/* Project Image Box */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-8 rounded-2xl bg-[#090D23] border border-white/[0.08]">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-2xl"
                    style={{ backgroundColor: "#10132E" }}
                  >
                    <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover opacity-50" />
                  </div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="z-10 absolute inset-0 w-full h-full object-cover object-top rounded-xl p-1"
                  />
                </div>

                {/* Project Title */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                  {item.title}
                </h1>

                {/* Project Description */}
                <p
                  className="lg:text-sm font-normal text-xs line-clamp-2 text-[#BEC1DD] my-2"
                >
                  {item.des}
                </p>

                {/* Tech Stack Icons & Action Links */}
                <div className="flex items-center justify-between mt-5 mb-2">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-9 lg:h-9 w-7 h-7 flex justify-center items-center shadow-md"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="tech icon" className="p-1.5" />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {item.github && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-white/[0.1] hover:border-purple/50 bg-black/40 text-white-200 hover:text-white transition"
                        title="View GitHub Repository"
                      >
                        <FaGithub size={16} />
                      </a>
                    )}
                    <a
                      href={item.link !== "#" ? item.link : item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group/link"
                    >
                      <p className="flex lg:text-sm text-xs text-purple font-medium group-hover/link:underline">
                        Live Site
                      </p>
                      <FaLocationArrow className="ms-2" color="#CBACF9" size={12} />
                    </a>
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
