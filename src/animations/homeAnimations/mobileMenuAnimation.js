import { gsap } from "gsap";

export const openMobileMenu = (menu) => {
  gsap.fromTo(
    menu,
    {
      maxHeight: 0,
      opacity: 0,
    },
    {
      maxHeight: "100vh",
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }
  );
};

export const closeMobileMenu = (menu, onComplete) => {
  gsap.to(menu, {
    maxHeight: 0,
    opacity: 0,
    duration: 1,
    ease: "power3.inOut",
    onComplete,
  });
};
