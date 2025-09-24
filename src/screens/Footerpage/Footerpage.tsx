import React from "react";
import { Link } from "react-router-dom";

export const Footerpage = (): JSX.Element => {
  return (
    <div className="w-screen overflow-hidden bg-[#000000] flex flex-col items-stretch justify-start py-4 relative footer-full-bleed">
      
      <div className="w-full flex flex-col">
        {/* Decorative line at the top */}
        <div className="w-full h-4 md:h-4 my-2">
          <img className="w-full h-full" alt="Line" src="./Footer/line-2.svg" />
        </div>

        {/* Logo top left */}
        <div className="w-full flex justify-start items-center mb-2 px-2 md:px-6">
          <img className="w-28 md:w-[160px] h-16 md:h-[80px] object-contain" alt="10x logo" src="./Footer/10X Logo.svg" />
        </div>

        {/* Main content row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-stretch px-6 md:px-12 mt-3 md:mt-8 gap-10 md:gap-6">
          
          {/* Mobile: nav centered, desktop: left */}
          <nav className="flex flex-col gap-2 md:gap-3 w-full md:w-auto items-center md:items-start order-1 md:order-none">
            <Link to="/#about" className="[font-family:'Montserrat',Helvetica] font-normal text-white text-2xl md:text-4xl tracking-wide md:tracking-[3.00px] leading-normal hover:text-orange-500 cursor-pointer">About</Link>
            <Link to="/#domains" className=" font-normal text-[#FFF] text-2xl md:text-4xl tracking-wide md:tracking-[3.00px] leading-normal hover:text-orange-500 cursor-pointer">Domains</Link>
            <Link to="/board" className="[font-family:'Montserrat',Helvetica] font-normal text-white text-2xl md:text-4xl tracking-wide md:tracking-[3.00px] leading-normal hover:text-orange-500 cursor-pointer">Teams</Link>
          </nav>
          
          {/* Center ninja gif */}
          <div className="flex flex-col items-center justify-center py-3 order-2 md:order-none">
            <div className="footer-ninja-wrapper transition-all">
              <img className="drop-shadow-[0_0_25px_rgba(255,140,0,0.6)]" alt="Ninjas" src="./Footer/Ninja-animated.gif" />
            </div>
          </div>

          {/* Mobile: domains centered, desktop: right */}
          <section className="flex flex-col items-center md:items-end gap-2 md:gap-3 w-full md:w-auto order-3 md:order-none md:mt-0">
            <h2 className=" font-batman text-white text-xl md:text-[50px] tracking-[0] leading-[normal] whitespace-nowrap mb-2">Domains</h2>
            
            {/* ✨ THIS SECTION IS RESTRUCTURED INTO TWO COLUMNS ✨ */}
            <div className="flex justify-center md:justify-end gap-x-8 md:gap-x-12">
              {/* Left Column */}
              <div className="flex flex-col gap-y-1 md:gap-y-2">
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-lg md:text-2xl text-center md:text-right tracking-wide md:tracking-[3.00px] leading-tight md:leading-[35.0px]">Corporate</div>
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-lg md:text-2xl text-center md:text-right tracking-wide md:tracking-[3.00px] leading-tight md:leading-[35.0px]">Creatives</div>
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-lg md:text-2xl text-center md:text-right tracking-wide md:tracking-[3.00px] leading-tight md:leading-[35.0px]">Editorial</div>
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-lg md:text-2xl text-center md:text-right tracking-wide md:tracking-[3.00px] leading-tight md:leading-[35.0px]">Sponsorship</div>
              </div>
              {/* Right Column */}
              <div className="flex flex-col gap-y-1 md:gap-y-2">
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-lg md:text-2xl text-center md:text-right tracking-wide md:tracking-[3.00px] leading-tight md:leading-[35.0px]">AI/ML</div>
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-lg md:text-2xl text-center md:text-right tracking-wide md:tracking-[3.00px] leading-tight md:leading-[35.0px]">Web Dev</div>
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-white text-lg md:text-2xl text-center md:text-right tracking-wide md:tracking-[3.00px] leading-tight md:leading-[35.0px]">App Dev</div>
              </div>
            </div>
          </section>
        </div>

        {/* Social icons row */}
        <div className="w-full flex flex-col items-center mt-4 md:mt-6">
          <h3 className="[font-family:'Montserrat',Helvetica] font-bold text-white text-base md:text-2xl tracking-wide md:tracking-[3.00px] leading-normal mb-2">Follow Us</h3>
          <div className="flex gap-1 md:gap-2">
            <a href="https://www.linkedin.com/company/coding-ninjas-club-srm/posts/?feedView=all">
              <img className="w-8 h-8 md:w-12 mx-4 md:h-12" alt="LinkedIn" src="./Footer/Vector-1.png" /> </a>
            <a href="https://www.instagram.com/srm_cn/"><img className="w-8 h-8 md:w-12 md:h-12 mx-4" alt="Instagram" src="./Footer/Vector-3.png" /></a>
          </div>
        </div>

        {/* Bottom decorative graphic */}
        <div className="w-full relative h-14 md:h-[160px] mt-4 md:mt-6">
          <img className="absolute w-full h-14 md:h-[160px] top-0 left-0 object-cover" alt="Rectangle" src="./Footer/Rectangle 5049.svg" />
          <img className="absolute w-full h-14 md:h-[160px] top-3 md:top-[25px] left-0 object-cover" alt="Rectangle" src="./Footer/Rectangle 5050.svg" />
        </div>
      </div>
    </div>
  );
};