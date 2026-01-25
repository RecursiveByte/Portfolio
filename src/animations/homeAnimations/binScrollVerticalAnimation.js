import gsap from "gsap";

export const binScrollVerticalAnimation = (col1, col2) => {
  const anim1 = gsap.to(col1, {
    yPercent: -50,
    duration: 5,
    repeat: -1,
    ease: "none",
  });

  const anim2 = gsap.fromTo(
    col2,
    { yPercent: -50 },
    {
      yPercent: 0,
      duration: 6,
      repeat: -1,
      ease: "none",
    }
  );

  const pause1 = () => anim1.timeScale(0);
  const play1 = () => anim1.timeScale(1);

  const pause2 = () => anim2.timeScale(0);
  const play2 = () => anim2.timeScale(1);

  col1.addEventListener("mouseenter", pause1);
  col1.addEventListener("mouseleave", play1);

  col2.addEventListener("mouseenter", pause2);
  col2.addEventListener("mouseleave", play2);

  return () => {
    anim1.kill();
    anim2.kill();

    col1.removeEventListener("mouseenter", pause1);
    col1.removeEventListener("mouseleave", play1);

    col2.removeEventListener("mouseenter", pause2);
    col2.removeEventListener("mouseleave", play2);
  };
};
