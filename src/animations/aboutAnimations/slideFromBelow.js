import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const slideFromBelow = (element) => {
  if (!element) return;

  gsap.fromTo(
    element,
    {
      y: 300,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    }
  );
};