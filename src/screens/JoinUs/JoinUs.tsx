import React, { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const domains = [
  {
    name: "AI / ML",
    area: "T",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfl2qaoKMVngB109o1KV-mTvGNnaH6dK6pfldB22WgIY9mOdg/viewform",
    desc: "Train models, explore neural networks, and shape the future of AI.",
  },
  {
    name: "WEB DEV",
    area: "R",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfa68DxujA9t5e7MAUkMOovWboZL_xOrBp8pxThY6Nai_i0CA/viewform?usp=dialog",
    desc: "Build stunning user interfaces and robust backend architectures.",
  },
  {
    name: "APP DEV",
    area: "L",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeiXVMzLaxJx_RANWMLADFRIEh1kimKgD_McnQgMX8UwHV0MQ/viewform",
    desc: "Craft seamless mobile experiences for iOS and Android.",
  },
  {
    name: "CORPORATE",
    area: "C",
    link: "https://forms.gle/BXsWRXwXq9XvJfbE6",
    desc: "Master the art of management, operations, and strategy.",
  },
  {
    name: "CREATIVES",
    area: "BL",
    link: "https://forms.gle/NeayKsLd5cHg2hDk7",
    desc: "Design visual identities, graphics, and immersive media.",
  },
  {
    name: "SPONSORSHIP",
    area: "BR",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSeKxqRqKq3kw5yKeNjtg4qlZ-xaCs70mhHNjdFMBH8-sjK5TA/viewform",
    desc: "Drive partnerships, secure funding, and build networks.",
  }
];

const JoinUs: React.FC = () => {
  const revealRef = useScrollReveal();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-12 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-[1200px] w-full flex-1 flex flex-col" ref={revealRef}>
        
        {/* Header Section */}
        <div className="mb-12 text-center reveal-up">
          <h1 className="heading-display mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            <span className="text-[var(--text-primary)]">CHOOSE YOUR </span>
            <span style={{ color: "var(--accent)" }}>DOMAIN.</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto text-[1.1rem]">
            Applications are now open. Select a domain below to apply and become part of the 10X legacy.
          </p>
        </div>

        {/* Mobile / Tablet Layout (Stack) */}
        <div className="lg:hidden flex flex-col gap-4 w-full max-w-md mx-auto reveal-up reveal-delay-1">
          {domains.map((domain, i) => (
            <div
              key={domain.name}
              className="relative overflow-hidden rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-batman text-2xl text-[var(--text-primary)]">
                  {domain.name}
                </h2>
                <span className="font-batman text-2xl text-[var(--accent)] opacity-30">
                  0{i + 1}
                </span>
              </div>
              <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                {domain.desc}
              </p>
              <a 
                href={domain.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center gap-2 px-5 py-3 text-sm font-bold tracking-wider uppercase transition-colors bg-[var(--accent)] text-black rounded-lg hover:bg-white"
              >
                Apply Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Desktop Layout (Strict Bento Grid) */}
        <div className="hidden lg:grid w-full max-w-[800px] aspect-square mx-auto reveal-scale reveal-delay-1 gap-4"
             style={{
               gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
               gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
               gridTemplateAreas: `
                 ".  T  T  R "
                 "L  L  C  R "
                 ".  BL BR BR"
                 ".  BL .  . "
               `
             }}>
          {domains.map((domain, i) => (
            <div
              key={domain.name}
              className="relative overflow-hidden bg-[var(--bg-surface)] border border-[var(--border)] rounded-2xl group transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_30px_rgba(255,82,0,0.1)]"
              style={{ gridArea: domain.area }}
            >
              {/* Default State */}
              <div className="absolute inset-0 p-4 lg:p-5 flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                <div className="font-batman text-3xl lg:text-4xl text-[var(--accent)] opacity-20">
                  0{i + 1}
                </div>
                <h2 
                  className="font-batman tracking-wider text-[var(--text-primary)] leading-tight"
                  style={{ 
                    fontSize: ['C', 'R', 'BL'].includes(domain.area) ? 'clamp(0.9rem, 2vw, 1.1rem)' : 'clamp(1.2rem, 3vw, 1.75rem)'
                  }}
                >
                  {domain.name}
                </h2>
              </div>

              {/* Hover State Overlay */}
              <div className="absolute inset-0 bg-[#0A0A0A] p-4 lg:p-5 flex flex-col justify-center items-start z-10 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <h2 
                  className="font-batman text-[var(--accent)] mb-2"
                  style={{ fontSize: ['C', 'R', 'BL'].includes(domain.area) ? '1rem' : '1.25rem' }}
                >
                  {domain.name}
                </h2>
                <p 
                  className="text-[var(--text-secondary)] leading-snug mb-4"
                  style={{ 
                    fontSize: ['C', 'R', 'BL'].includes(domain.area) ? '0.7rem' : '0.8rem',
                    display: '-webkit-box',
                    WebkitLineClamp: domain.area === 'C' ? 2 : 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {domain.desc}
                </p>
                <a 
                  href={domain.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[0.65rem] lg:text-xs font-bold tracking-wider uppercase transition-colors bg-[var(--accent)] text-black rounded-lg hover:bg-white w-full"
                >
                  Apply Now
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
