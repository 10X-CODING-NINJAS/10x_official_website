import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Footerpage } from "../../../Footerpage/Footerpage";
import { Menu, X } from "lucide-react";

export const Technical = (): JSX.Element => {
  const [active, setActive] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    if (window.location.hash.includes("domains")) setActive("Domains");
    else setActive("Home");
  }, []);
  
  const navItems = [
    { label: "Home", href: "/#" },
    { label: "Domains", href: "/#domains" },
    { label: "Teams", href: "/board" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const domainCards = [
    {
      title: "APP-DEV",
      image: "/Desktop-assets/phone1-1.png",
      imageAlt: "Phone",
      rectangle: "/Desktop-assets/rectangle-32.svg",
    },
    {
      title: "AI/ML",
      image: "/Desktop-assets/newrobot-1.png",
      imageAlt: "Newrobot",
      rectangle: "/Desktop-assets/rectangle-5029.svg",
    },
    {
      title: "WEB-DEV",
      image: "/Desktop-assets/1laptop-1.png",
      imageAlt: "Element",
      rectangle: "/Desktop-assets/rectangle-5030.svg",
    },
  ];

  const backgroundElements = [
    {
      width: "w-[792px]",
      height: "h-[792px]",
      top: "top-[201px]",
      left: "left-[159px]",
      rounded: "rounded-[396px]",
      blur: "blur-[162.95px]",
      opacity: "opacity-30",
    },
    {
      width: "w-[667px]",
      height: "h-[667px]",
      top: "top-0",
      left: "left-0",
      rounded: "rounded-[333.5px]",
      blur: "blur-[162.95px]",
      opacity: "opacity-10",
    },
    {
      width: "w-[934px]",
      height: "h-[934px]",
      top: "top-[715px]",
      left: "left-[1871px]",
      rounded: "rounded-[467px]",
      blur: "blur-[162.95px]",
      opacity: "opacity-30",
    },
  ];

  const sphereElements = [
    {
      width: "w-[164px]",
      height: "h-[163px]",
      top: "top-[316px]",
      left: "left-[469px]",
      rounded: "rounded-[82.02px/81.3px]",
      rotate: "rotate-[-72deg]",
    },
    {
      width: "w-[164px]",
      height: "h-[163px]",
      top: "top-[470px]",
      left: "left-[1992px]",
      rounded: "rounded-[82.02px/81.3px]",
      rotate: "rotate-[-162deg]",
    },
    {
      width: "w-[139px]",
      height: "h-[138px]",
      top: "top-[1200px]",
      left: "left-[470px]",
      rounded: "rounded-[69.7px/69.1px]",
      rotate: "rotate-[-162deg]",
    },
    {
      width: "w-[85px]",
      height: "h-[84px]",
      top: "top-[1315px]",
      left: "left-[711px]",
      rounded: "rounded-[42.28px/41.92px]",
      rotate: "rotate-[-162deg]",
    },
  ];

  return (
    <div className="relative w-full min-h-[100dvh] bg-black overflow-hidden">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <img
          className="hidden md:block absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-full max-w-[1094px] h-auto"
          alt="Rectangle"
          src="./Title/Rectangle 5047.svg"
        />

        <img
          className="hidden md:block absolute top-[-11px] left-1/2 transform -translate-x-1/2 w-full max-w-[1102px] h-auto"
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
          className="md:hidden absolute top-[15px] right-8 z-50 flex items-center justify-center w-[45px] h-[45px] rounded-[50px] border-[3px] border-solid border-[#4c1900] bg-transparent transition-all duration-300 hover:bg-[#4c1900]"
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
              href="https://www.instagram.com/srm_cn/"
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

      <div className="absolute inset-0 pointer-events-none">
       
        {backgroundElements.map((_, index) => (
          <div
            key={`bg-element-${index}`}
            className={`absolute w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[160px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,82,0,0.8)_0%,rgba(255,140,0,0.6)_30%,rgba(255,69,0,0.4)_70%,rgba(139,69,19,0.3)_100%)] opacity-70 ${
              index === 0
                ? "top-10 sm:top-16 md:top-20 left-4 sm:left-8 md:left-10"
                : index === 1
                ? "top-0 left-0"
                : "bottom-10 sm:bottom-16 md:bottom-20 right-4 sm:right-8 md:right-10"
            }`}
          />
        ))}

        {/* Main sphere - responsive positioning */}
        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-[164px] xl:h-[163px] top-1/4 left-1/4 rounded-full rotate-[-72deg] shadow-[inset_1px_-1px_0px_#00000040] bg-blend-difference [background:radial-gradient(50%_50%_at_40%_90%,rgba(9,8,8,1)_19%,rgba(115,115,115,0.54)_57%,rgba(231,227,227,0.74)_97%)] opacity-20" />

        {/* Additional spheres - visible on all screens */}
        {sphereElements.slice(1).map((sphere, index) => (
          <div
            key={`sphere-${index + 1}`}
            className={`absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 rounded-full ${sphere.rotate} shadow-[inset_1px_-1px_0px_#00000040] bg-blend-difference [background:radial-gradient(50%_50%_at_40%_90%,rgba(9,8,8,1)_19%,rgba(115,115,115,0.54)_57%,rgba(231,227,227,0.74)_97%)] opacity-20 ${
              index === 0
                ? "top-1/2 right-4 sm:right-8 lg:right-12 xl:right-16"
                : index === 1
                ? "bottom-12 sm:bottom-16 lg:bottom-20 left-1/4"
                : "bottom-6 sm:bottom-8 lg:bottom-12 left-1/3"
            }`}
          />
        ))}
      </div>

{/*    
      {/* <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-10">
        <div className="w-20 h-12 sm:w-24 sm:h-16 md:w-32 md:h-20 lg:w-[157px] lg:h-[85px] shadow-[0px_0.97px_0.97px_#00000040]">
          {/* <img
            className="w-16 h-10 sm:w-20 sm:h-12 md:w-28 md:h-16 lg:w-[150px] lg:h-[76px] object-contain"
            alt="Element logo stock"
            src="/Desktop-assets/10x-logo--stock-.svg"
          /> */}
          {/* <div className="absolute -bottom-1 right-0 text-white text-[8px] sm:text-[10px] font-normal">
            SRM
          </div> */}

      {/* Main content */}
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
          {/* TECHNICAL title in the middle */}
          <div className="flex justify-center mb-12">
            <h1 
              className="font-batman text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider"
              style={{ 
                textShadow: '0_0_15px_rgba(255,82,0,1),0_0_30px_rgba(255,82,0,0.8),0_0_45px_rgba(255,82,0,0.6)',
                fontFamily: "'BatmanForeverAlternate', sans-serif"
              }}
            >
              TECHNICAL
            </h1>
          </div>

          {/* Domain cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4 lg:gap-6 xl:gap-8 place-items-center">
            {domainCards.map((card, index) => (
              <div
                key={card.title}
                className={`w-full max-w-[280px] md:max-w-[180px] lg:max-w-[200px] ${
                  index === 1 ? '-mt-8 md:-mt-12' : ''
                }`}
              >
                {/* Title moved outside and above the card */}
                <h3
                  style={{ fontFamily: "Montserrat" }}
                  className="text-white text-base md:text-sm lg:text-base xl:text-lg font-normal tracking-tight text-center whitespace-nowrap mb-2"
                >
                  {card.title}
                </h3>

                <Card className="relative w-full h-48 md:h-44 lg:h-48 xl:h-52 bg-transparent border-none overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-0 h-full relative">
                    {/* Background frame - Rectangle SVG */}
                    <img
                      className="absolute inset-0 w-full h-full object-contain z-0"
                      alt="Card background frame"
                      src={card.rectangle}
                      onError={() =>
                        console.log(
                          "Rectangle image failed to load:",
                          card.rectangle
                        )
                      }
                    />

                    {/* Main image */}
                    <div className="absolute inset-0 flex items-center justify-center pt-4 md:pt-4 lg:pt-4 xl:pt-6 pb-4 px-4 z-10">
                      <img
                        className="max-w-[70%] max-h-[70%] md:max-w-[75%] md:max-h-[75%] lg:max-w-[70%] lg:max-h-[70%] object-contain transition-transform duration-300 group-hover:scale-110"
                        alt={card.imageAlt}
                        src={card.image}
                        onError={() =>
                          console.log("Main image failed to load:", card.image)
                        }
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footerpage />
    </div>
  );
};

export default Technical;

