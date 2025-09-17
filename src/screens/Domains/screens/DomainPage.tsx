import { Link } from "react-router-dom";

// DomainPage acts as the landing selection screen for domains
function DomainPage() {
  return (
    <div id="domains" className="min-h-screen bg-black relative overflow-hidden">
      
      {/* Background Balls Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/bg%20balls.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 page-scale origin-top">
        
        {/* Domains Logo */}
        <div className="mb-12 animate-fade-in">
          <img 
            src="./Domain/Domains.png" 
            alt="DOMAINS" 
            className="h-12 md:h-14 lg:h-16 w-auto filter drop-shadow-2xl"
          />
        </div>

        {/* Tech + Non-Tech Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 max-w-5xl w-full">
          
          {/* TECHNICAL Card */}
          <div className="group relative w-[500px] h-[300px] [perspective:1000px]">
            <Link to="/technical" className="block relative w-full h-full">
              <div className="relative w-full h-full overflow-hidden shadow-xl transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(40deg)] border-2 border-transparent bg-black">
                <img
                  src="./Domain/Tech overall.png"
                  alt="Technical"
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Overlay Image */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <img 
                  src="./Domain/TECHNICAL.png" 
                  alt="TECHNICAL"
                  className="h-14 md:h-16 lg:h-18 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* NON-TECHNICAL Card */}
          <div className="group relative w-[500px] h-[300px] [perspective:1000px]">
            <Link to="/mobile" className="block relative w-full h-full">
              <div className="relative w-full h-full overflow-hidden shadow-xl transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(40deg)] border-2 border-transparent bg-black">
                <img
                  src="./Domain/NonTech overall.png"
                  alt="Non-Technical"
                  className="w-full h-full object-cover block"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Overlay Image */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <img 
                  src="./Domain/NON TECHNICAL.png" 
                  alt="NON TECHNICAL"
                  className="h-32 md:h-34 lg:h-36 w-auto"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DomainPage;
