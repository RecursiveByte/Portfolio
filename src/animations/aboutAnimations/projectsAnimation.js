import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const projectsTimelineAnimation = (section, cards) => {
  if (!section || !cards?.length) return;

  gsap.fromTo(
    section,
    {
      x: 400,
      y: 400,
      opacity: 0,
    },
    {
      x: 0,
      y: 0,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "top center",
        scrub: 1,
      },
    }
  );

};