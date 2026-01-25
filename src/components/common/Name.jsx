import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { welcomeAnimation } from "@/animations/welcomeAnimation.js";

const Name = ({ onFinish }) => {
  const containerRef = useRef(null);
  const lettersRef = useRef([]);

  useGSAP(() => {
    welcomeAnimation({
      container: containerRef.current,
      letters: lettersRef.current,
      onFinish,
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center ">
      <div
        ref={containerRef}
        className="
          overflow-hidden
          w-full
          px-4
          text-white
          flex
          justify-center
          items-center
          font-medium
          font-sans
          text-[clamp(3rem,10vw,9rem)]
          tracking-wider
        "
      >
        {"INTRODUCING".split("").map((l, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="inline-block"
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Name;
