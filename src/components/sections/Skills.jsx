import React from "react";
import { skills } from "@/data/data";
import { skillsIntroAnimation } from "../../animations/aboutAnimations/skillsAnimation";
import { useRef,useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const skillsRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    skillsIntroAnimation(skillsRef.current,wrapperRef.current);
  });

  useEffect(() => {
    const handleLoad = () => {
      // Wait for fonts and images
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

    return (
    <div 
    ref={wrapperRef}
    className="perspective-distant w-screen bg-red-500 z-10">
    <div 
    ref={skillsRef}
    style={{transformStyle:"preserve-3d"}}
    className="skillsContainer  w-screen min-h-screen flex flex-col gap-6 p-4">

      {/* Heading */}
      <h1 className="text-white 
      hover:[text-shadow:0_0_20px_rgba(255,255,255,0.7)]

      w-full mt-10 text-center text-4xl p-4">
        Technical Skills
      </h1>

      {/* Skills Section */}
      <div className="skills w-full flex flex-col items-center lg:flex-row lg:justify-evenly gap-6 justify-center lg:items-stretch">

        {/* Programming Languages */}
        <div className="skill-box w-[90%] xl:w-[25%] border-2 rounded-xl p-4">
          <h3 className="text-3xl text-white mb-3">
            Programming Languages
          </h3>

          <div className="flex flex-col gap-4">
            {skills.programmingLanguages.map((ele, id) => (
              <div key={id} className="flex gap-3 items-center">
                <img
                  className="w-10"
                  src={`/assets/svgs/${ele.name}.svg`}
                  alt={ele.name}
                />
                <p className="text-2xl text-white">{ele.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="skill-box w-[90%] xl:w-[25%] border-2 rounded-xl p-4">
          <h3 className="text-3xl text-white mb-3">Frontend</h3>

          <div className="flex flex-col gap-4">
            {skills.frontend.map((ele, id) => (
              <div key={id} className="flex gap-3 items-center">
                <img
                  className="w-10"
                  src={`/assets/svgs/${ele.name}.svg`}
                  alt={ele.name}
                />
                <p className="text-2xl text-white">{ele.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="skill-box w-[90%]  xl:w-[25%] border-2 rounded-xl p-4">
          <h3 className="text-3xl text-white mb-3">Backend</h3>

          <div className="flex flex-col gap-4">
            {skills.backend.map((ele, id) => (
              <div key={id} className="flex gap-3 items-center">
                <img
                  className="w-10"
                  src={`/assets/svgs/${ele.name}.svg`}
                  alt={ele.name}
                />
                <p className="text-2xl text-white">{ele.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tools */}
       <div className="skill-box w-[90%] lg:w-full xl:w-[90%] mx-auto border-2  rounded-xl p-4">
        <h3 className="text-3xl text-white mb-3">Tools</h3>

        <div className="flex  flex-wrap gap-6">
          {skills.tools.map((ele, id) => (
            <div key={id} className="flex gap-3 items-center">
              <img
                className="w-10"
                src={`/assets/svgs/${ele.name}.svg`}
                alt={ele.name}
              />
              <p className="text-2xl text-white">{ele.name}</p>
            </div>
          ))}
        </div>
      </div> 

    </div>
    </div>
  );
};

export default Skills;
