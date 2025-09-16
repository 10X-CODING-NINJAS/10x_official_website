import React, { useState, useEffect } from 'react';
import AboutPage from './AboutPage/AboutPage';
import DomainPage from './Domains/screens/DomainPage';
import EventCQ from './EventsCQ/EventsCQ';
import { LandingPage } from './TitlePage/LandingPage';
import { Button } from './Domains/components/ui/button';

const navigationItems = [
  { label: 'Home', href: '/#' },
  { label: 'Domains', href: '/#domains' },
  { label: 'Teams', href: '/board' },
];

// Home aggregates the public landing sections shown on the root route
const Home: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    if (window.location.hash.includes('domains')) setActive('Domains');
    else if (window.location.pathname.startsWith('/board')) setActive('Teams');
    else setActive('Home');
  }, [window.location.hash, window.location.pathname]);

  return (
    <>
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-center">
          <div className="hidden lg:block relative">
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
                    variant={isActive ? 'default' : 'outline'}
                    onClick={() => setActive(item.label)}
                    className={`
                      h-[38px] px-5 rounded-[40px] text-[18px] font-semibold tracking-[-0.5px]
                      [font-family:'Montserrat',Helvetica] transition-all duration-300
                      ${
                        isActive
                          ? 'bg-[#4c1900] text-white border-none shadow'
                          : 'bg-transparent text-white border-[2.5px] border-[#4c1900] hover:bg-[#4c1900]/15'
                      }
                      ${idx === 1 ? 'w-[150px]' : 'w-[120px]'}
                    `}
                  >
                    <a href={item.href}>{item.label}</a>
                  </Button>
                );
              })}
            </nav>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(p => !p)}
            className="lg:hidden inline-flex flex-col justify-center gap-1.5 w-8 h-8 rounded-md border border-white/20 text-white"
            aria-label="Toggle menu"
          >
            <span className={`h-0.5 w-5 bg-white transition ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-white transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-white transition ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </div>

        {open && (
          <div className="lg:hidden animate-fade-in-down px-3 pb-3">
            <div className="p-3 rounded-2xl border border-white/10 bg-[#1a1a1a]/90 backdrop-blur-md flex flex-col gap-3 text-sm">
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
                        ? 'bg-[#4c1900] border-[#4c1900] text-white'
                        : 'border-[#4c1900] text-white hover:bg-[#4c1900]/20'
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

      {/* Spacer to offset fixed header height */}
      <div className="h-[150px] lg:h-[160px]" />

      <LandingPage />
      <AboutPage />
      <DomainPage />
      <EventCQ />
    </>
  );
};

export default Home;
