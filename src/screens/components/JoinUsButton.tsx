import React, { useState, useRef, useEffect } from "react";

/* ─── Custom SVG Icons ─────────────────────────────────────────────────────── */

const IconWeb = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="10" r="8.5" />
    <path d="M10 1.5C10 1.5 7 5.5 7 10s3 8.5 3 8.5" />
    <path d="M10 1.5C10 1.5 13 5.5 13 10s-3 8.5-3 8.5" />
    <line x1="1.5" y1="7.5" x2="18.5" y2="7.5" />
    <line x1="1.5" y1="12.5" x2="18.5" y2="12.5" />
  </svg>
);

const IconAI = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="14" height="10" rx="2" />
    <path d="M7 6V4a3 3 0 0 1 6 0v2" />
    <circle cx="7.5" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="12.5" cy="11" r="1" fill="currentColor" stroke="none" />
    <path d="M8 14h4" />
    <line x1="1.5" y1="9" x2="3" y2="9" />
    <line x1="17" y1="9" x2="18.5" y2="9" />
  </svg>
);

const IconApp = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="1.5" width="10" height="17" rx="2" />
    <line x1="8" y1="5" x2="12" y2="5" />
    <circle cx="10" cy="15.5" r="0.8" fill="currentColor" stroke="none" />
    <rect x="7.5" y="8" width="5" height="4" rx="0.8" />
  </svg>
);

const IconCorporate = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="16" height="11" rx="1" />
    <path d="M6 7V5a4 4 0 0 1 8 0v2" />
    <line x1="10" y1="11" x2="10" y2="14" />
    <line x1="7.5" y1="12.5" x2="12.5" y2="12.5" />
  </svg>
);

const IconCreatives = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 14.5C2 14.5 4 10 7.5 10c2 0 3 2 5 2 2.5 0 4-4 4-4" />
    <circle cx="4" cy="5.5" r="2" />
    <circle cx="10.5" cy="3.5" r="2" />
    <circle cx="17" cy="6" r="2" />
    <line x1="2" y1="17.5" x2="18" y2="17.5" />
  </svg>
);

const IconSponsorship = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 2l2.2 4.5 5 .7-3.6 3.5.85 4.9L10 13.1l-4.45 2.5.85-4.9L2.8 7.2l5-.7z" />
    <path d="M7 17.5l3 1 3-1" />
  </svg>
);

const DOMAIN_ICONS: Record<string, React.FC> = {
  "Web Development": IconWeb,
  AIML: IconAI,
  "App Development": IconApp,
  Corporate: IconCorporate,
  Creatives: IconCreatives,
  Sponsorship: IconSponsorship,
};

/* ─── Domain Data ──────────────────────────────────────────────────────────── */

const domainOptions = [
  {
    label: "Web Development",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfa68DxujA9t5e7MAUkMOovWboZL_xOrBp8pxThY6Nai_i0CA/viewform?usp=dialog",
  },
  {
    label: "AIML",
    url: "https://forms.gle/SK2ib8Gh938J6WDD8",
  },
  {
    label: "App Development",
    url: "https://forms.gle/oVsz4vCKupcKLLdB7",
  },
  {
    label: "Corporate",
    url: "https://forms.gle/BXsWRXwXq9XvJfbE6",
  },
  {
    label: "Creatives",
    url: "https://forms.gle/NeayKsLd5cHg2hDk7",
  },
  {
    label: "Sponsorship",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeKxqRqKq3kw5yKeNjtg4qlZ-xaCs70mhHNjdFMBH8-sjK5TA/viewform?usp=dialog",
  },
];

/* ─── Component ────────────────────────────────────────────────────────────── */

interface JoinUsButtonProps {
  variant?: "outline" | "gradient";
  onClose?: () => void;
}

