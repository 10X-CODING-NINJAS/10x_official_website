import { useEffect, useRef } from "react";

/**
 * Custom hook that adds the 'revealed' class to elements with the 'reveal' class
 * when they enter the viewport via IntersectionObserver.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const elements = container.querySelectorAll(".reveal, .reveal-up, .reveal-clip, .reveal-blur, .reveal-scale, .word-reveal-wrapper, .divider");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
