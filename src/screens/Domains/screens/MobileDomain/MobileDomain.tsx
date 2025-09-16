import { Card, CardContent } from "../../components/ui/card";
export const MobileDomain = (): JSX.Element => {
  const domainCards = [
    {
      title: "CREATIVES",
      image: "/NonTech-assets/Creatives.png",
      imageAlt: "Creatives",
      rectangle: "/Desktop-assets/rectangle-32.svg",
    },
    {
      title: "CORPORATE",
      image: "/NonTech-assets/coorp.png",
      imageAlt: "Newrobot",
      rectangle: "/Desktop-assets/rectangle-5029.svg",
    },
    {
      title: "SPONSORSHIP",
      image: "/NonTech-assets/sponsi.png",
      imageAlt: "Element",
      rectangle: "/Desktop-assets/rectangle-5030.svg",
    },
    {
      title: "EDITORIAL",
      image: "/NonTech-assets/edi.png", 
      imageAlt: "Editorial",
      rectangle: "/Desktop-assets/rectangle-5029.svg",
    },
  ];

  return (
  <div className="min-h-screen w-full bg-black relative overflow-hidden page-scale">
      {/* Background decorative elements - enhanced bubbles and glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Enhanced background gradient blobs with stronger orange glow - matching desktop */}
        <div className="absolute w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-80 xl:h-80 top-10 sm:top-16 md:top-20 left-4 sm:left-8 md:left-10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[160px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,82,0,0.8)_0%,rgba(255,140,0,0.6)_30%,rgba(255,69,0,0.4)_70%,rgba(139,69,19,0.3)_100%)] opacity-70" />
        <div className="absolute w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 top-0 left-0 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[160px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,82,0,0.8)_0%,rgba(255,140,0,0.6)_30%,rgba(255,69,0,0.4)_70%,rgba(139,69,19,0.3)_100%)] opacity-70" />
        <div className="absolute w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bottom-10 sm:bottom-16 md:bottom-20 right-4 sm:right-8 md:right-10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[160px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,82,0,0.8)_0%,rgba(255,140,0,0.6)_30%,rgba(255,69,0,0.4)_70%,rgba(139,69,19,0.3)_100%)] opacity-70" />
        
        {/* Additional floating orange glow bubbles */}
        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 top-1/3 right-1/4 rounded-full blur-[40px] sm:blur-[50px] md:blur-[70px] bg-gradient-radial from-orange-400/40 to-orange-600/40 opacity-25 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
        <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 top-2/3 left-1/3 rounded-full blur-[30px] sm:blur-[40px] md:blur-[60px] bg-gradient-radial from-orange-300/30 to-orange-700/30 opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
        
        {/* Enhanced decorative spheres with orange glow - matching desktop */}
        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-[164px] xl:h-[163px] top-1/4 left-1/4 rounded-full rotate-[-72deg] shadow-[inset_1px_-1px_0px_#00000040] bg-blend-difference [background:radial-gradient(50%_50%_at_40%_90%,rgba(9,8,8,1)_19%,rgba(115,115,115,0.54)_57%,rgba(231,227,227,0.74)_97%)] opacity-20" />
        <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 top-1/2 right-4 sm:right-8 lg:right-12 xl:right-16 rounded-full rotate-[-162deg] shadow-[inset_1px_-1px_0px_#00000040] bg-blend-difference [background:radial-gradient(50%_50%_at_40%_90%,rgba(9,8,8,1)_19%,rgba(115,115,115,0.54)_57%,rgba(231,227,227,0.74)_97%)] opacity-20" />
        <div className="absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 bottom-12 sm:bottom-16 lg:bottom-20 left-1/4 rounded-full rotate-[-162deg] shadow-[inset_1px_-1px_0px_#00000040] bg-blend-difference [background:radial-gradient(50%_50%_at_40%_90%,rgba(9,8,8,1)_19%,rgba(115,115,115,0.54)_57%,rgba(231,227,227,0.74)_97%)] opacity-20" />
        <div className="absolute w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bottom-6 sm:bottom-8 lg:bottom-12 left-1/3 rounded-full rotate-[-162deg] shadow-[inset_1px_-1px_0px_#00000040] bg-blend-difference [background:radial-gradient(50%_50%_at_40%_90%,rgba(9,8,8,1)_19%,rgba(115,115,115,0.54)_57%,rgba(231,227,227,0.74)_97%)] opacity-20" />
        
        {/* Additional floating bubble effects */}
        <div className="absolute w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 top-1/2 left-8 rounded-full bg-gradient-radial from-orange-500/20 to-transparent opacity-30 animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bottom-1/3 right-12 rounded-full bg-gradient-radial from-orange-400/25 to-transparent opacity-25 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
        <div className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 top-3/4 left-1/2 rounded-full bg-gradient-radial from-orange-600/15 to-transparent opacity-20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
      </div>

      {/* Logo - positioned for mobile */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
        <div className="relative">
          <img
            className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-32 lg:h-20 object-contain"
            alt="10x Logo"
            src="/Desktop-assets/10x-logo--stock-.svg"
          />
          <div className="absolute -bottom-1 right-0 text-white text-[7px] sm:text-[8px] md:text-[10px] font-normal">
            SRM
          </div>
        </div>
      </div>

      {/* Main content - optimized for mobile scrolling */}
      <div className="flex flex-col items-center justify-start min-h-screen pt-20 pb-8 px-3 sm:px-4 md:px-6">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl">
          {/* Domain cards grid - mobile-first design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 md:gap-6 lg:gap-8 place-items-center">
            {domainCards.map((card) => (
              <div key={card.title} className="w-full max-w-[280px] sm:max-w-[240px] md:max-w-[280px]">
                {/* Title moved outside and above the card */}
                <h3 style={{ fontFamily: "'Bruno Ace', cursive" }} className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-tight text-center whitespace-nowrap mb-3 [text-shadow:0_0_15px_rgba(255,82,0,1),0_0_30px_rgba(255,82,0,0.8),0_0_45px_rgba(255,82,0,0.6)]">
                  {card.title}
                </h3>
                
                <Card className="relative w-full h-64 sm:h-56 md:h-64 lg:h-72 bg-transparent border-none overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-0 h-full relative">
                    {/* Background frame - Rectangle SVG */}
                    <img
                      className="absolute inset-0 w-full h-full object-contain z-0"
                      alt="Card background frame"
                      src={card.rectangle}
                      onError={() => console.log('Rectangle image failed to load:', card.rectangle)}
                    />
                    
                    {/* Main image - adjusted to fill the space now that title is outside */}
                    <div className="absolute inset-0 flex items-center justify-center pt-4 md:pt-4 lg:pt-4 xl:pt-6 pb-4 px-4 z-10">
                      <img
                        className="max-w-[70%] max-h-[70%] md:max-w-[75%] md:max-h-[75%] lg:max-w-[70%] lg:max-h-[70%] object-contain transition-transform duration-300 group-hover:scale-110"
                        alt={card.imageAlt}
                        src={card.image}
                        onError={() => console.log('Main image failed to load:', card.image)}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDomain;
