import React, { useState, useEffect } from "react";
import { Button } from "../Domains/components/ui/button";
import { Menu, X } from "lucide-react";

import Heads from "../Team/Heads";
import Associates from "../Team/Associates";

const navigationItems = [
  { label: "Home", href: "/#", active: false },
  { label: "Domains", href: "/#domains", active: false },
  { label: "Team", href: "/board", active: false },
];

const Board: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Teams");
  // ✨ ADDED STATE FOR MOBILE MENU VISIBILITY
  const [open, setOpen] = useState(false);

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
          className="hidden md:block absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-full max-w-[1094px] h-auto"
          alt="Rectangle"
          src="/Title/Rectangle 5047.svg"
        />
        <img
          className="hidden md:block absolute top-[-11px] left-1/2 transform -translate-x-1/2 w-full max-w-[1102px] h-auto"
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

        {/* Mobile Menu Dropdown Panel */}
        {open && (
          <div className="lg:hidden animate-fade-in-down px-3 pb-3">
            <div className="p-3 rounded-2xl border border-white/10 bg-[#1a1a1a]/90 backdrop-blur-md flex flex-col gap-3 text-sm">
              {navigationItems.map((item) => {
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
            </div>
          </div>
        )}
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
        {/* Centered frames row */}
        <div className="flex flex-row items-start justify-center mt-20 gap-12">
          {/* Left frame and text */}
          <div className="flex flex-col items-center mt-[25px]">
            <img
              src="/images/Vansh ECEO.png"
              alt="Frame Left"
              className="w-[300px] max-w-full h-auto"
              draggable="false"
            />
            <div className="mt-4 text-center">
              <div className="text-white text-sm font-bold">Vansh Jain</div>
              <div className="text-gray-300 text-xs italic mt-1">
                Emerging Chief Executive Officer
              </div>
            </div>
          </div>
          {/* Center frame and text with photo */}
          <div className="flex flex-col items-center relative">
            {/* Orange shadow behind the frame towards the top */}
            <div
              className="absolute left-1/2 -translate-x-1/2 -top-20 w-[320px] h-[180px] z-0 pointer-events-none select-none"
              style={{
                background:
                  "radial-gradient(ellipse at top, rgba(255,140,0,0.55) 0%, rgba(255,140,0,0.18) 70%, transparent 100%)",
                filter: "blur(40px)",
              }}
              aria-hidden="true"
            />
            {/* Lighting behind the frame */}
            <img
              src="/images/lighting.png"
              alt=""
              className="absolute top-[38%] left-1/2 w-[380px] h-[380px] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
              draggable="false"
              aria-hidden="true"
            />

            <img
              src="/images/Rafae CEO.png"
              alt="Frame Center"
              className="w-[300px] max-w-full h-auto relative z-20 mb-25"
              draggable="false"
            />
            <div className="mt-4 text-center relative z-20">
              <div className="text-white text-sm font-bold">
                Rafae Mohammed Hussain
              </div>
              <div className="text-gray-300 text-xs italic mt-1">
                Chief Executive Officer
              </div>
            </div>
          </div>
          {/* Right frame and text */}
          <div className="flex flex-col items-center mt-[25px]">
            <img
              src="/images/Hemant CTO.png"
              alt="Frame Right"
              className="w-[300px] max-w-full h-auto"
              draggable="false"
            />
            <div className="mt-4 text-center">
              <div className="text-white text-sm font-bold">Hemant Thakkar</div>
              <div className="text-gray-300 text-xs italic mt-1">
                Chief Technical Officer
              </div>
            </div>
          </div>
        </div>
        {/* TheBoard.png below the center frames */}
        <img
          src="/images/TheBoard.png"
          alt="The Board"
          className="w-[320px] max-w-full h-auto mt-8"
          draggable="false"
        />
        {/* Frames row below TheBoard.png */}
        <div className="flex flex-row items-start justify-center mt-8 gap-12">
          {/* Far left frame and text */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Atharv CMO.png"
              alt="Frame Far Left"
              className="w-[300px] max-w-full h-auto"
              draggable="false"
            />
            <div className="mt-4 text-center">
              <div className="text-white text-sm font-bold">Atharv Garg</div>
              <div className="text-gray-300 text-xs italic mt-1">
                Chief Marketing Officer
              </div>
            </div>
          </div>
          {/* Middle frame and text */}
          <div className="flex flex-col items-center mt-[25px]">
            <img
              src="/images/Ashmit CCO.png"
              alt="Frame Below The Board"
              className="w-[300px] max-w-full h-auto"
              draggable="false"
            />
            <div className="mt-4 text-center">
              <div className="text-white text-sm font-bold">
                Ashmit Bhadoria
              </div>
              <div className="text-gray-300 text-xs italic mt-1">
                Chief Creative Officer
              </div>
            </div>
          </div>
          {/* Far right frame and text */}
          <div className="flex flex-col items-center">
            <img
              src="/images/Hetav COO.png"
              alt="Frame Far Right"
              className="w-[300px] max-w-full h-auto"
              draggable="false"
            />
            <div className="mt-4 text-center">
              <div className="text-white text-sm font-bold">Hetav Desai</div>
              <div className="text-gray-300 text-xs italic mt-1">
                Chief Outreach Officer
              </div>
            </div>
          </div>
        </div>
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