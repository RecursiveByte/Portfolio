import React, { useRef } from "react";
import Education from "../sections/Education";
import { useGSAP } from "@gsap/react";
import { overviewAnimation } from "@/animations/aboutAnimations/overviewAnimation.js";

const Overview = () => {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const overviewRef = useRef(null);
  const educationRef = useRef(null);

  useGSAP(() => {
    overviewAnimation(
      wrapperRef,
      containerRef,
      overviewRef,
      educationRef
    );
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="w-full min-h-screen p-4 bg-black flex justify-center items-center"
    >
      <div
        ref={containerRef}
        className="relative w-[90%] min-h-fit
        shadow-[0_0_20px_5px_rgba(255,255,255,0.7)]
        bg-black flex flex-col gap-10 p-8 rounded-md items-center"
      >
        {/* OVERVIEW */}
        <div
          ref={overviewRef}
          className="w-full flex overflow-hidden p-2 flex-col gap-6 text-white font-mono"
        >
          <h2 className="text-center mt-4 text-3xl sm:text-5xl font-bold">
            <span className="hover:[text-shadow:0_0_50px_#ffffff]">
              Over
              <span className="text-[#42b3f5] font-extrabold">view</span>
            </span>
          </h2>

          {/* ✅ YOUR ORIGINAL TEXT — UNCHANGED */}
          <p className="text-sm sm:text-lg lg:text-2xl leading-relaxed px-2">
            Passionate about technology and driven by curiosity, I love building
            solutions that blend creativity with code. Always eager to learn,
            explore, and grow in the ever-evolving tech landscape.
          </p>
        </div>

        {/* EDUCATION */}
        <div ref={educationRef} className="w-full overflow-hidden">
          <Education />
        </div>
      </div>
    </section>
  );
};

export default Overview;
