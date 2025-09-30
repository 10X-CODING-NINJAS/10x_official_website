import React, { useState, useEffect } from "react";
import AboutPage from "./AboutPage/AboutPage";
import DomainPage from "./Domains/screens/DomainPage";
import EventCQ from "./EventsCQ/EventsCQ";
import { LandingPage } from "./TitlePage/LandingPage";
import { Button } from "./Domains/components/ui/button";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { label: "Home", href: "/#", active: false },
  { label: "Domains", href: "/#domains", active: false },
  { label: "Team", href: "/board", active: false },
];

const Home: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    if (window.location.hash.includes("domains")) setActive("Domains");
    else if (window.location.pathname.startsWith("/board")) setActive("Teams");
    else setActive("Home");
  }, [window.location.hash, window.location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
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

      {/* Spacer to offset fixed header height */}
      <div className="h-[150px] lg:h-[160px]" />

      {/* Pages */}
      <LandingPage />
      <AboutPage />
      <DomainPage />
      <EventCQ />
    </>
  );
};

export default Home;