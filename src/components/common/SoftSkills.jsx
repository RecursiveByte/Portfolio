import React from "react";
import { useRef } from "react";
import { softSkills } from "../../data/data";
import { slideFromLeft } from "../../animations/aboutAnimations/slideFromLeft";
import { useGSAP } from "@gsap/react";

const SoftSkills = () => {
  const softRef = useRef(null);

  useGSAP(() => {
    slideFromLeft(softRef.current);
  });
  return (
      <div 
      ref={softRef}
    className="p-6 bg-transparent rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4 text-[#42b3f5]">
        Soft Skills
      </h2>
      <ul
        className="space-y-3 "
      >
        {softSkills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center"
          >
            <span className="w-4 h-4 bg-[#42b3f5] rounded-full mr-3"></span>
            <span>
              <strong>{skill.title}</strong>: {skill.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoftSkills;
