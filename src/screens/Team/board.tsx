import React, { useState, useEffect } from "react";
import { Button } from "../Domains/components/ui/button";
import { Menu, X } from "lucide-react";

import Heads from "../Team/Heads";
import Associates from "../Team/Associates";

const navigationItems = [
  { label: "Home", href: "/#", active: false },
  { label: "Domains", href: "/#domains", active: false },
  { label: "Teams", href: "/board", active: false },
];

const Board: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Teams");

  useEffect(() => {
    if (window.location.hash.includes("domains")) setActive("Domains");
    else if (window.location.pathname.startsWith("/board")) setActive("Teams");
    else setActive("Home");
  }, [window.location.hash, window.location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full min-h-[100dvh] bg-black">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Background Rectangles */}
        <img
          className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-full max-w-[1094px] h-auto"
          alt="Rectangle"
          src="/Title/Rectangle 5047.svg"
        />
        <img
          className="absolute top-[-11px] left-1/2 transform -translate-x-1/2 w-full max-w-[1102px] h-auto"
          alt="Rectangle"
          src="/Title/Rectangle 5048.svg"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute top-[15px] left-1/2 transform -translate-x-1/2 gap-4 h-[45px]">
          {navigationItems.map((item) => {
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
            {navigationItems.map((item) => {
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

      {/* Spacer for fixed navbar */}
      <div className="h-[150px] lg:h-[160px]" />

      {/* Background overlay */}
      <img
        src="/images/background.png"
        alt="background overlay"
        className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none select-none -z-10"
        draggable="false"
        style={{ opacity: 1 }}
      />

      {/* Board content (same as before) */}
      <div className="w-full flex flex-col items-center pt-8">
        <img
          src="/images/BackstageNinjas.png"
          alt="Meet Our Backstage Ninjas"
          className="w-[300px] max-w-full h-auto"
          draggable="false"
        />
        {/* ... (rest of your board content remains unchanged) ... */}
        <div className="w-full flex flex-col items-center mt-16">
          <Heads />
          <Associates />
        </div>
        <img
          src="/images/FootBorder.png"
          alt="Footer Border"
          className="w-full h-auto z-20 pointer-events-none select-none mt-16"
          draggable="false"
          style={{ minWidth: "100vw" }}
        />
      </div>
    </div>
  );
};

export default Board;
