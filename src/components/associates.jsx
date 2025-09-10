import React from "react";

const associatesData = [
  { name: "Aman Deep Singh", role: "AI-ML" },
  { name: "Saket Ruia ", role: "AI-ML" },
  { name: "Yash Vipul Sinojia", role: "AI-ML" },
  { name: "Somesh Das", role: "Web-Dev" },
  { name: "Pratyush Srivastava", role: "Web-Dev" },
  { name: "Grisha Sethi", role: "Web-Dev" },
  { name: "Shreya Sunil", role: "Creatives" },
  { name: "Srushtitha M", role: "Creatives" },
  { name: "Aastha Bhatia", role: "Creatives" },
  { name: "Samaksh Goel", role: "Creatives" },
  { name: "Sayed Ishan", role: "Creatives" },
  { name: "Shrey Sharma", role: "Creatives" },
  { name: "Lakshya Agarwal", role: "Editorial" },
  { name: "Krishved Singh Dugtal", role: "Sponsorship" },
  { name: "Devashree Hote", role: "Sponsorship" },
];

const imageUrl = "/public/images/vikrant.png.jpg"; // Use your image path
const frameUrl = "/public/images/frame.png"; // Use your frame image path
const associatesHeadingUrl = "/public/images/Associates.png"; // Use your vector path

const Associates = () => {
  // Split data for grid rows
  const rows = [
    associatesData.slice(0, 4),
    associatesData.slice(4, 8),
    associatesData.slice(8, 12),
    associatesData.slice(12, 15),
  ];

  return (
    <section className="w-full flex flex-col items-center pt-10 pb-6">
      <img
        src={associatesHeadingUrl}
        alt="Associates"
        className="mb-10 w-[260px] md:w-[320px] lg:w-[380px] object-contain"
      />
      <div className="w-full flex flex-col items-center">
        {/* First 3 rows: 4 columns */}
        {rows.slice(0, 3).map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 mb-8 w-full max-w-6xl"
          >
            {row.map((associate, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-[180px] h-[220px] md:w-[220px] md:h-[260px] lg:w-[240px] lg:h-[280px] flex items-center justify-center">
                  <img
                    src={frameUrl}
                    alt="Frame"
                    className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
                  />
                  <img
                    src={imageUrl}
                    alt={associate.name}
                    className="w-[80%] h-[80%] object-cover rounded-[24px] z-0 mx-auto"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="block text-white text-base md:text-lg font-semibold leading-tight">
                    {associate.name}
                  </span>
                  <span className="text-gray-300 text-xs italic mt-1">
                    {associate.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
        {/* Last row: center aligned */}
        <div className="flex justify-center gap-x-10 mb-8 w-full">
          {rows[3].map((associate, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-[180px] h-[220px] md:w-[220px] md:h-[260px] lg:w-[240px] lg:h-[280px] flex items-center justify-center">
                <img
                  src={frameUrl}
                  alt="Frame"
                  className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
                />
                <img
                  src={imageUrl}
                  alt={associate.name}
                  className="w-[80%] h-[80%] object-cover rounded-[24px] z-0 mx-auto"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="block text-white text-base md:text-lg font-semibold leading-tight">
                  {associate.name}
                </span>
                <span className="text-gray-300 text-xs italic mt-1">
                  {associate.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Associates;