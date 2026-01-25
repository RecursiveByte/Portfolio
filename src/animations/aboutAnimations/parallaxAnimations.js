import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const parallaxTimeline = (pinRef, textRef) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: pinRef.current,
      start: "top top",
      end: "+=400%",
      scrub: 2,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
    },
  });

  tl.from(pinRef.current, {
    x: -300,
    y: 200,
    opacity: 0,
    duration: 0.5,
    ease: "power4.out",
  }).to(textRef.current, {
    xPercent: -150,
    ease: "none",
  });

  return tl;
};
