import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MovingText from "../common/MovingText";
import { useMediaQuery } from "react-responsive";
import BinaryScrollHorizontal from "@/components/common/BinaryScrollHorizontal";
import BinScrollVertical from "@/components/common/BinScrollVertical";
import { useRef } from "react";
import { homeUp } from "../../animations/homeUp";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const homeRef = useRef(null);
  useGSAP(() => {
    homeUp(homeRef.current)
    gsap.to(".bg-video", {
      opacity: 1,
      duration: 19,
      ease: "power2.out",
      repeat: -1,
    });
  });

  return (
    <div 
    ref={homeRef}
    className="home relative w-screen h-screen overflow-hidden">
      <video
        className="bg-video absolute inset-0 w-full h-full object-cover opacity-0"
        src="/assets/videos/overlay.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <h1 className=" absolute left-[5%] top-[30%] text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-mono text-white">
        Hi, I’m <span className="text-[#42b3f5]">Retesh Mourya</span>
      </h1>

      <div className="absolute top-[45%] text-4xl xl:text-6xl xl:top-[45%] left-[5%]">
        <MovingText />
      </div>

      {isMobile ? (
        <div className="absolute w-screen h-screen ">
          <BinaryScrollHorizontal/>
        </div>
      ) : (
        <div className="absolute w-screen h-screen ">
          <BinScrollVertical/>
        </div>
      )}
    </div>
  );
};

export default Home;
