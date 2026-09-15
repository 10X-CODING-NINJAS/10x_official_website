import React, { useRef, useEffect, useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { TextReveal } from "../../components/TextReveal";

interface Event {
  id: number;
  name: string;
  img: string;
}

const events: Event[] = [
  { id: 1, name: "CAMPUS QUEST 5.0", img: "./EventsPage/cq5.0.jpg" },
  { id: 2, name: "CAMPUS QUEST 4.0", img: "./EventsPage/cq4.0.png" },
  { id: 3, name: "CAMPUS QUEST 3.0", img: "./EventsPage/CQ3.0.png" },
  { id: 4, name: "CTRL ALT DELETE 3.0", img: "./EventsPage/cad3.0.png" },
];

const EventsSection: React.FC = () => {
  const sectionRef = useScrollReveal();
  const containerRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // References for the Lerp animation loop
  const targetProgress = useRef(0);
  const currentProgress = useRef(0);

  // 1. Listen to scroll events and ONLY update the target progress (no React state updates)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrollableDistance = height - windowHeight;
      let progress = -top / scrollableDistance;
      
      // Clamp between 0 and 1
      targetProgress.current = Math.max(0, Math.min(1, progress));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. The Render Loop: Smoothly interpolates the current progress to the target
  useEffect(() => {
    let rafId: number;

    const render = () => {
      // Lerp (Linear Interpolation). The 0.08 is the smoothness factor. Lower = smoother/slower.
      currentProgress.current += (targetProgress.current - currentProgress.current) * 0.08;

      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const clientWidth = window.innerWidth;
        const maxTranslate = Math.max(0, scrollWidth - clientWidth + 40);

        carouselRef.current.style.transform = `translateX(-${currentProgress.current * maxTranslate}px)`;
      }

      if (progressRef.current) {
        progressRef.current.style.width = `${Math.max(5, currentProgress.current * 100)}%`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      id="events"
      ref={containerRef}
      className="relative w-full"
      style={{ background: "var(--bg-primary)", height: "300vh" }}
    >
      {/* Sticky wrapper that locks the view and holds the content */}
      <div 
        ref={sectionRef} 
        className="sticky top-0 w-full h-[100dvh] flex flex-col justify-center overflow-hidden"
      >
        <div className="container-main mb-10 lg:mb-14">
          {/* Section Marker removed */}

          {/* Heading */}
          <div className="relative z-10">
            <h2
              className="heading-display"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              <TextReveal text="WHAT HAPPENS" delay={0.1} />
              <br />
              <span style={{ color: "var(--accent)" }}>
                <TextReveal text="HERE." delay={0.4} />
              </span>
            </h2>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="relative w-full reveal-scale reveal-delay-1 pl-[var(--container-padding)] pb-4">
          <div
            ref={carouselRef}
            className="flex gap-6 sm:gap-8 flex-nowrap w-max pr-[var(--container-padding)]"
            style={{ willChange: "transform" }}
          >
            {/* The Events */}
            {[...events, ...events, ...events].map((event, i) => (
              <div
                key={`${event.id}-${i}`}
                className="shrink-0 w-[82vw] sm:w-[380px] md:w-[440px] group flex flex-col"
              >
                {/* Event Poster Card */}
                <div
                  className="relative overflow-hidden transition-all duration-500 mb-6 aspect-[4/5] bg-[var(--bg-surface)] rounded-xl border border-[var(--border)] group-hover:border-[var(--accent)] group-hover:shadow-[0_0_30px_rgba(255,82,0,0.25)]"
                >
                  <img
                    src={event.img}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                </div>

                {/* Event Title and Details */}
                <div className="flex items-center gap-4">
                  <span
                    className="font-batman text-2xl sm:text-3xl leading-none"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {String((i % events.length) + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="font-batman text-lg sm:text-xl tracking-wider mb-1 transition-colors duration-300 group-hover:text-[var(--accent)] text-white"
                    >
                      {event.name}
                    </h3>
                    <span className="label-upper text-[0.65rem] text-[var(--accent)]">
                      Past Event
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Progress Bar Indicator */}
          <div className="container-main mt-8">
            <div className="w-full h-1 bg-[var(--bg-surface)] rounded-full overflow-hidden border border-[var(--border)]">
              <div
                ref={progressRef}
                className="h-full bg-[var(--accent)] rounded-full"
                style={{ width: "5%", willChange: "width" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;