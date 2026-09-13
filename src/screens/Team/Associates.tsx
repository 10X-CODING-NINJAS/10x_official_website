import React from "react";

const associatesData = [
  { name: "Hiteshvenu", role: "AI-ML", image: "/images/HITESHVENU.png" },
  { name: "Archit Poonia", role: "AI-ML", image: "/images/ARCHIT.png" },
  { name: "Priyanshu Goyal", role: "AI-ML", image: "/images/PRIYANSHU.png" },
  { name: "Rishabh Raj", role: "Web-Dev", image: "/images/RISHABH.png" },
  { name: "Sai Harshith Moluguri", role: "Web-Dev", image: "/images/HARSHITH.png" },
  { name: "Jahanvi Singh", role: "Corporate", image: "/images/JAHANVI.png" },
  { name: "Tiya Doshi", role: "Corporate", image: "/images/TIYA.png" },
  { name: "Shreya Sunil", role: "Corporate", image: "/images/SHREYA.png" },
  { name: "Darsh Ramoliya", role: "Corporate", image: "/images/DARSH.png" },
  { name: "Lojjan Mahendran", role: "Corporate", image: "/images/LOJJAN.png" },
  { name: "Nihan Sonkusare", role: "Corporate", image: "/images/NIHAN.png" },
  { name: "Varsha  M", role: "Creatives", image: "/images/VARSHA.png" },
  { name: "Shrestha Vardhan", role: "Creatives", image: "/images/shrestha.png" },
  { name: "Kushi", role: "Creatives", image: "/images/KUSHI.png" },
  { name: "Aashita Soni", role: "Sponsorships", image: "/images/AASHITA.png" },
  { name: "Aditya Gupta", role: "Sponsorships", image: "/images/ADITYA.png" },
  { name: "Anishka Pradeep", role: "Sponsorships", image: "/images/ANSHIKA.png" },
  { name: "Harshit Kauntia", role: "Sponsorships", image: "/images/Harshit.png" },
];

const imageUrl = "/images/vikrant.png.jpg"; // Default placeholder image
const associatesHeadingUrl = "/images/Associates.png"; // Heading vector

const clipPolygon = "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)";

const Associates = () => {
  // Split data for grid rows (chunks of 4)
  const rows = [];
  for (let i = 0; i < associatesData.length; i += 4) {
    rows.push(associatesData.slice(i, i + 4));
  }

  return (
    <section className="w-full flex flex-col items-center pt-10 pb-6">
      <img
        src={associatesHeadingUrl}
        alt="Associates"
        className="mb-6 sm:mb-8 md:mb-10 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[380px] object-contain"
      />
      <div className="w-full flex flex-col items-center">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 gap-y-8 sm:gap-y-10 mb-6 sm:mb-8 w-full max-w-6xl justify-items-center"
          >
            {row.map((associate, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div 
                  className="relative w-[150px] h-[180px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] bg-[#ff6000] p-[3px]"
                  style={{ clipPath: clipPolygon }}
                >
                  <img
                    src={associate.image || imageUrl}
                    alt={associate.name}
                    className="w-full h-full object-cover"
                    style={{ clipPath: clipPolygon }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = imageUrl;
                    }}
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
      </div>
    </section>
  );
};

export default Associates;

