import React from "react";

const headsData = [
  { name: "Prisha Kushwaha", role: "AI-ML", image: "/images/Prisha Kushwaha_AIML_HEAD.png" },
  { name: "Yatindra Rai", role: "Web-Dev", image: "/images/YATINDRA RAI.png" },
  { name: "Ishaan Upponi", role: "Web-Dev", image: "/images/ISHAN.png" },
  { name: "Richelle Ranjan", role: "App-Dev", image: "/images/RICHELLE.png" },
  { name: "Dhwani Sharma", role: "Corporate", image: "/images/DHAWANI.png" },
  { name: "Aradhya Somani", role: "Corporate", image: "/images/ARADHYA.png" },
  { name: "Garima Gupta", role: "Creatives", image: "/images/GARIMA GUPTA.png" },
  { name: "Krishved Singh Dugtal", role: "Sponsorships", image: "/images/Krishved_Sponsorship_Head.png" },
];

const headsHeadingUrl = "/images/Heads.png";
const clipPolygon = "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)";

const Heads = () => {
  const rows = [
    headsData.slice(0, 4),
    headsData.slice(4, 8),
  ];

  return (
    <section className="w-full flex flex-col items-center pt-10 pb-6">
      <img
        src={headsHeadingUrl}
        alt="Heads"
        className="mb-6 sm:mb-8 md:mb-10 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[240px] object-contain"
      />
      <div className="w-full flex flex-col items-center">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 gap-y-8 sm:gap-y-10 mb-6 sm:mb-8 w-full max-w-6xl justify-items-center"
          >
            {row.map((head, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="relative w-[150px] h-[180px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] bg-[#ff6000] p-[3px]"
                  style={{ clipPath: clipPolygon }}
                >
                  <img
                    src={head.image}
                    alt={head.name}
                    className="w-full h-full object-cover"
                    style={{ clipPath: clipPolygon }}
                  />
                </div>
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
        ))}
      </div>
    </section>
  );
};

export default Heads;