export const JoinUsButton: React.FC<JoinUsButtonProps> = ({
  variant = "outline",
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const btnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Position the dropdown using fixed coords so it is never clipped */
  const openDropdown = () => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const dropW = 272;
    const viewW = window.innerWidth;

    let left = rect.left;
    if (left + dropW > viewW - 12) left = viewW - dropW - 12;
    if (left < 8) left = 8;

    const top = rect.bottom + 8;

    setDropdownStyle({ position: "fixed", top, left, width: dropW });
    setIsOpen(true);
  };

  const toggleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOpen) setIsOpen(false);
    else openDropdown();
  };

  /* Close on outside click */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  /* Reposition on scroll/resize */
  useEffect(() => {
    if (!isOpen) return;
    const update = () => {
      if (btnRef.current) {
        const rect = btnRef.current.getBoundingClientRect();
        const dropW = 272;
        const viewW = window.innerWidth;
        let left = rect.left;
        if (left + dropW > viewW - 12) left = viewW - dropW - 12;
        if (left < 8) left = 8;
        setDropdownStyle({ position: "fixed", top: rect.bottom + 8, left, width: dropW });
      }
    };
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [isOpen]);

  const handleOptionClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
    onClose?.();
  };

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* ── Trigger Button ── */}
      {variant === "outline" ? (
        <button
          ref={btnRef}
          id="join-us-btn"
          onClick={toggleOpen}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#ff5200] px-6 py-3 text-base text-white transition-all duration-300 hover:bg-[#ff5200] focus:outline-none"
          style={{ fontFamily: "'Bruno Ace', sans-serif" }}
        >
          Join Us
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="currentColor"
            style={{
              transition: "transform 0.3s",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </button>
      ) : (
        <button
          ref={btnRef}
          id="join-us-mobile-btn"
          onClick={toggleOpen}
          className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-full bg-gradient-to-br from-[#ff5300] to-[#ffbb9a] text-white font-semibold shadow hover:opacity-90 transition focus:outline-none"
        >
          Join Us
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="currentColor"
            style={{
              transition: "transform 0.3s",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
        </button>
      )}

      {/* ── Dropdown Portal (fixed so it never clips) ── */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-[998]"
            onClick={() => setIsOpen(false)}
          />
          <div
            style={{
              ...dropdownStyle,
              zIndex: 999,
              animation: "joinDropdownIn 0.18s ease-out forwards",
            }}
            className="rounded-2xl border border-[#ff5200]/25 bg-[#0d0d0d]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(255,82,0,0.22)]"
          >
            {/* Header */}
            <div className="px-4 pt-3 pb-2 border-b border-[#ff5200]/15">
              <p
                className="text-[#ff5200] text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Choose Your Domain
              </p>
            </div>

            {/* Options list */}
            <div className="py-1">
              {domainOptions.map((option, idx) => {
                const Icon = DOMAIN_ICONS[option.label];
                return (
                  <button
                    key={option.label}
                    onClick={() => handleOptionClick(option.url)}
                    className="w-full flex items-center gap-3 px-4 py-[10px] text-left transition-all duration-150 group hover:bg-[#ff5200]/10 border-b border-white/[0.04] last:border-b-0"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {/* Icon box */}
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:bg-[#ff5200]/20"
                      style={{
                        background: "rgba(255,82,0,0.08)",
                        color: idx % 2 === 0 ? "#ff7a40" : "#ffaa70",
                      }}
                    >
                      <Icon />
                    </span>

                    {/* Label */}
                    <span className="text-[13px] font-medium text-white/90 group-hover:text-white tracking-wide flex-1">
                      {option.label}
                    </span>

                    {/* Arrow */}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="flex-shrink-0 opacity-30 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: "#ff5200" }}
                    >
                      <path
                        d="M3 7h8M8 4l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                );
              })}
            </div>
          </div>

          <style>{`
            @keyframes joinDropdownIn {
              from { opacity: 0; transform: translateY(-6px) scale(0.98); }
              to   { opacity: 1; transform: translateY(0)   scale(1);    }
            }
          `}</style>
        </>
      )}
    </div>
  );
};

export default JoinUsButton;
