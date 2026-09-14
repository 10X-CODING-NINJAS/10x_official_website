import React from "react";
import Heads from "../Team/Heads";
import Associates from "../Team/Associates";

interface BoardMemberProps {
  name: string;
  role: string;
  imagePath: string;
}

const BoardMember: React.FC<BoardMemberProps> = ({ name, role, imagePath }) => {
  return (
    <div className="flex flex-col items-center relative w-[160px] sm:w-[220px] md:w-[280px]">
      {/* Orange Glow (Subtle backing) */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] rounded-full bg-[#ff5200] opacity-35 blur-[30px] sm:blur-[50px] pointer-events-none z-0" />
      
      {/* Pre-framed Person Image */}
      <img
        src={imagePath}
        alt={name}
        className="w-full h-auto object-contain relative z-10"
        draggable="false"
      />

      {/* Details */}
      <div className="mt-2 sm:mt-4 text-center relative z-20">
        <div className="text-white text-[12px] sm:text-[15px] md:text-lg font-bold whitespace-nowrap">{name}</div>
        <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm italic mt-0.5 sm:mt-1 font-light whitespace-nowrap">{role}</div>
      </div>
    </div>
  );
};

const Board: React.FC = () => {
  return (
    <div className="relative w-full min-h-[100dvh] bg-[#0c0c0c]">
      {/* Background overlay */}
      <img
        src="/images/background.png"
        alt="background overlay"
        className="fixed top-0 left-0 w-full h-full object-cover pointer-events-none select-none -z-10"
        draggable="false"
        style={{ opacity: 0.6 }}
      />

      {/* 
        This wrapper uses justify-start and pt-[120px] to clear the global navbar.
      */}
      <div className="w-full min-h-[100dvh] flex flex-col items-center justify-start pt-[120px] sm:pt-[140px] md:pt-[160px] pb-10 relative z-10">
        <img
          src="/images/BackstageNinjas.png"
          alt="Meet Our Backstage Ninjas"
          className="w-[180px] sm:w-[260px] md:w-[320px] max-w-full h-auto mb-8 sm:mb-10 md:mb-12 z-20"
          draggable="false"
        />

        {/* 3-Column Staggered Grid Layout */}
        <div className="w-full max-w-[800px] md:max-w-[1000px] grid grid-cols-3 gap-2 sm:gap-6 md:gap-8 px-2 sm:px-4">
          
          {/* Left Column */}
          <div className="flex flex-col items-center pt-[50px] sm:pt-[80px] md:pt-[100px] gap-[30px] sm:gap-[50px] md:gap-[60px]">
            <BoardMember name="Shreyas B" role="Emerging Chief Executive Officer" imagePath="/images/Shreyas B.png" />
            <BoardMember name="Devashree Hote" role="Chief Outreach Officer" imagePath="/images/Devashree Hote.png" />
          </div>

          {/* Center Column */}
          <div className="flex flex-col items-center gap-[30px] sm:gap-[60px] md:gap-[80px]">
            <BoardMember name="Shrey Sharma" role="Chief Executive Officer" imagePath="/images/SHREY SHARMA.png" />
            <img src="/images/TheBoard.png" alt="THE BOARD" className="w-[140px] sm:w-[220px] md:w-[280px] h-auto object-contain" draggable="false" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center pt-[50px] sm:pt-[80px] md:pt-[100px] gap-[30px] sm:gap-[50px] md:gap-[60px]">
            <BoardMember name="Pratyush Srivastava" role="Chief Technical Officer" imagePath="/images/PRATYUSH SRIVASTAVA.png" />
            <BoardMember name="Brindha B" role="Chief Marketing Officer" imagePath="/images/BRINDHA B.png" />
          </div>

        </div>
      </div>

      {/* Heads & Associates Section directly underneath */}
      <div className="w-full flex flex-col items-center mt-10 sm:mt-16 relative z-10">
        <Heads />
        <Associates />
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