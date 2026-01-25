import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { slideFromLeft } from "../../animations/aboutAnimations/slideFromLeft";
import { linksData } from "../../data/data";

const Links = () => {
  const linksRef = useRef(null);

  useGSAP(() => {
    slideFromLeft(linksRef.current);
  });

  return (
    <div
      ref={linksRef}
      className="links w-full  gap-3 flex flex-col justify-center text-white py-4"
    >
      {linksData.map((link, index) => (
        <div
          key={index}
          className="rounded-lg p-2 w-full flex flex-col sm:flex-row sm:gap-4 text-xl sm:text-3xl bg-gray-900"
        >
          <span className="flex items-center justify-center text-[#42b3f5]">
            {link.name}
          </span>

          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 hover:text-[#42b3f5] transition-all duration-300"
          >
            <img
              src={link.icon}
              alt={link.name}
              className="aspect-square w-8 logo"
            />
            {link.username}
          </a>
        </div>
      ))}
    </div>
  );
};

export default Links;
