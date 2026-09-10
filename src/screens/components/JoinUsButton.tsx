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

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

const isMobileScreen = () => window.innerWidth < 640;

/* ─── Shared Option List ───────────────────────────────────────────────────── */

const OptionList: React.FC<{ onSelect: (url: string) => void }> = ({ onSelect }) => (
  <div className="py-1">
    {domainOptions.map((option, idx) => {
      const Icon = DOMAIN_ICONS[option.label];
      return (
        <button
          key={option.label}
          onClick={() => onSelect(option.url)}
          className="w-full flex items-center gap-3 px-4 py-[11px] text-left transition-all duration-150 group hover:bg-[#ff5200]/10 border-b border-white/[0.04] last:border-b-0 active:bg-[#ff5200]/20"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {/* Icon box */}
          <span
            className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:bg-[#ff5200]/20"
            style={{
              background: "rgba(255,82,0,0.08)",
              color: idx % 2 === 0 ? "#ff7a40" : "#ffaa70",
            }}
          >
            <Icon />
          </span>

          {/* Label */}
          <span className="text-[14px] font-medium text-white/90 group-hover:text-white tracking-wide flex-1 text-left">
            {option.label}
          </span>

          {/* Arrow */}
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            className="flex-shrink-0 opacity-30 group-hover:opacity-100 transition-opacity duration-200"
            style={{ color: "#ff5200" }}
          >
            <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      );
    })}
  </div>
);

/* ─── Chevron SVG ──────────────────────────────────────────────────────────── */

const Chevron: React.FC<{ open: boolean }> = ({ open }) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
    style={{ transition: "transform 0.3s", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
  >
    <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

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
  const [isMobile, setIsMobile] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});
  const btnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Detect mobile breakpoint on mount + resize */
  useEffect(() => {
    const check = () => setIsMobile(isMobileScreen());
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Compute desktop dropdown position */
  const calcDesktopStyle = (): React.CSSProperties => {
    if (!btnRef.current) return {};
    const rect = btnRef.current.getBoundingClientRect();
    const dropW = 280;
    const viewW = window.innerWidth;
    const viewH = window.innerHeight;
    let left = rect.left;
    if (left + dropW > viewW - 12) left = viewW - dropW - 12;
    if (left < 8) left = 8;
    // open upward if not enough space below
    const spaceBelow = viewH - rect.bottom - 12;
    const approxH = 320; // rough height of 6 items
    const top = spaceBelow >= approxH ? rect.bottom + 8 : rect.top - approxH - 8;
    return { position: "fixed", top, left, width: dropW };
  };

  const openDropdown = () => {
    if (!isMobileScreen()) {
      setDropdownStyle(calcDesktopStyle());
    }
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
      const target = e.target as Node;
      // for mobile sheet, clicking backdrop closes it
      if (containerRef.current && !containerRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  /* Reposition desktop dropdown on scroll/resize */
  useEffect(() => {
    if (!isOpen || isMobile) return;
    const update = () => setDropdownStyle(calcDesktopStyle());
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [isOpen, isMobile]);

  /* Lock body scroll when mobile sheet is open */
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobile, isOpen]);

  const handleOptionClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
    onClose?.();
  };

  /* ── Shared panel content ── */
  const panelContent = (
    <>
      {/* Handle bar (mobile only) */}
      {isMobile && (
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>
      )}

      {/* Header */}
      <div className={`px-4 border-b border-[#ff5200]/15 ${isMobile ? "pt-2 pb-3" : "pt-3 pb-2"}`}>
        <p
          className="text-[#ff5200] text-[10px] font-bold tracking-[0.2em] uppercase"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Choose Your Domain
        </p>
      </div>

      {/* Options */}
      <OptionList onSelect={handleOptionClick} />
    </>
  );

  return (
    <>
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
            <Chevron open={isOpen} />
          </button>
        ) : (
          <button
            ref={btnRef}
            id="join-us-mobile-btn"
            onClick={toggleOpen}
            className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-full bg-gradient-to-br from-[#ff5300] to-[#ffbb9a] text-white font-semibold shadow hover:opacity-90 transition focus:outline-none"
          >
            Join Us
            <Chevron open={isOpen} />
          </button>
        )}
      </div>

      {/* ── Dropdown / Bottom Sheet ── */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[998]"
            style={{ background: isMobile ? "rgba(0,0,0,0.6)" : "transparent" }}
            onClick={() => setIsOpen(false)}
          />

          {isMobile ? (
            /* ── Mobile: Bottom Sheet ── */
            <div
              className="fixed bottom-0 left-0 right-0 z-[999] rounded-t-3xl border-t border-[#ff5200]/20 bg-[#0d0d0d] shadow-[0_-12px_40px_rgba(255,82,0,0.18)]"
              style={{ animation: "sheetIn 0.25s cubic-bezier(0.22,1,0.36,1) forwards" }}
              onClick={(e) => e.stopPropagation()}
            >
              {panelContent}
              {/* Safe area spacer */}
              <div style={{ height: "env(safe-area-inset-bottom, 16px)" }} />
            </div>
          ) : (
            /* ── Desktop: Smart Dropdown ── */
            <div
              style={{
                ...dropdownStyle,
                zIndex: 999,
                animation: "joinDropdownIn 0.18s ease-out forwards",
              }}
              className="rounded-2xl border border-[#ff5200]/25 bg-[#0d0d0d]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(255,82,0,0.22)]"
            >
              {panelContent}
            </div>
          )}

          <style>{`
            @keyframes joinDropdownIn {
              from { opacity: 0; transform: translateY(-6px) scale(0.98); }
              to   { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes sheetIn {
              from { transform: translateY(100%); opacity: 0.6; }
              to   { transform: translateY(0);    opacity: 1; }
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default JoinUsButton;
