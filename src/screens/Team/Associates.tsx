import React from "react";

const associatesData = [
  { name: "Hiteshvenu", role: "AI-ML Associate", image: "/images/HITESHVENU.png" },
  { name: "Priyanshu Goyal", role: "AI-ML Associate", image: "/images/PRIYANSHU.png" },
  { name: "Archit Poonia", role: "AI-ML Associate", image: "/images/ARCHIT.png" },
  { name: "Rishabh Raj", role: "Web-Dev Associate", image: "/images/RISHABH.png" },
  { name: "Sai Harshith Moluguri", role: "Web-Dev Associate", image: "/images/HARSHITH.png" },
  { name: "Richelle Ranjan", role: "App-Dev Associate", image: "/images/RICHELLE.png" },
  { name: "Darsh Ramoliya", role: "Corporate Associate", image: "/images/DARSH.png" },
  { name: "Jahnavi Singh", role: "Corporate Associate", image: "/images/JAHANVI.png" },
  { name: "Lojjan Mahendran", role: "Corporate Associate", image: "/images/LOJJAN.png" },
  { name: "Tiya Doshi", role: "Corporate Associate", image: "/images/TIYA.png" },
  { name: "Shreya Sunil", role: "Corporate Associate", image: "/images/SHREYA.png" },
  { name: "Khushi", role: "Creative Associate", image: "/images/KUSHI.png" },
  { name: "Varsha M", role: "Creative Associate", image: "/images/VARSHA.png" },
  { name: "Harshit Kauntia", role: "Sponsorship Associate", image: "/images/Harshit.png" },
  { name: "Aashita Soni", role: "Sponsorship Associate", image: "/images/AASHITA.png" },
  { name: "Anishka Pradeep", role: "Sponsorship Associate", image: "/images/ANSHIKA.png" },
  { name: "Aditya Gupta", role: "Sponsorship Associate", image: "/images/ADITYA.png" },
];

const Associates = () => {
  return (
    <section className="w-full flex flex-col items-center pt-10 pb-20">
      <img
        src="/images/Associates.png"
        alt="Associates"
        className="mb-6 sm:mb-8 md:mb-10 w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[320px] object-contain"
      />
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mb-6 sm:mb-8 w-full max-w-6xl">
        {associatesData.map((associate, idx) => (
          <div key={idx} className="flex flex-col items-center w-[150px] sm:w-[180px] md:w-[200px]">
            <img
              src={associate.image}
              alt={associate.name}
              className="w-full h-auto object-contain"
              draggable="false"
            />
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
    </section>
  );
};

export default Associates;
