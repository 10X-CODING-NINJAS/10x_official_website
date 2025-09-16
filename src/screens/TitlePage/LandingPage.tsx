import React from "react";

const navigationItems = [
  { label: "Home", href: "/#" },
  { label: "Domains", href: "/#domains" },
  { label: "Teams", href: "/board" },
];

// Clean version without navbar state
export const LandingPage = (): JSX.Element => {
  return (
    <section
      className="
        relative w-full h-screen flex flex-col
        bg-black overflow-hidden
        text-[14px] md:text-[15px]
      "
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute w-[45vw] max-w-[420px] aspect-[1/1.1] top-1/3 left-[18%] -rotate-[27deg] rounded-[25%] blur-2xl bg-gradient-to-b from-[#ff801b30] to-[#994d1025]" />
      </div>

      <div
        className="
          relative z-10 flex-1 max-w-6xl mx-auto w-full
          px-4 md:px-6 pt-10
          flex flex-col lg:flex-row items-center
          gap-8 lg:gap-10
        "
      >
        <div className="w-full lg:w-1/2">
          <div className="space-y-4">
            <h1
              className="font-batman text-white leading-[0.9]"
              style={{ fontSize: "clamp(2.6rem, 7vw, 5.6rem)" }}
            >
              LEARN
            </h1>
            <div className="space-y-1">
              <h2
                className="font-batman text-[#ff5200] leading-[0.9]"
                style={{ fontSize: "clamp(2.4rem, 6.5vw, 5rem)" }}
              >
                Code
              </h2>
              <h3
                className="font-batman text-white leading-[0.9]"
                style={{ fontSize: "clamp(2.4rem, 6.5vw, 5rem)" }}
              >
                upskill
              </h3>
            </div>
            <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md">
              Coding Ninjas 10X Club SRM is a community of builders and curious
              minds—learning, creating and shipping impact with technology.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center relative">
          <div className="relative scale-[0.85] sm:scale-[0.9] md:scale-[0.95] lg:scale-100">
            <img
              src="./Footer/10X Logo.svg"
              alt="10X Logo Large"
              className="w-[220px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[440px] object-contain drop-shadow-[0_0_18px_rgba(255,82,0,0.35)]"
            />
          </div>
        </div>
      </div>

      <img
        src="/vector-1.svg"
        alt=""
        className="hidden md:block pointer-events-none select-none absolute top-16 right-[10%] w-14 md:w-16 lg:w-20 opacity-60"
      />
    </section>
  );
};

export default LandingPage;
