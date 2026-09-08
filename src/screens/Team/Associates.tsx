import React from "react";

interface AssociateMember {
  name: string;
  role: string;
  image: string;
}

const associatesData: AssociateMember[] = [
  { name: "Amandeep Singh", role: "AI-ML", image: "/images/Aman.png" },
  { name: "Yash Sinojia", role: "AI-ML", image: "/images/Yash.png" },
  { name: "Somesh Das", role: "Web-Dev", image: "/images/Somesh.png" },
  { name: "Pratyush Srivastava", role: "Web-Dev", image: "/images/Pratyush.png" },
  { name: "Srushtitha M", role: "Corporate", image: "/images/Srushtitha.png" },
  { name: "Johan Joe Thomas", role: "Corporate", image: "/images/Johan.png" },
  { name: "Shreya Sunil", role: "Corporate", image: "/images/Shreya.png" },
  { name: "Astha Bhatia", role: "Creatives", image: "/images/Aastha.png" },
  { name: "Sayed Ishan", role: "Creatives", image: "/images/Syed.png" },
  { name: "Vrisheeka Mulakala", role: "Creatives", image: "/images/Vrisheeka.png" },
  { name: "Himesh Sahoo", role: "Creatives", image: "/images/Himesh.png" },
  { name: "Tumu Jaswanth", role: "Sponsorships", image: "/images/Tumu.png" },
  { name: "Harshit Kauntia", role: "Sponsorships", image: "/images/Harshit.png" },
];

const associatesHeadingUrl = "/images/Associates.png";

const Associates = () => {
  return (
    <section className="w-full flex flex-col items-center pt-10 pb-6 mb-16">
      <img
        src={associatesHeadingUrl}
        alt="Associates"
        className="mb-6 sm:mb-8 md:mb-10 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[380px] object-contain"
      />
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 gap-y-8 sm:gap-y-10 mb-6 sm:mb-8 w-full max-w-6xl justify-items-center">
          {associatesData.map((associate, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-[150px] h-[180px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] flex items-center justify-center transition-transform duration-300 hover:scale-[1.05]">
                <img
                  src={associate.image}
                  alt={associate.name}
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
                  src={associate.image}
                  alt="Frame"
                  className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="block text-white text-base md:text-lg font-semibold leading-tight font-montserrat">
                  {associate.name}
                </span>
                <span className="text-[var(--accent)] text-xs font-montserrat mt-1">
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
