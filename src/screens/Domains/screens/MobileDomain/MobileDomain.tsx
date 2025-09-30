import React, { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Footerpage } from "../../../Footerpage/Footerpage";
import { Menu, X } from "lucide-react";

export const MobileDomain = (): JSX.Element => {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navItems = [
    { label: "Home", href: "/#" },
    { label: "Domains", href: "/#domains" },
    { label: "Teams", href: "/#board" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
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
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <img
          className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-full max-w-[1094px] h-auto"
          alt="Rectangle"
          src="./Title/Rectangle 5047.svg"
        />

        <img
          className="absolute top-[-11px] left-1/2 transform -translate-x-1/2 w-full max-w-[1102px] h-auto"
          alt="Rectangle"
          src="./Title/Rectangle 5048.svg"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute top-[15px] left-1/2 transform -translate-x-1/2 gap-4 h-[45px]">
          {navItems.map((item) => {
            const isActive = active === item.label;
            return (
              <Button
                key={item.label}
                className={`flex h-[45px] items-center justify-center gap-2.5 rounded-[50px] border-[3px] border-solid border-[#4c1900] px-6 transition-all duration-300 hover:bg-[#4c1900] ${
                  isActive ? "bg-black border-black" : "bg-transparent"
                }`}
              >
                <a
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  className="relative w-fit [font-family:'Montserrat',Helvetica] font-semibold text-white text-[clamp(1rem,2vw,1.5rem)] tracking-[-0.72px] leading-[normal]"
                >
                  {item.label}
                </a>
              </Button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden absolute top-[15px] left-8 z-50 flex items-center justify-center w-[45px] h-[45px] rounded-[50px] border-[3px] border-solid border-[#4c1900] bg-transparent transition-all duration-300 hover:bg-[#4c1900]"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md z-40 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col items-start justify-center h-full pl-8 gap-8">
            {navItems.map((item) => {
              const isActive = active === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`relative [font-family:'Montserrat',Helvetica] font-semibold text-white text-[1.5rem] tracking-[-0.72px] leading-[normal] transition-all duration-300 hover:text-[#ff5200] cursor-pointer ${
                    isActive ? "text-[#ff5200]" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            {/* Join Us CTA in mobile menu */}
            <a
              href="https://forms.gle/Ta6MVGCCDeSPBp9c8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full"
            >
              <div className="w-full text-center py-2 rounded-full bg-gradient-to-br from-[#ff5300] to-[#ffbb9a] text-white font-semibold shadow hover:opacity-90 transition">
                Join Us
              </div>
            </a>
          </nav>
        </div>
      </header>

      <div className="h-[150px] lg:h-[160px]" />

      {/* Background layer */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute w-40 h-40 md:w-64 md:h-64 top-10 left-6 rounded-full blur-[140px] bg-[radial-gradient(circle_at_center,rgba(255,82,0,0.8),rgba(255,140,0,0.15)_70%,transparent_100%)]" />
        <div className="absolute w-32 h-32 md:w-52 md:h-52 bottom-8 right-8 rounded-full blur-[130px] bg-[radial-gradient(circle_at_center,rgba(255,120,40,0.7),rgba(255,140,0,0.12)_70%,transparent_100%)]" />
        
        {/* Random bubble images */}
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-12 h-12 md:w-16 md:h-16 top-[15%] right-[15%] opacity-25 pointer-events-none "
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-8 h-8 md:w-12 md:h-12 bottom-[25%] left-[20%] opacity-30 pointer-events-none"
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-10 h-10 md:w-14 md:h-14 top-[60%] left-[85%] opacity-20 pointer-events-none "
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-14 h-14 md:w-18 md:h-18 bottom-[60%] right-[25%] opacity-35 pointer-events-none animate-pulse"
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-6 h-6 md:w-10 md:h-10 top-[10%] left-[8%] opacity-25 pointer-events-none"
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-9 h-9 md:w-12 md:h-12 top-[20%] left-[15%] opacity-30 pointer-events-none"
        />
        <img 
          src="./Title/bubble.png" 
          alt="bubble" 
          className="absolute w-7 h-7 md:w-11 md:h-11 top-[35%] left-[5%] opacity-20 pointer-events-none"
        />
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
          {/* Staggered cards layout */}
          <div className="relative w-full flex flex-col items-center gap-8">
            {/* Top card - CREATIVES */}
            <div className="w-full max-w-[200px] flex justify-center">
              <div className="w-full">
                <h3
                  className="text-white text-base md:text-lg font-normal text-center mb-3 "
                  style={{ fontFamily: "Montserrat" }}
                >
                  {domainCards[0].title}
                </h3>
                <Card className="relative w-full h-48 md:h-52 bg-transparent border-none overflow-hidden group">
                  <CardContent className="p-0 h-full relative">
                    <img
                      className="absolute inset-0 w-full h-full object-contain opacity-90"
                      alt="Card frame"
                      src={domainCards[0].rectangle}
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img
                        className="max-w-[70%] max-h-[70%] object-contain transition-transform duration-300 group-hover:scale-110"
                        alt={domainCards[0].imageAlt}
                        src={domainCards[0].image}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Middle row - CORPORATE, NON TECHNICAL title, and SPONSORSHIP */}
            <div className="w-full flex justify-center items-center gap-4 md:gap-8">
              {/* CORPORATE */}
              <div className="w-full max-w-[180px]">
                <h3
                  className="text-white text-sm md:text-base font-normal text-center mb-3 "
                  style={{ fontFamily: "Montserrat" }}
                >
                  {domainCards[1].title}
                </h3>
                <Card className="relative w-full h-40 md:h-44 bg-transparent border-none overflow-hidden group">
                  <CardContent className="p-0 h-full relative">
                    <img
                      className="absolute inset-0 w-full h-full object-contain opacity-90"
                      alt="Card frame"
                      src={domainCards[1].rectangle}
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-3">
                      <img
                        className="max-w-[70%] max-h-[70%] object-contain transition-transform duration-300 group-hover:scale-110"
                        alt={domainCards[1].imageAlt}
                        src={domainCards[1].image}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* NON TECHNICAL title in the center */}
              <div className="flex justify-center items-center min-w-fit">
                <h1 
                  className="font-batman text-white text-xl md:text-3xl lg:text-4xl tracking-wider transform rotate-0 whitespace-nowrap hover:scale-105 transition-all duration-300"
                  style={{ 
                    textShadow: '0_0_15px_rgba(255,82,0,1),0_0_30px_rgba(255,82,0,0.8),0_0_45px_rgba(255,82,0,0.6)',
                    fontFamily: "'BatmanForeverAlternate', sans-serif"
                  }}
                >
                  NON TECHNICAL
                </h1>
              </div>

              {/* SPONSORSHIP */}
              <div className="w-full max-w-[180px]">
                <h3
                  className="text-white text-sm md:text-base font-normal text-center mb-3 "
                  style={{ fontFamily: "Montserrat" }}
                >
                  {domainCards[2].title}
                </h3>
                <Card className="relative w-full h-40 md:h-44 bg-transparent border-none overflow-hidden group">
                  <CardContent className="p-0 h-full relative">
                    <img
                      className="absolute inset-0 w-full h-full object-contain opacity-90"
                      alt="Card frame"
                      src={domainCards[2].rectangle}
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-3">
                      <img
                        className="max-w-[70%] max-h-[70%] object-contain transition-transform duration-300 group-hover:scale-110"
                        alt={domainCards[2].imageAlt}
                        src={domainCards[2].image}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Bottom card - EDITORIAL */}
            <div className="w-full max-w-[200px] flex justify-center">
              <div className="w-full">
                <h3
                  className="text-white text-base md:text-lg font-normal text-center mb-3"
                  style={{ fontFamily: "Montserrat" }}
                >
                  {domainCards[3].title}
                </h3>
                <Card className="relative w-full h-48 md:h-52 bg-transparent border-none overflow-hidden group">
                  <CardContent className="p-0 h-full relative">
                    <img
                      className="absolute inset-0 w-full h-full object-contain opacity-90"
                      alt="Card frame"
                      src={domainCards[3].rectangle}
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <img
                        className="max-w-[70%] max-h-[70%] object-contain transition-transform duration-300 group-hover:scale-110"
                        alt={domainCards[3].imageAlt}
                        src={domainCards[3].image}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
      
      {/* Footer */}
      <Footerpage />
    </div>
  );
};

export default MobileDomain;
