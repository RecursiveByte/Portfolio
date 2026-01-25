import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const overviewAnimation = (
  wrapperRef,
  containerRef,
  overviewRef,
  educationRef
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperRef.current,
      start: "top top",
      end: "+=700",
      scrub: 2,
      pin: true,
      anticipatePin: 1
    },
  });

  tl.from(containerRef.current, {
    x: 600,
    y: 250,
    opacity: 0,
    ease: "power4.out",
  });

  tl.from(overviewRef.current, {
    x: 120,
    opacity: 0,
    ease: "power3.out",
  });

  tl.from(educationRef.current, {
    x: -120,
    opacity: 0,
    ease: "power3.out",
  });

  return tl;
};
