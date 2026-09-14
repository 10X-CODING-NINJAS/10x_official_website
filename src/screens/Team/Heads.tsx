import React from "react";

const headsData = [
  { name: "Prisha Kushwaha", role: "AI-ML Head", image: "/images/Prisha Kushwaha_AIML_HEAD.png" },
  { name: "Yatiendra Rai", role: "Web-Dev Head", image: "/images/YATINDRA RAI.png" },
  { name: "Ishaan Upponi", role: "Web-Dev Head", image: "/images/ISHAN.png" },
  { name: "Dhwani Sharma", role: "Corporate Head", image: "/images/DHAWANI.png" },
  { name: "Aradhya", role: "Corporate Head", image: "/images/ARADHYA.png" },
  { name: "Garima Gupta", role: "Creative Head", image: "/images/GARIMA GUPTA.png" },
  { name: "Krish", role: "Sponsorship Head", image: "/images/Krishved_Sponsorship_Head.png" },
];

const Heads = () => {
  return (
    <section className="w-full flex flex-col items-center pt-10 pb-6">
      <img
        src="/images/Heads.png"
        alt="Heads"
        className="mb-6 sm:mb-8 md:mb-10 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[240px] object-contain"
      />
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8 w-full max-w-6xl">
        {headsData.map((head, idx) => (
          <div key={idx} className="flex flex-col items-center w-[150px] sm:w-[180px] md:w-[200px]">
            <img
              src={head.image}
              alt={head.name}
              className="w-full h-auto object-contain"
              draggable="false"
            />
            <div className="mt-3 text-center">
              <span className="block text-white text-base md:text-lg font-semibold leading-tight">
                {head.name}
              </span>
              <span className="text-gray-300 text-xs italic mt-1">
                {head.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Heads;
