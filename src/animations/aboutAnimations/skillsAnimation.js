import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const skillsIntroAnimation = (container, wrapper) => {
  if (!container || !wrapper) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    // Force hardware acceleration and containment
    gsap.set(wrapper, {
      overflow: "hidden",
      willChange: "transform",
    });

    gsap.set(container, {
      willChange: "transform",
      backfaceVisibility: "hidden",
    });

    // Pin with proper spacing
    ScrollTrigger.create({
      trigger: wrapper,
      start: "top top",
      end: "+=150%", // Adjust this value
      pin: true,
      pinSpacing: "margin", // This is key
      anticipatePin: 1,
      markers: false, // Debug
    });

    // Animation
    gsap.fromTo(
      container,
      {
        y: 300,
        rotateX: -45,
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
          end: "bottom top",
          scrub: 1.5,
          // markers: true, // Debug
        },
      }
    );
  });

  mm.add("(max-width: 1023px)", () => {
    // Mobile - no 3D transforms
    gsap.fromTo(
      container,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );
  });

  // Refresh ScrollTrigger after a delay
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);

  return () => {
    mm.revert();
    ScrollTrigger.getAll().forEach(st => st.kill());
  };
};
