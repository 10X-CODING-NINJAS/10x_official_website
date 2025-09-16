import React, { useState, useEffect } from "react";
import { Button } from "../Domains/components/ui/button";

const navigationItems = [
  { label: "Home", href: "/#" },
  { label: "Domains", href: "/#domains" },
  { label: "Teams", href: "/board" },
];

export const LandingPage = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    if (window.location.hash.includes("domains")) setActive("Domains");
    else if (window.location.pathname.startsWith("/board")) setActive("Teams");
    else setActive("Home");
  }, [window.location.hash, window.location.pathname]);

  return (
    <main
      className="
        page-root w-full h-screen
        bg-black relative flex flex-col overflow-hidden
        text-[14px] md:text-[15px]
      "
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute w-[45vw] max-w-[420px] aspect-[1/1.1] top-1/3 left-[18%] -rotate-[27deg] rounded-[25%] blur-2xl bg-gradient-to-b from-[#ff801b30] to-[#994d1025]" />
      </div>

      {/* HEADER (compressed) */}
      <header className="w-full z-20 relative shrink-0">
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-4 flex items-center justify-center">
          <div className="hidden lg:block relative scale-[0.82] origin-top">
            <div className="absolute inset-x-0 -top-4 -bottom-4 pointer-events-none">
              <img
                src="./Title/Rectangle 5047.svg"
                alt=""
                className="absolute inset-x-0 mx-auto top-4 h-[110px] w-full max-w-[880px] opacity-90"
                draggable="false"
              />
              <img
                src="./Title/Rectangle 5048.svg"
                alt=""
                className="absolute inset-x-0 mx-auto top-3 h-[128px] w-full max-w-[890px]"
                draggable="false"
              />
            </div>
            <nav className="relative flex gap-[64px] px-8 py-4 justify-center">
              {navigationItems.map((item, idx) => {
                const isActive = active === item.label;
                return (
                  <Button
                    key={item.label}
                    asChild
                    variant={isActive ? "default" : "outline"}
                    onClick={() => setActive(item.label)}
                    className={`
                      h-[38px] px-5 rounded-[40px] text-[18px] font-semibold tracking-[-0.5px]
                      [font-family:'Montserrat',Helvetica] transition-all duration-300
                      ${isActive
                        ? "bg-[#4c1900] text-white border-none shadow"
                        : "bg-transparent text-white border-[2.5px] border-[#4c1900] hover:bg-[#4c1900]/15"}
                      ${idx === 1 ? "w-[150px]" : "w-[120px]"}
                    `}
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                );
              })}
            </nav>
          </div>

          {/* Mobile menu button (slightly smaller) */}
          <button
            onClick={() => setOpen(p => !p)}
            className="lg:hidden inline-flex flex-col justify-center gap-1.5 w-8 h-8 rounded-md border border-white/20 text-white"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 bg-white transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>

        {open && (
          <div className="lg:hidden animate-fade-in-down">
            <div className="mx-3 mt-3 p-3 rounded-2xl border border-white/10 bg-[#1a1a1a]/90 backdrop-blur-md flex flex-col gap-3 text-sm">
              {navigationItems.map(item => {
                const isActive = active === item.label;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActive(item.label);
                      setOpen(false);
                    }}
                    className={`w-full text-center py-2 rounded-full font-medium transition border ${
                      isActive
                        ? "bg-[#4c1900] border-[#4c1900] text-white"
                        : "border-[#4c1900] text-white hover:bg-[#4c1900]/20"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="https://forms.gle/Ta6MVGCCDeSPBp9c8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <div className="w-full text-center py-2 rounded-full bg-gradient-to-br from-[#ff5300] to-[#ffbb9a] text-white font-semibold shadow hover:opacity-90 transition">
                  Join Us
                </div>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO (scaled down) */}
      <section
        className="
          relative z-10 flex-1 max-w-6xl mx-auto w-full
          px-4 md:px-6 pt-6 md:pt-10
          flex flex-col lg:flex-row items-center
          gap-8 lg:gap-10
        "
      >
        <div className="w-full lg:w-1/2 -mt-2">
          <div className="space-y-3 md:space-y-4">
            <h1
              className="font-[BatmanForeverAlternate-Regular] text-white leading-[0.9]"
              style={{
                fontSize: "clamp(2.4rem, 7vw, 5.2rem)",
              }}
            >
              LEARN
            </h1>
            <div className="space-y-1">
              <h2
                className="font-[BatmanForeverAlternate-Regular] text-[#ff5200] leading-[0.9]"
                style={{ fontSize: "clamp(2.2rem, 6.5vw, 4.8rem)" }}
              >
                Code
              </h2>
              <h3
                className="font-[BatmanForeverAlternate-Regular] text-white leading-[0.9]"
                style={{ fontSize: "clamp(2.2rem, 6.5vw, 4.8rem)" }}
              >
                upskill
              </h3>
            </div>
            <p className="text-white/80 text-[0.8rem] sm:text-sm md:text-[0.9rem] leading-relaxed max-w-md">
              Coding Ninjas 10X Club SRM is a community of builders and curious
              minds—learning, creating and shipping impact with technology.
            </p>
            <div className="flex gap-3 pt-1">
              <a
                href="https://forms.gle/Ta6MVGCCDeSPBp9c8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="h-10 px-6 rounded-lg bg-gradient-to-br from-[#ff5300] to-[#ffbb9a] text-white font-semibold text-sm md:text-base shadow hover:opacity-90">
                  Join Us
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <div className="relative scale-[0.8] sm:scale-[0.85] md:scale-[0.9] lg:scale-100">
            <img
              src="./Footer/10X Logo.svg"
              alt="10X Logo Large"
              className="w-[220px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[440px] object-contain drop-shadow-[0_0_18px_rgba(255,82,0,0.35)]"
            />
          </div>
        </div>
      </section>

      {/* Decorative vector (scaled & nudged) */}
      <img
        src="/vector-1.svg"
        alt=""
        className="hidden md:block pointer-events-none select-none absolute top-16 right-[10%] w-14 md:w-16 lg:w-20 opacity-60"
      />
    </main>
  );
};

export default LandingPage;
