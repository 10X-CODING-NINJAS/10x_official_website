import React, { useState } from "react";
import { Button } from "../Domains/components/ui/button";

import Heads from "../Team/Heads";
import Associates from "../Team/Associates";

const navItems = [
  { label: "Home", href: "/#" },
  { label: "Domains", href: "/#domains" },
  { label: "Teams", href: "/board" },
];

const Board = () => {
  const [active, setActive] = useState("Teams");
  // ✨ ADDED STATE FOR MOBILE MENU VISIBILITY
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full min-h-[100dvh] bg-black">
      {/* NAVBAR */}
      {/* ✨ THE ENTIRE HEADER BELOW IS UPDATED WITH THE MOBILE MENU CODE */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-end lg:justify-center">
          {/* Desktop Navbar (unchanged) */}
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

          {/* Mobile menu button (Hamburger Icon) */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="lg:hidden inline-flex flex-col justify-center gap-1.5 w-8 h-8 rounded-md border border-white/20 text-white"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 bg-white transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu Dropdown Panel */}
        {open && (
          <div className="lg:hidden animate-fade-in-down px-3 pb-3">
            <div className="p-3 rounded-2xl border border-white/10 bg-[#1a1a1a]/90 backdrop-blur-md flex flex-col gap-3 text-sm">
              {navItems.map((item) => {
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

      <div className="h-[150px] lg:h-[160px]" />

      {/* Background overlay */}
      <img
        src="/images/background.png"
        alt="background overlay"
        className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none select-none -z-10"
        draggable="false"
        style={{ opacity: 1 }}
      />
      {/* Title image at top center */}
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
        <div className="w-full flex flex-col items-center mt-16">
          <Heads />
          <Associates />
        </div>
        {/* FootBorder at the bottom center, not fixed */}
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