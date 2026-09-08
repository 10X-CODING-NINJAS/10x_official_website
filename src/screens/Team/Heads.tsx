import React from "react";

interface HeadMember {
  name: string;
  role: string;
  image: string;
}

const headsData: HeadMember[] = [
  { name: "Jayesh Jain", role: "AI-ML", image: "/images/Jayesh.png" },
  { name: "Pranav Tiwari", role: "AI-ML", image: "/images/Pranav.png" },
  { name: "Nishtha Goyal", role: "Web-Dev", image: "/images/Nishtha.png" },
  { name: "Ashneet Jha", role: "Web-Dev", image: "/images/Ashneet.png" },
  { name: "Jay Jariwala", role: "App-Dev", image: "/images/Jay.png" },
  { name: "Anushka Agarwal", role: "App-Dev", image: "/images/Anushka.png" },
  { name: "Brindha B", role: "Corporate", image: "/images/Brindha.png" },
  { name: "Shreyas B", role: "Corporate", image: "/images/Shreyas.png" },
  { name: "Allan Roy", role: "Corporate", image: "/images/Allan.png" },
  { name: "Archit Patre", role: "Creatives", image: "/images/Archit.png" },
  { name: "Shrey Sharma", role: "Creatives", image: "/images/Shrey.png" },
  { name: "Devashree Hote", role: "Sponsorships", image: "/images/Devashree.png" },
  { name: "Krishved Singh Dugtal", role: "Sponsorships", image: "/images/Krish.png" },
];

const headsHeadingUrl = "/images/Heads.png";

const Heads = () => {
  return (
    <section className="w-full flex flex-col items-center pt-10 pb-6">
      <img
        src={headsHeadingUrl}
        alt="Heads"
        className="mb-6 sm:mb-8 md:mb-10 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[240px] object-contain"
      />
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 gap-y-8 sm:gap-y-10 mb-6 sm:mb-8 w-full max-w-6xl justify-items-center">
          {headsData.map((head, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-[150px] h-[180px] sm:w-[160px] sm:h-[200px] md:w-[180px] md:h-[220px] lg:w-[200px] lg:h-[240px] xl:w-[220px] xl:h-[260px] flex items-center justify-center transition-transform duration-300 hover:scale-[1.05]">
                <img
                  src={head.image}
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
                  src={head.image}
                  alt="Frame"
                  className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
                />
              </div>
              <div className="mt-3 text-center">
                <span className="block text-white text-base md:text-lg font-semibold leading-tight font-montserrat">
                  {head.name}
                </span>
                <span className="text-[var(--accent)] text-xs font-montserrat mt-1">
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
