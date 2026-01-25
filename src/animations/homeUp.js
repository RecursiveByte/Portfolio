import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const homeUp = (element) => {
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
      duration:1,
      delay:1,
      ease: "none",
    }
  );
};