import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export const MobileDomain = (): JSX.Element => {
  const [active, setActive] = useState("Home");
  const navItems = [
    { label: "Home", href: "/#" },
    { label: "Domains", href: "/#domains" },
    { label: "Teams", href: "/board" },
  ];
  const domainCards = [
    {
      title: "CREATIVES",
      image: "/NonTech-assets/Creatives.png",
      imageAlt: "Creatives",
      rectangle: "/Desktop-assets/rectangle-32.svg",
    },
    {
      title: "CORPORATE",
      image: "/NonTech-assets/coorp.png",
      imageAlt: "Corporate",
      rectangle: "/Desktop-assets/rectangle-5029.svg",
    },
    {
      title: "SPONSORSHIP",
      image: "/NonTech-assets/sponsi.png",
      imageAlt: "Sponsorship",
      rectangle: "/Desktop-assets/rectangle-5030.svg",
    },
    {
      title: "EDITORIAL",
      image: "/NonTech-assets/edi.png",
      imageAlt: "Editorial",
      rectangle: "/Desktop-assets/rectangle-5029.svg",
    },
  ];

  return (
    <div className="relative w-full min-h-[100dvh] bg-black overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-center">
          <div className="hidden lg:block relative">
            <div className="absolute inset-x-0 -top-4 -bottom-4 pointer-events-none">
              <img
                src="/Title/Rectangle 5047.svg"
                alt=""
                className="absolute inset-x-0 mx-auto top-4 h-[110px] w-full max-w-[880px] opacity-90"
              />
              <img
                src="/Title/Rectangle 5048.svg"
                alt=""
                className="absolute inset-x-0 mx-auto top-3 h-[128px] w-full max-w-[890px]"
              />
            </div>
            <nav className="relative flex gap-[64px] px-8 py-4 justify-center">
              {navItems.map((item, i) => {
                const isActive = active === item.label;
                return (
                  <Button
                    key={item.label}
                    asChild
                    variant={isActive ? "default" : "outline"}
                    onClick={() => setActive(item.label)}
                    className={`h-[38px] px-5 rounded-[40px] text-[18px] font-semibold tracking-[-0.5px]
                      [font-family:'Montserrat',Helvetica] transition-all
                      ${
                        isActive
                          ? "bg-[#4c1900] text-white border-none shadow"
                          : "bg-transparent text-white border-[2.5px] border-[#4c1900] hover:bg-[#4c1900]/15"
                      }
                      ${i === 1 ? "w-[150px]" : "w-[120px]"}`}
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      <div className="h-[150px] lg:h-[160px]" />

      {/* Background layer */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute w-40 h-40 md:w-64 md:h-64 top-10 left-6 rounded-full blur-[140px] bg-[radial-gradient(circle_at_center,rgba(255,82,0,0.8),rgba(255,140,0,0.15)_70%,transparent_100%)]" />
        <div className="absolute w-32 h-32 md:w-52 md:h-52 bottom-8 right-8 rounded-full blur-[130px] bg-[radial-gradient(circle_at_center,rgba(255,120,40,0.7),rgba(255,140,0,0.12)_70%,transparent_100%)]" />
      </div>

      {/* Logo */}
      {/* <div className="absolute top-4 left-4 z-40">
        <div className="relative">
          <img
            className="w-20 md:w-28 object-contain"
            alt="10x Logo"
            src="/Desktop-assets/10x-logo--stock-.svg"
          />
          <div className="absolute -bottom-1 right-1 text-white text-[9px] md:text-[11px]">
            SRM
          </div>
        </div>
      </div> */}

      {/* Content */}
      <div className="relative z-30 min-h-[calc(100dvh-160px)] flex items-center justify-center px-4">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 place-items-center">
            {domainCards.map((card) => (
              <div key={card.title} className="w-full max-w-[250px]">
                <h3
                  className="text-white text-lg md:text-xl font-normal text-center mb-4 [text-shadow:0_0_15px_rgba(255,82,0,1),0_0_35px_rgba(255,82,0,0.6)]"
                  style={{ fontFamily: "'Bruno Ace', cursive" }}
                >
                  {card.title}
                </h3>
                <Card className="relative w-full h-60 md:h-64 bg-transparent border-none overflow-hidden group">
                  <CardContent className="p-0 h-full relative">
                    <img
                      className="absolute inset-0 w-full h-full object-contain opacity-90"
                      alt="Card frame"
                      src={card.rectangle}
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img
                        className="max-w-[70%] max-h-[70%] object-contain transition-transform duration-300 group-hover:scale-110"
                        alt={card.imageAlt}
                        src={card.image}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default MobileDomain;
