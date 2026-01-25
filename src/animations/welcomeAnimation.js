import { gsap } from "gsap";

export const welcomeAnimation = ({
  container,
  letters,
  onFinish,
}) => {
  const tl = gsap.timeline({
    onComplete: onFinish,
  });

  tl.from(letters, {
    y: 200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power4.out",
  })
    .to({}, { duration: 0.5 })
    .to(container, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power4.Out",
    });

  return tl;
};
