import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const skillsIntroAnimation = (container, wrapper) => {
  if (!container || !wrapper) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    // First, create a ScrollTrigger that PINS the wrapper
    ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "+=150%", // This controls how long it stays pinned
      pin: true,
      pinSpacing: true, // Important: prevents extra space
      anticipatePin: 1,
      markers: false, // Set to true to see the pin boundaries
    });

    // Now your animation timeline
    const boxes = container.querySelectorAll(".skill-box");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper, // Trigger on wrapper, not container
        start: "top top", // Start when wrapper hits top
        end: "+=150%", // Match the pin duration
        scrub: 2,
        // No pin here - we already pinned above
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
        stagger: 0.5, // Reduced from 1 for better timing
        ease: "power3.out",
      },
      "-=0.5" // Start this animation slightly earlier
    );
  });

  mm.add("(max-width: 1023px)", () => {
    // For mobile - optional pin or simpler animation
    const boxes = container.querySelectorAll(".skill-box");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "top 30%",
        scrub: 2,
        // No pin on mobile for better UX
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
        stagger: 0.3,
        ease: "power3.out",
      },
      "-=0.3"
    );
  });

  return () => mm.revert();
};
