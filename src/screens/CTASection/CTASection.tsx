import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { TextReveal } from "../../components/TextReveal";

const CTASection: React.FC = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "var(--bg-surface)",
        paddingTop: "clamp(100px, 12vw, 200px)",
        paddingBottom: "clamp(100px, 12vw, 200px)",
      }}
    >
      {/* Subtle accent line at top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px]"
        style={{
          width: "min(200px, 40%)",
          background:
            "linear-gradient(90deg, transparent, var(--accent), transparent)",
        }}
      />

      <div className="container-main text-center">
        {/* Section marker removed */}

        {/* Main CTA text */}
        <h2
          className="heading-display mx-auto mb-6"
          style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
        >
          <TextReveal text="BUILD SOMETHING" delay={0.2} />
          <br />
          <span style={{ color: "var(--accent)" }}>
            <TextReveal text="WITH US." delay={0.4} />
          </span>
        </h2>

        <p
          className="body-text reveal-up max-w-md mx-auto mb-12"
          style={{ transitionDelay: "0.7s" }}
        >
          Join a community of students who learn, build, and create together.
        </p>

        {/* CTA Button */}
        <div className="reveal-up" style={{ transitionDelay: "0.9s" }}>
          <a
            href="https://www.instagram.com/srm_cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group relative overflow-hidden text-base px-8 py-4"
          >
            <span className="relative z-10 flex items-center">
              JOIN 10X
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                <path
                  d="M1 15L15 1M15 1H6M15 1V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
