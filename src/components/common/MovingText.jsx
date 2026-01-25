import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { movingTextAnimation } from "@/animations/homeAnimations/movingTextAnimation";

const texts = [
  "FULL STACK WEB DEVELOPER",
  "AI ML ENGINEER",
  "DATA ANALYST",
];

const MovingText = () => {
  const textRefs = useRef([]);

  useGSAP(() => {
    const tl = movingTextAnimation(textRefs.current);
    return () => tl.kill();
  }, []);

  return (
    <div className="relative w-112.5 h-75 overflow-hidden">

      {texts.map((text, index) => (
        <h1
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
          className="absolute left-0 top-0 font-bold uppercase text-white"
        >
          {text}
        </h1>
      ))}
    </div>
  );
};

export default MovingText;
