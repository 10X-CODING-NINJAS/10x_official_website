import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const LandingPage = (): JSX.Element => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger staggered animations after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      setMousePos({ x, y });
    };

    // Only on desktop
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const heroWords = [
    { text: "LEARN", accent: false },
    { text: "BUILD", accent: true },
    { text: "SHIP", accent: false },
    { text: "REPEAT", accent: false },
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-grid"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Subtle accent glow — top right */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,82,0,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* 10X watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <span
          className="font-batman text-[clamp(12rem,25vw,22rem)] leading-none tracking-wider"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.04)",
          }}
        >
          10X
        </span>
      </div>

      {/* Content */}
      <div className="container-main relative z-10 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-20 py-16 lg:py-0">
        {/* Left — manifesto text */}
        <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Section marker removed */}

          {/* Hero words */}
          <div className="space-y-1 mb-8">
            {heroWords.map((word, i) => (
              <h1
                key={word.text}
                className="heading-display"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  color: word.accent ? "var(--accent)" : "var(--text-primary)",
                }}
              >
                <span className={`word-reveal-wrapper ${loaded ? "revealed" : ""}`}>
                  <span className="word-reveal-inner" style={{ transitionDelay: `${0.3 + i * 0.15}s` }}>
                    {word.text}.
                  </span>
                </span>
              </h1>
            ))}
          </div>

          {/* Tagline */}
          <p
            className={`body-text max-w-lg mb-10 reveal-up ${loaded ? "revealed" : ""}`}
            style={{ transitionDelay: "0.85s" }}
          >
            Coding Ninjas 10X Club SRM is a community of builders and curious
            minds — learning, creating, and shipping impact with technology.
          </p>

          {/* CTA */}
          <div
            className={`reveal-up ${loaded ? "revealed" : ""}`}
            style={{ transitionDelay: "1s" }}
          >

            <Link
              to="/join"
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                JOIN 10X
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M1 13L13 1M13 1H5M13 1V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Right — 10X Logo */}
        <div
          className={`w-full lg:w-2/5 flex items-center justify-center reveal-blur ${loaded ? "revealed" : ""}`}
          style={{ transitionDelay: "0.7s" }}
        >
          <img
            src="./Footer/10X Logo.svg"
            alt="10X Club SRM Logo"
            className="w-[180px] sm:w-[240px] md:w-[280px] lg:w-[320px] object-contain transition-transform duration-[2s] ease-out-expo"
            style={{
              filter: "drop-shadow(0 0 40px rgba(255,82,0,0.15))",
              transform: loaded ? `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px) scale(1)` : "scale(0.9)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;