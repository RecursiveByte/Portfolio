import React, { useRef } from "react";
import { project } from "../../data/data";
import { useGSAP } from "@gsap/react";
import { projectsTimelineAnimation } from "../../animations/aboutAnimations/projectsAnimation";
import Experience from "./Experience"; 
import { experiences } from "../../data/data";



const Projects = () => {
  const headRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    projectsTimelineAnimation(sectionRef.current, cardsRef.current);
  });

  return (
    <section ref={sectionRef} className="min-h-screen py-10 w-screen">
      <div className="projects flex items-center min-h-screen min-w-screen justify-center">
        <div className="main w-[90%] relative flex rounded-xl shadow-[0_0_20px_5px_rgba(255,255,255,1)] flex-col gap-4 p-4">

          <h1
            ref={headRef}
            className="text-white [text-shadow:0_0_50px_#ffffff] text-3xl font-bold text-center p-4"
          >
            My Projects
          </h1>

          <div className="flex-col gap-4 w-full md:flex-row p-4 flex flex-wrap justify-around items-center">
            {project.map((ele, id) => (
              <div
                key={id}
                ref={(el) => (cardsRef.current[id] = el)}
                className="space-y-3 rounded-lg border-2 w-full p-4 lg:w-[30%] h-[80%] text-white transition-transform duration-300 hover:scale-110"
              >
                <div
                  style={{
                    backgroundImage: `url(${ele.projectImageUrl})`,
                    backgroundPosition: "center",
                  }}
                  className="aspect-4/2 bg-cover"
                />

                <h3 className="font-bold text-3xl">{ele.projectName}</h3>
                <div className="text">{ele.projectDesc}</div>

                <div className="link flex rounded-xl p-2 bg-neutral-700 items-center px-2 gap-2">
                  <span className="w-3 h-3 rounded-full border-2 border-red-500 bg-white"></span>
                  <a href={ele.projectLink}>click here to visit the website</a>
                </div>

                <div className="githublink bg-neutral-800 p-2 rounded-xl flex justify-normal w-full gap-2">
                  <div
                    className="bg-cover w-6 h-6 aspect-4/4"
                    style={{ backgroundImage: "url(/assets/svgs/githubsmall.svg)" }}
                  />
                  <div className="flex w-full">
                    <a href={ele.projectGithubLink}>click here for codes</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px w-[90%] mx-auto bg-linear-to-r from-transparent via-white to-transparent shadow-[0_0_10px_2px_rgba(255,255,255,0.6)]" />

          <h1 className="text-white [text-shadow:0_0_50px_#ffffff] text-3xl font-bold text-center p-4">
            Experience
          </h1>

          <Experience experiences={experiences} />

        </div>
      </div>
    </section>
  );
};

export default Projects;