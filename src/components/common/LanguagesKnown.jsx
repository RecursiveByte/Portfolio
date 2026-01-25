import React from "react";
import { useRef } from "react";
import { languages } from "../../data/data";
import { useGSAP } from "@gsap/react";
import { slideFromLeft } from "../../animations/aboutAnimations/slideFromLeft";


const LanguagesKnown = () => {
    const languagesRef = useRef(null);

    useGSAP(() => {
      slideFromLeft(languagesRef.current);
    });

  return (
    <div 
    ref={languagesRef}
    className="languageCon tainer rounded-md p-4 bg-transparent text-white">
      <h3 className="text-2xl ml-2 space-y-3 font-bold mb-4" style={{ color: '#42b3f5' }}>
        Languages Known
      </h3>
      <ul  className="">
        {languages.map((ele, id) => (
          <span key={id}>
            <li className="flex justify-normal p-2 items-center">
              <span className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: '#42b3f5' }}></span>
              <span>
                <strong>{ele.title}</strong>: {ele.description}
              </span>
            </li>
          </span>
        ))}
      </ul>
    </div>
  );
};

export default LanguagesKnown;