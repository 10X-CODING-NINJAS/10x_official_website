import React from "react";

const associatesData = [
  { name: "Aman Deep Singh", role: "AI-ML" },
  { name: "Saket Ruia ", role: "AI-ML" },
  { name: "Yash Vipul Sinojia", role: "AI-ML" },
  { name: "Somesh Das", role: "Web-Dev" },
  { name: "Pratyush Srivastava", role: "Web-Dev" },
  { name: "Grisha Sethi", role: "Web-Dev" },
  { name: "Kejal Jain", role: "Web-Dev" },
  { name: "Shreya Sunil", role: "Corporate" },
  { name: "Srushtitha M", role: "Corporate" },
  { name: "Aastha Bhatia", role: "Creatives" },
  { name: "Samaksh Goel", role: "Creatives" },
  { name: "Sayed Ishan", role: "Creatives" },
  { name: "Shrey Sharma", role: "Creatives" },
  { name: "Vrisheeka Mulakala", role: "Creatives" },
  { name: "Lakshya Agarwal", role: "Editorial" },
  { name: "Harshit", role: "Sponsorships" },
  { name: "Tumu Jaswanth", role: "Sponsorships" },
];

const imageUrl = "/images/vikrant.png.jpg"; // Default placeholder image
const frameUrl = "/images/frame.png"; // Frame image path
const associatesHeadingUrl = "/images/Associates.png"; // Heading vector

const Associates = () => {
  // Split data for grid rows
  const rows = [
    associatesData.slice(0, 4),
    associatesData.slice(4, 8),
    associatesData.slice(8, 12),
    associatesData.slice(12, 15), // 4th row (Shrey, Vrisheeka, Lakshya)
    associatesData.slice(15, 17), // 5th row (Harshit, Tumu)
  ];

  return (
    <section className="w-full flex flex-col items-center pt-10 pb-6">
      <img
        src={associatesHeadingUrl}
        alt="Associates"
        className="mb-6 sm:mb-8 md:mb-10 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[380px] object-contain"
      />
      <div className="w-full flex flex-col items-center">
        {/* First 3 rows: 4 columns */}
        {rows.slice(0, 3).map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 gap-y-8 sm:gap-y-10 mb-6 sm:mb-8 w-full max-w-6xl"
          >
            {row.map((associate, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="relative w-[150px] h-[180px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] flex items-center justify-center">
                  {rowIdx === 0 && idx === 0 ? (
                    <>
                      <img
                        src="/images/Aman.png"
                        alt="Aman Deep Singh"
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
                        src="/images/Aman.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 0 && idx === 1 ? (
                    <>
                      <img
                        src="/images/Saket.png"
                        alt="Saket Ruia"
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
                        src="/images/Saket.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 0 && idx === 2 ? (
                    <>
                      <img
                        src="/images/Yash.png"
                        alt="Yash Vipul Sinojia"
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
                        src="/images/Yash.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 0 && idx === 3 ? (
                    <>
                      <img
                        src="/images/Somesh.png"
                        alt="Somesh Das"
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
                        src="/images/Somesh.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 1 && idx === 0 ? (
                    <>
                      <img
                        src="/images/Pratyush.png"
                        alt="Pratyush Srivastava"
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
                        src="/images/Pratyush.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 1 && idx === 1 ? (
                    <>
                      <img
                        src="/images/Grisha.png"
                        alt="Grisha Sethi"
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
                        src="/images/Grisha.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 1 && idx === 2 ? (
                    <>
                      <img
                        src="/images/Kejal.png"
                        alt="Kejal Jain"
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
                        src="/images/Kejal.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 1 && idx === 3 ? (
                    <>
                      <img
                        src="/images/Shreya.png"
                        alt="Shreya Sunil"
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
                        src="/images/Shreya.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 2 && idx === 0 ? (
                    <>
                      <img
                        src="/images/Srushtitha.png"
                        alt="Srushtitha M"
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
                        src="/images/Srushtitha.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 2 && idx === 1 ? (
                    <>
                      <img
                        src="/images/Aastha.png"
                        alt="Aastha Bhatia"
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
                        src="/images/Aastha.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 2 && idx === 2 ? (
                    <>
                      <img
                        src="/images/Samaksh.png"
                        alt="Samaksh Goel"
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
                        src="/images/Samaksh.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : rowIdx === 2 && idx === 3 ? (
                    <>
                      <img
                        src="/images/Syed.png"
                        alt="Sayed Ishan"
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
                        src="/images/Syed.png"
                        alt="Frame"
                        className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                      />
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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

        {/* 4th row (Shrey, Vrisheeka, Lakshya) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 gap-y-8 sm:gap-y-10 mb-6 sm:mb-8 w-full max-w-6xl">
          {rows[3].map((associate, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-[180px] h-[220px] md:w-[220px] md:h-[260px] lg:w-[240px] lg:h-[280px] flex items-center justify-center">
                {idx === 0 ? (
                  <>
                    <img
                      src="/images/Shrey.png"
                      alt="Shrey Sharma"
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
                      src="/images/Shrey.png"
                      alt="Frame"
                      className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                    />
                  </>
                ) : idx === 1 ? (
                  <>
                    <img
                      src="/images/Vrisheeka.png"
                      alt="Vrisheeka Mulakala"
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
                      src="/images/Vrisheeka.png"
                      alt="Frame"
                      className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                    />
                  </>
                ) : idx === 2 ? (
                  <>
                    <img
                      src="/images/Lakshya.png"
                      alt="Lakshya Agarwal"
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
                      src="/images/Lakshya.png"
                      alt="Frame"
                      className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                    />
                  </>
                ) : (
                  <>
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
                  </>
                )}
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

        {/* 5th row (Harshit, Tumu) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 gap-y-8 sm:gap-y-10 mb-6 sm:mb-8 w-full max-w-6xl">
          {rows[4].map((associate, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-[180px] h-[220px] md:w-[220px] md:h-[260px] lg:w-[240px] lg:h-[280px] flex items-center justify-center">
                {idx === 0 ? (
                  <>
                    <img
                      src="/images/harshit.png"
                      alt="Harshit"
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
                      src="./images/Harshit.png"
                      alt="Frame"
                      className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                    />
                  </>
                ) : idx === 1 ? (
                  <>
                    <img
                      src="/images/Tumu.png"
                      alt="Tumu Jaswanth"
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
                      src="/images/Tumu.png"
                      alt="Frame"
                      className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                    />
                  </>
                ) : (
                  <>
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
                  </>
                )}
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
