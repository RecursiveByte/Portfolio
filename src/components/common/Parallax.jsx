import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { parallaxTimeline } from "@/animations/aboutAnimations/parallaxAnimations.js";

const Parallax = () => {
  const pinRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    parallaxTimeline(pinRef, textRef);
  }, []);

  return (
    <section className="parallax-cont relative w-full bg-black overflow-hidden">
      <div
        ref={pinRef}
        className="relative h-screen flex items-center overflow-hidden"
      >
        <div
          className="absolute  inset-0 bg-center bg-cover bg-no-repeat z-0"
          style={{
            backgroundImage: "url('/assets/images/tech-bg.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/60 z-1" />

        <h1
          ref={textRef}
          className="relative z-10 -right-full w-max whitespace-nowrap
                     text-[18vw] sm:text-[12vw] md:text-[10vw]
                     font-bold uppercase text-white leading-none px-4"
        >
          Curiosity drives me to explore build and solve through technology
        </h1>
      </div>
    </section>
  );
};

export default Parallax;
