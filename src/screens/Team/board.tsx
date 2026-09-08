import React from "react";
import Heads from "./Heads";
import Associates from "./Associates";

// Team member data for the leadership board
const boardMembers = {
  cSuite: [
    { name: "Vansh Jain", role: "Emerging Chief Executive Officer", img: "/images/Vansh ECEO.png" },
    { name: "Rafae Mohammed Hussain", role: "Chief Executive Officer", img: "/images/Rafae CEO.png", featured: true },
    { name: "Hemant Thakkar", role: "Chief Technical Officer", img: "/images/Hemant CTO.png" },
  ],
  board: [
    { name: "Atharv Garg", role: "Chief Marketing Officer", img: "/images/Atharv CMO.png" },
    { name: "Ashmit Bhadoria", role: "Chief Creative Officer", img: "/images/Ashmit CCO.png" },
    { name: "Hetav Desai", role: "Chief Outreach Officer", img: "/images/Hetav COO.png" },
  ],
};

const MemberCard: React.FC<{
  name: string;
  role: string;
  img: string;
  featured?: boolean;
}> = ({ name, role, img, featured }) => (
  <div className={`flex flex-col items-center group ${featured ? "lg:-mt-4" : ""}`}>
    <div
      className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] lg:w-[260px] lg:h-[260px] overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-[1.03]"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover rounded-xl"
        loading="lazy"
        style={{
          boxShadow: featured ? "0 0 30px rgba(255, 82, 0, 0.4)" : "none"
        }}
      />
    </div>
    <h3
      className="font-montserrat text-base font-semibold text-center mt-2"
      style={{ color: "var(--text-primary)" }}
    >
      {name}
    </h3>
    <p
      className="font-montserrat text-sm mt-1 text-center"
      style={{ color: "var(--accent)" }}
    >
      {role}
    </p>
  </div>
);

const Board: React.FC = () => {
  return (
    <main
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Restoring the original background aesthetic */}
      <img
        src="/images/background.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0 pointer-events-none"
      />
      <img
        src="/images/lighting.png"
        alt="Lighting effect"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-auto opacity-70 z-0 pointer-events-none"
      />

      <div className="container-main relative z-10 section-spacing">
        {/* Page Title */}
        <div className="text-center mb-16 lg:mb-24">
          <img 
            src="/images/The Board.png" 
            alt="THE BOARD" 
            className="mx-auto w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] object-contain mb-4"
          />
        </div>

        {/* C-Suite Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-12 lg:gap-16 mb-24">
          {boardMembers.cSuite.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>

        {/* Board Row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-12 lg:gap-16 mb-32">
          {boardMembers.board.map((member) => (
            <MemberCard key={member.name} {...member} />
          ))}
        </div>

        {/* Heads + Associates */}
        <Heads />
        <Associates />
      </div>
    </main>
  );
};

export default Board;