import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const skillsIntroAnimation = (container, wrapper) => {
  if (!container || !wrapper) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 0px)", () => {
    gsap.fromTo(
      container,
      {
        x: -1500,
        y: 1500,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 80%",
          end: "top 10%",
          scrub: true,
        },
      }
    );
  });

  return () => mm.revert();
};
