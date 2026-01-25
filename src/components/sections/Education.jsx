import React from "react";
import { educationData } from "@/data/data";

const Education = () => {

    
  return (
    <div className="education font-mono w-full flex flex-col gap-3 mt-6">
      
      <h3 className="text-2xl sm:text-3xl font-bold text-[#42b3f5] ">
        Education
      </h3>

      <ul className="list-disc ml-6 space-y-3">
        {educationData.map((item, index) => (
          <li key={index} className="text-lg sm:text-xl text-gray-200">
            <strong className="text-white">{item.level}</strong> —{" "}
            {item.institution}
            <br />
            {item.scoreType.toUpperCase()}:{" "}
            <span className="text-[#42b3f5] font-semibold">
              {item.score}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
