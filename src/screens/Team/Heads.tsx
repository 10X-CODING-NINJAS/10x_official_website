import React from "react";

const headsData = [
  { name: "Jayesh Jain", role: "AI-ML" },
  { name: "Pranav Tiwari", role: "AI-ML" },
  { name: "Jay Jariwala", role: "App-Dev" },
  { name: "Nishtha Goyal", role: "Web-Dev" },
  { name: "Ashneet Jha", role: "Web-Dev" },
  { name: "Brindha B", role: "Corporate" },
  { name: "Shreyas B", role: "Corporate" },
  { name: "Allan Roy", role: "Corporate" },
  { name: "Archit Patre", role: "Creatives" },
  { name: "Ananya Mahajan", role: "Creatives" },
  { name: "Malvi Sood", role: "Editorial" },
  { name: "Jay Agrawal", role: "Editorial" },
  { name: "Devashree Hote", role: "Sponsorships" },
  { name: "Krishved Singh Dugtal", role: "Sponsorships" },
];

const frameUrl = "/images/frame.png";
const headsHeadingUrl = "/images/Heads.png";

const Heads = () => {
  const rows = [
    headsData.slice(0, 4),
    headsData.slice(4, 8),
    headsData.slice(8, 12),
    headsData.slice(12, 14), // Last row: Devashree + Krish
  ];

  return (
    <section className="w-full flex flex-col items-center pt-10 pb-6">
      <img
        src={headsHeadingUrl}
        alt="Heads"
        className="mb-6 sm:mb-8 md:mb-10 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[240px] object-contain"
      />
      <div className="w-full flex flex-col items-center">
        {/* First 3 rows */}
        {rows.slice(0, 3).map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 gap-y-8 sm:gap-y-10 mb-6 sm:mb-8 w-full max-w-6xl"
          >
            {row.map((head, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-[150px] h-[180px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] flex items-center justify-center">
                  {/* Custom: Jayesh + Pranav */}
                  {rowIdx === 0 && idx === 0 ? (
                    <>
                      <img
                        src="/images/Jayesh.png"
                        alt="Jayesh Jain"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/Jayesh.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 0 && idx === 1 ? (
                    <>
                      <img
                        src="/images/Pranav.png"
                        alt="Pranav Tiwari"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/Pranav.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 0 && idx === 2 ? (
                    <>
                      <img
                        src="/images/Jay.png"
                        alt="Pranav Tiwari"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/Jay.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 0 && idx === 3 ? (
                    <>
                      <img
                        src="/images/Nishtha.png"
                        alt="Pranav Tiwari"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/Nishtha.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 1 && idx === 0 ? (
                    <>
                      <img
                        src="/images/Ashneet.png"
                        alt="Pranav Tiwari"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/Ashneet.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 1 && idx === 1 ? (
                    <>
                      <img
                        src="/images/Brindha.png"
                        alt="Pranav Tiwari"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/Brindha.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 1 && idx === 2 ? (
                    <>
                      <img
                        src="/images/Shreyas.png"
                        alt="Pranav Tiwari"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/Shreyas.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 1 && idx === 3 ? (
                    <>
                      <img
                        src="/images/Allan.png"
                        alt="Pranav Tiwari"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/Allan.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 2 && idx === 0 ? (
                    <>
                      <img
                        src="/images/Archit.png"
                        alt="Pranav Tiwari"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/Archit.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 2 && idx === 1 ? (
                    <>
                      <img
                        src="/images/Ananya.png"
                        alt="Pranav Tiwari"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/Ananya.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 2 && idx === 2 ? (
                    <>
                      <img
                        src="/images/Malvi.png"
                        alt="Pranav Tiwari"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/Malvi.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 2 && idx === 3 ? (
                    <>
                      <img
                        src="/images/JayAG.png"
                        alt="Pranav Tiwari"
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src="/images/JayAG.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src="/images/default.png"
                        alt={head.name}
                        className="absolute z-10 object-cover"
                        style={{
                          top: "15%",
                          left: "15%",
                          width: "70%",
                          height: "70%",
                          borderRadius: "24px",
                          clipPath:
                            "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                        }}
                      />
                      <img
                        src={frameUrl}
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  )}
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

        {/* Last row: Devashree + Krish */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 gap-y-8 sm:gap-y-10 mb-6 sm:mb-8 w-full max-w-6xl">
          {rows[3].map((head, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-[180px] h-[220px] md:w-[220px] md:h-[260px] lg:w-[240px] lg:h-[280px] flex items-center justify-center">
                {idx === 0 ? (
                  <>
                    <img
                      src="/images/Devashree.png"
                      alt="Devashree Hote"
                      className="absolute z-10 object-cover"
                      style={{
                        top: "15%",
                        left: "15%",
                        width: "70%",
                        height: "70%",
                        borderRadius: "24px",
                        clipPath:
                          "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                      }}
                    />
                    <img
                      src="/images/Devashree.png"
                      alt="Frame"
                      className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                    />
                  </>
                ) : idx === 1 ? (
                  <>
                    <img
                      src="/images/Krish.png"
                      alt="Krishved Singh Dugtal"
                      className="absolute z-10 object-cover"
                      style={{
                        top: "15%",
                        left: "15%",
                        width: "70%",
                        height: "70%",
                        borderRadius: "24px",
                        clipPath:
                          "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
                      }}
                    />
                    <img
                      src="/images/Krish.png"
                      alt="Frame"
                      className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                    />
                  </>
                ) : null}
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
      </div>
    </section>
  );
};

export default Heads;
