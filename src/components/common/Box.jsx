import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const boxes = [
  {
    icon: "/assets/svgs/react.svg",
    pos: "top-0 left-1/2 -translate-x-1/2",
  },
  {
    icon: "/assets/svgs/c++.svg",
    pos: "top-1/2 right-0 -translate-y-1/2",
  },
  {
    icon: "/assets/svgs/mongodb.svg",
    pos: "bottom-0 left-1/2 -translate-x-1/2",
  },
  {
    icon: "/assets/svgs/nodejs.svg",
    pos: "top-1/2 left-0 -translate-y-1/2",
  },
];

const Box = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    boxes.forEach(() => {
      tl.to(".intro", {
        // rotate: "+=90",
        // duration: 0.8,
        // ease: "power4.out",
        // repeat:-1
      });
    });

    tl.to(".intro", {
      // scale: 3,
      // opacity: 0,
      // duration: 1,
      // ease: "power4.inOut",
    });
  });

  return (
    <div
      style={{ transformStyle: "preserve-3d" }}
      className="intro absolute right-[15%] top-[20%] w-[35%] aspect-square rounded-full  flex items-center justify-center"
    >
      {boxes.map((box, i) => (
        <div
          key={i}
          className={`absolute w-[20%] aspect-square 
          flex items-center bg-white justify-center
          ${box.pos}`}
        >
          <img
            src={box.icon}
            alt="tech"
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default Box;
