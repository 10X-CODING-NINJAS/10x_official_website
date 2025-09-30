import React from "react";
import { Link } from "react-router-dom";

export const Footerpage = (): JSX.Element => {
  return (
    <div className="w-screen overflow-hidden bg-[#000000] flex flex-col items-stretch justify-start py-1 relative footer-full-bleed min-h-fit">
      
      <div className="w-full flex flex-col">
        {/* Decorative line at the top */}
        <div className="w-full h-1 md:h-2 my-0.5">
          <img className="w-full h-full" alt="Line" src="./Footer/line-2.svg" />
        </div>

        {/* Logo top left */}
        <div className="w-full flex justify-start items-center mb-0.5 px-2 md:px-3">
          <img className="w-16 md:w-20 h-8 md:h-12 object-contain" alt="10x logo" src="./Footer/10X Logo.svg" />
        </div>

        {/* Main content row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-stretch px-3 md:px-6 mt-1 md:mt-2 gap-2 md:gap-3">
          
          {/* Mobile: nav centered, desktop: left */}
          <nav className="flex flex-col gap-0.5 md:gap-1 w-full md:w-auto items-center md:items-start order-1 md:order-none ml-0 md:ml-4">
            <Link to="/#about" className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-lg tracking-wide md:tracking-[1.50px] leading-tight hover:text-orange-500 cursor-pointer">About</Link>
            <Link to="/#domains" className=" font-normal text-[#FFF] text-sm md:text-lg tracking-wide md:tracking-[1.50px] leading-tight hover:text-orange-500 cursor-pointer">Domains</Link>
            <Link to="/board" className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm md:text-lg tracking-wide md:tracking-[1.50px] leading-tight hover:text-orange-500 cursor-pointer">Teams</Link>
          </nav>
          
          {/* Center ninja gif */}
          <div className="flex flex-col items-center justify-center py-0.5 order-2 md:order-none">
            <div className="footer-ninja-wrapper transition-all scale-50 md:scale-75">
              <img className="drop-shadow-[0_0_25px_rgba(255,140,0,0.6)]" alt="Ninjas" src="./Footer/Ninja-animated.gif" />
            </div>
          </div>

          {/* Mobile: domains centered, desktop: right */}
          <section className="flex flex-col items-center md:items-end gap-0.5 md:gap-1 w-full md:w-auto order-3 md:order-none md:mt-0 mr-0 md:mr-4">
            <h2 className=" font-batman text-white text-sm md:text-xl tracking-[0] leading-[normal] whitespace-nowrap mb-0.5">Domains</h2>
            
            {/* ✨ THIS SECTION IS RESTRUCTURED INTO TWO COLUMNS ✨ */}
            <div className="flex justify-center md:justify-end gap-x-2 md:gap-x-4">
              {/* Left Column */}
              <div className="flex flex-col gap-y-0">
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xs md:text-sm text-center md:text-right tracking-wide md:tracking-[1.50px] leading-tight">Corporate</div>
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xs md:text-sm text-center md:text-right tracking-wide md:tracking-[1.50px] leading-tight">Creatives</div>
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xs md:text-sm text-center md:text-right tracking-wide md:tracking-[1.50px] leading-tight">Editorial</div>
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xs md:text-sm text-center md:text-right tracking-wide md:tracking-[1.50px] leading-tight">Sponsorship</div>
              </div>
              {/* Right Column */}
              <div className="flex flex-col gap-y-0">
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xs md:text-sm text-center md:text-right tracking-wide md:tracking-[1.50px] leading-tight">AI/ML</div>
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xs md:text-sm text-center md:text-right tracking-wide md:tracking-[1.50px] leading-tight">Web Dev</div>
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xs md:text-sm text-center md:text-right tracking-wide md:tracking-[1.50px] leading-tight">App Dev</div>
              </div>
            </div>
          </section>
        </div>

        {/* Social icons row */}
        <div className="w-full flex flex-col items-center mt-1 md:mt-1.5">
          <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-xs md:text-sm tracking-wide md:tracking-[1.50px] leading-normal mb-0.5">Follow Us</h3>
          <div className="flex gap-1">
            <a href="https://www.linkedin.com/company/coding-ninjas-club-srm/posts/?feedView=all">
              <img className="w-4 h-4 md:w-6 mx-1 md:h-6" alt="LinkedIn" src="./Footer/Vector-1.png" /> </a>
            <a href="https://www.instagram.com/srm_cn/"><img className="w-4 h-4 md:w-6 md:h-6 mx-1" alt="Instagram" src="./Footer/Vector-3.png" /></a>
          </div>
        </div>

        {/* Bottom decorative graphic */}
        <div className="w-full relative h-4 md:h-8 mt-1 md:mt-1.5">
          <img className="absolute w-full h-4 md:h-8 top-0 left-0 object-cover" alt="Rectangle" src="./Footer/Rectangle 5049.svg" />
          <img className="absolute w-full h-4 md:h-8 top-0.5 md:top-1 left-0 object-cover" alt="Rectangle" src="./Footer/Rectangle 5050.svg" />
        </div>
      </div>
    </div>
  );
};