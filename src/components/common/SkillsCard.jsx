import React from "react";
import { useRef } from "react";
import { slideFromLeft } from "../../animations/aboutAnimations/slideFromLeft";
import { useGSAP } from "@gsap/react";


const SkillsCard = ({skills,sectionName}) => {
  const skillRef = useRef(null);

  useGSAP(() => {
    slideFromLeft(skillRef.current);
  });
  return (
      <div 
      ref={skillRef}
    className="p-6 bg-transparent rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4 text-[#42b3f5]">
        {sectionName}
      </h2>
      <ul
        className="space-y-3 "
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center"
          >
            <span className="w-4 h-4 bg-[#42b3f5] rounded-full mr-3"></span>
            <span>
              {skill.description ? (
                <>
                <strong>{skill.title}</strong> : {skill.description}
                </>)
                : <strong className="text-xl" >{skill.title}</strong>}
               
             
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
