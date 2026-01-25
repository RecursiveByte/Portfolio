import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const navBgAnimation = (navRef) => {


  gsap.fromTo(
    navRef.current,
    {
      backgroundColor: "rgba(0,0,0,0)",
    },
    {
      backgroundColor: "rgba(0,0,0,1)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=200",
        scrub: true,
      },
    }
  );
};
