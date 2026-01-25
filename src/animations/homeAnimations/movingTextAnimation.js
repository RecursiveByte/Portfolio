import gsap from "gsap";

export const movingTextAnimation = (elements) => {
  gsap.set(elements, {
    opacity: 0,
    y: 50,
  });

  const tl = gsap.timeline({ repeat: -1 });

  elements.forEach((el) => {
    tl.to(el, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
      .to(el, { duration: 2 })
      .to(el, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.in",
      });
  });

  return tl;
};
