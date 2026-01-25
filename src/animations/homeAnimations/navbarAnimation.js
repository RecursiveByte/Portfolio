import gsap from "gsap";

export const navbarIntroAnimation = (navElement) => {
  if (!navElement) return;

  const items = navElement.querySelectorAll(".nav-item");

  gsap.fromTo(
    items,
    {
      y: -50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    }
  );
};
