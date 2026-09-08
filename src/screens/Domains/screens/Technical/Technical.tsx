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
    title: "APP-DEV",
    image: "/Desktop-assets/phone1-1.png",
    imageAlt: "App Development",
    keywords: ["iOS", "Android", "React Native", "Mobile UI"],
  },
  {
    title: "AI/ML",
    image: "/Desktop-assets/newrobot-1.png",
    imageAlt: "AI and Machine Learning",
    keywords: ["Models", "Data Science", "Neural Networks", "Automation"],
  },
  {
    title: "WEB-DEV",
    image: "/Desktop-assets/1laptop-1.png",
    imageAlt: "Web Development",
    keywords: ["Frontend", "Backend", "Full-Stack", "APIs"],
  },
];

export const Technical = (): JSX.Element => {
  const sectionRef = useScrollReveal();

  return (
    <main
      ref={sectionRef}
      className="relative w-full min-h-screen"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-main section-spacing">
        {/* Section marker */}
        <div className="section-marker reveal">TECHNICAL DOMAINS</div>

        {/* Title */}
        <div className="reveal text-center mb-16 lg:mb-24">
          <h1
            className="heading-display mx-auto"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
          >
            TECHNICAL
          </h1>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {domainCards.map((card, i) => (
            <div
              key={card.title}
              className="reveal group flex flex-col items-center"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Card */}
              <div
                className="relative w-full aspect-[3/4] max-w-[240px] overflow-hidden mb-6 flex items-center justify-center transition-all duration-500 group-hover:border-[var(--accent)]"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                }}
              >
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-[60%] h-auto object-contain transition-transform duration-500 group-hover:scale-110"
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
                className="font-batman text-lg tracking-wider text-center transition-colors duration-300 group-hover:text-[var(--accent)]"
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

export default Technical;
