import React, { useState } from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { TextReveal } from "../../../components/TextReveal";

interface Domain {
  name: string;
  category: "technical" | "non-technical";
  keywords: string[];
}

const domains: Domain[] = [
  {
    name: "AI / ML",
    category: "technical",
    keywords: ["Models", "Experiments", "Research", "Automation"],
  },
  {
    name: "WEB DEV",
    category: "technical",
    keywords: ["Frontend", "Backend", "Interfaces", "Deployment"],
  },
  {
    name: "APP DEV",
    category: "technical",
    keywords: ["iOS", "Android", "Mobile Products", "UI/UX"],
  },
  {
    name: "CORPORATE",
    category: "non-technical",
    keywords: ["Management", "Operations", "Strategy", "Outreach"],
  },
  {
    name: "CREATIVES",
    category: "non-technical",
    keywords: ["Design", "Graphics", "Visual Identity", "Media"],
  },
  {
    name: "SPONSORSHIP",
    category: "non-technical",
    keywords: ["Partnerships", "Networking", "Funding", "Collaboration"],
  },
];

function DomainPage() {
  const [activeDomain, setActiveDomain] = useState<number>(0);
  const sectionRef = useScrollReveal();

  return (
    <section
      id="domains"
      ref={sectionRef}
      className="relative w-full section-spacing overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="container-main">
        {/* Section Marker removed */}

        {/* Section Title */}
        <div className="reveal mb-16 lg:mb-20">
          <h2
            className="heading-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            <TextReveal text="WHERE YOU" delay={0.1} />
            <br />
            <span style={{ color: "var(--accent)" }}>
              <TextReveal text="CONTRIBUTE." delay={0.3} />
            </span>
          </h2>
        </div>

        {/* Desktop: Interactive split layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 reveal-up reveal-delay-1">
          {/* Left — Domain list */}
          <div className="flex flex-col gap-0">
            {domains.map((domain, i) => {
              const isActive = activeDomain === i;
              return (
                <button
                  key={domain.name}
                  onMouseEnter={() => setActiveDomain(i)}
                  onClick={() => setActiveDomain(i)}
                  className={`group text-left py-4 border-b transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? "border-[var(--accent)]"
                      : "border-[var(--border)] hover:border-[var(--border-hover)]"
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center gap-4">
                    {/* Accent indicator */}
                    <div
                      className={`w-[3px] h-8 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[var(--accent)] opacity-100"
                          : "bg-transparent opacity-0"
                      }`}
                    />
                    <span
                      className={`font-batman text-[clamp(1.2rem,2.5vw,1.8rem)] tracking-wider transition-colors duration-300 ${
                        isActive
                          ? "text-[var(--text-primary)]"
                          : "text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)]"
                      }`}
                    >
                      {domain.name}
                    </span>
                  </div>

                  {/* Category badge */}
                  <span
                    className={`label-upper text-[0.65rem] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                    }`}
                    style={{
                      color:
                        domain.category === "technical"
                          ? "var(--accent)"
                          : "var(--text-tertiary)",
                    }}
                  >
                    {domain.category}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right — Domain details */}
          <div className="flex flex-col justify-center min-h-[300px]">
            <div key={activeDomain} className="animate-fade-in-up" style={{ animationTimingFunction: "var(--ease-out-expo)" }}>
              {/* Domain name large */}
              <h3
                className="font-batman tracking-wider mb-8"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  color: "var(--accent)",
                }}
              >
                {domains[activeDomain].name}
              </h3>

              {/* Keywords */}
              <div className="flex flex-wrap gap-3 mb-8">
                {domains[activeDomain].keywords.map((keyword, i) => (
                  <span
                    key={keyword}
                    className="px-4 py-2 text-sm font-montserrat font-medium tracking-wider uppercase border"
                    style={{
                      color: "var(--text-secondary)",
                      borderColor: "var(--border)",
                      borderRadius: "2px",
                      animationDelay: `${i * 80}ms`,
                    }}
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              {/* Category label */}
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-[1px]"
                  style={{ background: "var(--border)" }}
                />
                <span className="label-upper text-[0.7rem]">
                  {domains[activeDomain].category === "technical"
                    ? "Technical Domain"
                    : "Non-Technical Domain"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion-style list */}
        <div className="lg:hidden flex flex-col gap-0 reveal">
          {domains.map((domain, i) => {
            const isOpen = activeDomain === i;
            return (
              <div
                key={domain.name}
                className="border-b"
                style={{ borderColor: "var(--border)" }}
              >
                <button
                  onClick={() => setActiveDomain(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-batman text-lg tracking-wider transition-colors duration-300 ${
                      isOpen
                        ? "text-[var(--accent)]"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {domain.name}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    <path
                      d="M8 3V13M3 8H13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {/* Expandable content */}
                <div
                  className={`overflow-hidden transition-all duration-400 ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {domain.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="px-3 py-1.5 text-xs font-montserrat font-medium tracking-wider uppercase border"
                        style={{
                          color: "var(--text-secondary)",
                          borderColor: "var(--border)",
                          borderRadius: "2px",
                        }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <span
                    className="label-upper text-[0.65rem]"
                    style={{
                      color:
                        domain.category === "technical"
                          ? "var(--accent)"
                          : "var(--text-tertiary)",
                    }}
                  >
                    {domain.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default DomainPage;
