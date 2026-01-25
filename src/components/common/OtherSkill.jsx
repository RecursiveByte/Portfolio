import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { slideFromLeft } from "../../animations/aboutAnimations/slideFromLeft";
import { otherSkills } from "../../data/data";

const OtherSkills = () => {
  const skillsRef = useRef(null);

  useGSAP(() => {
    slideFromLeft(skillsRef.current);
  });

  return (
    <div ref={skillsRef} className="p-6 bg-transparent rounded-lg shadow-lg text-white">
      <h2 className="text-2xl font-bold mb-4 text-[#42b3f5]">Other Skills</h2>
      <ul className="space-y-3">
        {otherSkills.map((skill, index) => (
          <li key={index} className="flex items-center">
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

export default OtherSkills;