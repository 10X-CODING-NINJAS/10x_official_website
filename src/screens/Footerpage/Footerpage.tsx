import React from "react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export const Footerpage = (): JSX.Element => {
  const sectionRef = useScrollReveal();
  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Domains", href: "/#domains" },
    { label: "Team", href: "/board" },
  ];

  const domainsList = [
    { col1: ["Corporate", "Creatives", "Sponsorship"] },
    { col2: ["AI/ML", "Web Dev", "App Dev"] },
  ];

  return (
    <footer
      ref={sectionRef}
      className="relative w-full"
      style={{ background: "var(--bg-primary)" }}
      role="contentinfo"
    >
      {/* Top border */}
      <div className="divider reveal" />

      <div className="container-main py-12 lg:py-16 reveal-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1: Logo + Branding */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="./Footer/10X Logo.svg"
                alt="10X Club SRM"
                className="h-10 w-auto"
              />
            </Link>
            <p
              className="font-montserrat text-sm leading-relaxed"
              style={{ color: "var(--text-tertiary)" }}
            >
              Coding Ninjas 10X Club SRM
              <br />
              Learn. Build. Ship.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3
              className="label-upper text-[0.7rem] mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Navigation
            </h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-montserrat text-sm transition-all duration-300 hover:text-[var(--accent)] hover:translate-x-1 inline-block"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="font-montserrat text-sm transition-all duration-300 hover:text-[var(--accent)] hover:translate-x-1 inline-block"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Column 3: Domains */}
          <div>
            <h3
              className="label-upper text-[0.7rem] mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              Domains
            </h3>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1.5">
                {domainsList[0].col1.map((d) => (
                  <span
                    key={d}
                    className="font-montserrat text-sm"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {d}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                {domainsList[1].col2.map((d) => (
                  <span
                    key={d}
                    className="font-montserrat text-sm"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="divider reveal mt-10 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span
              className="label-upper text-[0.65rem]"
              style={{ color: "var(--text-tertiary)" }}
            >
              Follow Us
            </span>
            <a
              href="https://www.linkedin.com/company/coding-ninjas-club-srm/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
              aria-label="LinkedIn"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="var(--text-secondary)"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/srm_cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="var(--text-secondary)"
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p
            className="font-montserrat text-xs"
            style={{ color: "var(--text-tertiary)" }}
          >
            © 2026 Coding Ninjas 10X Club SRM
          </p>
        </div>
      </div>
    </footer>
  );
};