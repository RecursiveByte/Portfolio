import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const skillsIntroAnimation = (container, wrapper) => {
  if (!container || !wrapper) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    gsap.fromTo(
      container,
      {
        y: 200,
        rotateX: -60,
        opacity: 0,
      },
      {
        y: 0,
        rotateX: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "+=100%",
          scrub: 2,
          // pin: true,
        }
      }
    );
  });

  mm.add("(max-width: 1023px)", () => {
    const boxes = container.querySelectorAll(".skill-box");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "top -100%",
        scrub: 2,
      },
    });

    tl.fromTo(
      container,
      {
        x: 150,
        y: 150,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      }
    );

    tl.fromTo(
      boxes,
      {
        x: 120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 1,
        ease: "power3.out",
      }
    );
  });

  return () => mm.revert();
};
