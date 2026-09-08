import React from "react";
import { useScrollReveal } from "../../../../hooks/useScrollReveal";

interface DomainCard {
  title: string;
  image: string;
  imageAlt: string;
  keywords: string[];
}

const domainCards: DomainCard[] = [
  {
    title: "CREATIVES",
    image: "/NonTech-assets/Creatives.png",
    imageAlt: "Creatives",
    keywords: ["Design", "Graphics", "Visual Identity", "Media"],
  },
  {
    title: "CORPORATE",
    image: "/NonTech-assets/coorp.png",
    imageAlt: "Corporate",
    keywords: ["Management", "Operations", "Strategy", "Planning"],
  },
  {
    title: "SPONSORSHIP",
    image: "/NonTech-assets/sponsi.png",
    imageAlt: "Sponsorship",
    keywords: ["Partnerships", "Funding", "Networking", "Outreach"],
  },
];

export const MobileDomain = (): JSX.Element => {
  const sectionRef = useScrollReveal();

  return (
    <main
      ref={sectionRef}
      className="relative w-full min-h-screen"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-main section-spacing">
        {/* Section marker */}
        <div className="section-marker reveal">NON-TECHNICAL DOMAINS</div>

        {/* Title */}
        <div className="reveal text-center mb-16 lg:mb-24">
          <h1
            className="heading-display mx-auto"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            NON TECHNICAL
          </h1>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {domainCards.map((card, i) => (
            <div
              key={card.title}
              className="reveal group flex flex-col items-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Card */}
              <div
                className="relative w-full aspect-[3/4] max-w-[220px] overflow-hidden mb-6 flex items-center justify-center transition-all duration-500 group-hover:border-[var(--accent)]"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                }}
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-[55%] h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-end pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(10,10,10,0.85), transparent 60%)",
                  }}
                >
                  <div className="flex flex-wrap justify-center gap-1 px-3">
                    {card.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-[0.65rem] font-montserrat font-medium uppercase tracking-wider px-2 py-1"
                        style={{
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border)",
                          borderRadius: "2px",
                        }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3
                className="font-batman text-base tracking-wider text-center transition-colors duration-300 group-hover:text-[var(--accent)]"
                style={{ color: "var(--text-primary)" }}
              >
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MobileDomain;
