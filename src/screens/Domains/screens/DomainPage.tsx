import { Link } from "react-router-dom";

// DomainPage (was App) acts as the landing selection screen for domains
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
        
        {/* Tech Images Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 max-w-5xl w-full">
          {/* Left Tech Image with 3D tilt (image only) and flat overlay; whole frame clickable */}
          <div className="group relative w-full flex-1 [perspective:1000px]">
            <Link to="/technical" className="block relative">
              <div className="relative overflow-hidden shadow-xl transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(40deg)] border-2 border-transparent bg-black">
                <img
                  src="./Domain/Tech overall.png"
                  alt="Tech Workspace 1"
                  className="w-full h-auto object-contain block"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {/* Apply custom font here */}
                <span className="text-white text-xl md:text-2xl lg:text-3xl tracking-wide" style={{ fontFamily: "'Bruno Ace', sans-serif" }}>
                  TECHNICAL
                </span>
              </div>
            </Link>
          </div>

          {/* Right Non-Tech (MobileDomain) Image with 3D tilt; routes to /mobile */}
          <div className="group relative w-full flex-1 [perspective:1000px]">
            <Link to="/mobile" className="block relative">
              <div className="relative overflow-hidden shadow-xl transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(40deg)] border-2 border-transparent bg-black">
                <img
                  src="./Domain/NonTech overall.png"
                  alt="Non-Tech Workspace 2"
                  className="w-full h-auto object-contain block"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {/* Apply custom font here */}
                <span className="text-white text-xl md:text-2xl lg:text-3xl tracking-wide" style={{ fontFamily: "'Bruno Ace', sans-serif" }}>
                  NON-TECHNICAL
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated floating elements */}
      {/* <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-orange-500 rounded-full opacity-30 animate-pulse"></div> */}
      {/* <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-full opacity-40 animate-pulse delay-1000"></div> */}
      {/* <div className="absolute top-2/3 left-1/6 w-2 h-2 bg-orange-400 rounded-full opacity-50 animate-pulse delay-500"></div> */}
    </div>
  );
}

export default DomainPage;