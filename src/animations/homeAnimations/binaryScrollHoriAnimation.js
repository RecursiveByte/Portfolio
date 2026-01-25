import gsap from "gsap";

export const binaryScrollHoriAnimation = (row1, row2) => {
  const tl = gsap.timeline();

  tl.to(row1, {
    xPercent: -50,
    duration: 7,
    repeat: -1,
    ease: "none",
  });

  tl.fromTo(
    row2,
    { xPercent: -50 },
    {
      xPercent: 0,
      duration: 7,
      repeat: -1,
      ease: "none",
    },
    0
  );

  return tl;
};
