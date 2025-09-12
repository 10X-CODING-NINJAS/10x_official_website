 

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Domains Logo */}
        <div className="mb-16 animate-fade-in">
          <img 
            src="/Domains.png" 
            alt="DOMAINS" 
            className="h-16 md:h-20 lg:h-24 w-auto filter drop-shadow-2xl"
          />
        </div>
        
        {/* Tech Images Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 max-w-6xl w-full">
          {/* Left Tech Image with 3D tilt (image only) and flat overlay; whole frame clickable */}
          <div className="group relative w-full flex-1 [perspective:1000px]">
            <a href="/technical" className="block relative">
              <div className="relative overflow-hidden shadow-2xl transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(45deg)] border-4 border-transparent bg-black">
                <img
                  src="/Tech overall.png"
                  alt="Tech Workspace 1"
                  className="w-full h-auto object-contain block"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">TECHNICAL</span>
              </div>
            </a>
          </div>

          {/* Right Tech Image with 3D tilt (image only) and flat overlay; whole frame clickable */}
          <div className="group relative w-full flex-1 [perspective:1000px]">
            <a href="/technical" className="block relative">
              <div className="relative overflow-hidden shadow-2xl transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateX(45deg)] border-4 border-transparent bg-black">
                <img
                  src="/NonTech overall.png"
                  alt="Non-Tech Workspace 2"
                  className="w-full h-auto object-contain block"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">NON-TECHNICAL</span>
              </div>
            </a>
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

export default App;