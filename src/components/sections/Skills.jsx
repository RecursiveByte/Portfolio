import React from "react";
import { skills } from "@/data/data";
import { skillsIntroAnimation } from "../../animations/aboutAnimations/skillsAnimation";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainSkillsCard from "../common/MainSkillsCard";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    skillsIntroAnimation(skillsRef.current, wrapperRef.current);
  });

  return (
    <div ref={wrapperRef} className="perspective-distant w-screen ">
      <div
        ref={skillsRef}
        style={{ transformStyle: "preserve-3d" }}
        className="skillsContainer  w-screen min-h-screen flex flex-col gap-6 p-4"
      >
        {/* Heading */}
        <h1
          className="text-white 
      hover:[text-shadow:0_0_20px_rgba(255,255,255,0.7)]

      w-full mt-10 text-center text-4xl p-4"
        >
          Technical Skills
        </h1>

        {/* Skills Section */}
        <div className="skills w-full flex flex-col items-center lg:flex-wrap lg:flex-row lg:justify-evenly gap-6 justify-center lg:items-stretch">
          {/* Programming Languages */}
          <MainSkillsCard
            skills={skills.programmingLanguages}
            sectionName={"Programming Languages"}
          />

          {/* Frontend */}
          <MainSkillsCard skills={skills.frontend} sectionName={"Frontend"} />

          {/* Backend */}
          <MainSkillsCard skills={skills.backend} sectionName={"Backend"} />

          {/* AI/ML & Deep Learning */}
          <MainSkillsCard
            skills={skills.aiMl}
            sectionName={"AI/ML & Deep Learning"}
          />

          {/* Generative AI & Agentic Systems */}
          <MainSkillsCard
            skills={skills.genAndAgenticAi}
            sectionName={"Generative & Agentic AI"}
          />

          {/*devOps*/}
          <MainSkillsCard
            skills={skills.devops}
            sectionName={"DevOps & Cloud"}
          />
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
