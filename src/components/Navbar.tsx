import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Domains", href: "/#domains" },
  { label: "Team", href: "/board" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const getActiveLabel = () => {
    const path = location.pathname;
    const hash = location.hash;
    if (path === "/board" || path === "/teams") return "Team";
    if (path === "/technical" || path === "/mobile") return "Domains";
    if (hash === "#about") return "About";
    if (hash === "#domains") return "Domains";
    return "Home";
  };

  const active = getActiveLabel();

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--bg-surface)]/95 backdrop-blur-md border-b border-[var(--border)]"
            : "bg-transparent border-b border-transparent"
        }`}
        role="banner"
      >
        <div className="container-main flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 z-10"
            aria-label="10X Club SRM Home"
          >
            <img
              src="./Footer/10X Logo.svg"
              alt="10X Club SRM"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" role="navigation">
            {navigationItems.map((item) => {
              const isActive = active === item.label;
              const isHashLink = item.href.startsWith("/#");

              return isHashLink ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-4 py-2 font-montserrat text-[0.8rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--accent)]" />
                  )}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative px-4 py-2 font-montserrat text-[0.8rem] font-semibold tracking-[0.1em] uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--accent)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--accent)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://www.instagram.com/srm_cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary group relative overflow-hidden text-[0.75rem] py-2 px-5"
          >
            <span className="relative z-10 flex items-center">
              JOIN 10X
            </span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            <span
              className={`block w-5 h-[1.5px] bg-[var(--text-primary)] transition-all duration-300 ${
                isMobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[var(--text-primary)] transition-all duration-300 ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[var(--text-primary)] transition-all duration-300 ${
                isMobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-[var(--bg-primary)] transition-all duration-400 ${
          isMobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col justify-center h-full px-8" role="navigation">
          {navigationItems.map((item, i) => {
            const isActive = active === item.label;
            const isHashLink = item.href.startsWith("/#");

            const className = `block font-batman text-[2rem] tracking-wider uppercase transition-all duration-300 mb-6 ${
              isActive ? "text-[var(--accent)]" : "text-[var(--text-primary)] hover:text-[var(--accent)]"
            }`;

            const style = {
              animationDelay: `${i * 80}ms`,
            };

            return isHashLink ? (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`${className} ${isMobileOpen ? "animate-fade-in-up" : ""}`}
                style={style}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={`${className} ${isMobileOpen ? "animate-fade-in-up" : ""}`}
                style={style}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="mt-8" style={{ animationDelay: `${navigationItems.length * 80}ms` }}>
            <a
              href="https://www.instagram.com/srm_cn/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileOpen(false)}
              className={`btn-primary text-sm ${isMobileOpen ? "animate-fade-in-up" : ""}`}
            >
              JOIN 10X
            </a>
          </div>
        </nav>
      </div>

      {/* Spacer to offset fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
