import React from "react";

const navigationItems = [
  { label: "Home", href: "/#" },
  { label: "Domains", href: "/#domains" },
  { label: "Teams", href: "/board" },
];

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
        {/*
          Bubbles are created with div tags using absolute positioning,
          and a mix of blur, rounded corners, and gradients to mimic the effect.
        */}
        <div className="absolute w-[45vw] max-w-[420px] aspect-[1/1.1] top-1/3 left-[18%] -rotate-[27deg] rounded-[25%] blur-2xl bg-gradient-to-b from-[#ff801b30] to-[#994d1025]" />
        
        {/* Bubble 2 */}
        <div className="absolute w-[35vw] max-w-[320px] aspect-[1/1.1] top-[40%] left-[80%] rotate-[15deg] rounded-[40%] blur-xl bg-gradient-to-b from-[#ff520020] to-[#994d1015]" />
        
     
        
        {/* Bubble 4 (adjusting for better distribution) */}
        <div className="absolute w-[20vw] max-w-[180px] aspect-[1/1.1] top-[10%] right-[5%] rotate-[30deg] rounded-[30%] blur-lg bg-gradient-to-b from-[#ff520025] to-[#994d1020]" />
        
        {/* Bubble 5 (smaller bubble near the top) */}
        <div className="absolute w-[15vw] max-w-[150px] aspect-[1/1.1] top-[5%] left-[50%] -rotate-[10deg] rounded-[60%] blur-md bg-gradient-to-b from-[#ff801b15] to-[#994d1010]" />
        
        {/* Random bubble images */}
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-16 h-16 md:w-24 md:h-24 top-[12%] left-[8%] opacity-30 pointer-events-none animate-pulse"
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-20 h-20 md:w-28 md:h-28 bottom-[15%] right-[12%] opacity-25 pointer-events-none "
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-12 h-12 md:w-18 md:h-18 top-[45%] right-[25%] opacity-20 pointer-events-none"
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-14 h-14 md:w-20 md:h-20 bottom-[35%] left-[15%] opacity-35 pointer-events-none "
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-15 h-12 md:w-26 md:h-26 top-[30%] left-1/2 transform -translate-x-1/2 opacity-28 pointer-events-none "
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-10 h-10 md:w-16 md:h-16 top-[8%] right-[30%] opacity-25 pointer-events-none "
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-12 h-12 md:w-18 md:h-18 top-[18%] right-[15%] opacity-30 pointer-events-none"
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-8 h-8 md:w-14 md:h-14 top-[25%] right-[40%] opacity-20 pointer-events-none "
        />
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
            {/*
              The Join Us button now has a simple orange border and uses the 'Bruno Ace' font.
              - The `border` and `border-[#ff5200]` classes apply a solid 1px orange border.
              - The `rounded-full` class gives it the pill shape.
              - The `font-[Bruno Ace]` class (or an equivalent Tailwind class defined in your config)
                is used to apply the custom font.
              - The `href` is set to the provided Google Form URL.
              - `target="_blank"` and `rel="noopener noreferrer"` are added for best practice
                when linking to an external site.
            */}
            <a
              href="https://forms.gle/XvnySkwbt8GgFfJW7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-full border border-[#ff5200] px-6 py-2 text-sm text-white transition-all duration-300 hover:bg-[#ff5200] hover:text-white"
              style={{ fontFamily: "'Bruno Ace', sans-serif" }}
            >
              Join Us
            </a>
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