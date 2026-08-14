import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define a type for a single event object
interface Event {
  id: number;
  img: string;
}

// Define the type for the events array
const events: Event[] = [
  { id: 1, img: "./EventsPage/CQ3.0.png" },
  { id: 2, img: "./EventsPage/cq4.0.png" },
  { id: 3, img: "./EventsPage/cad3.0.png" },
];

const EventsCarousel: React.FC = () => {
  const [current, setCurrent] = useState<number>(0);

  const prevSlide = (): void => {
    setCurrent((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const nextSlide = (): void => {
    setCurrent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen min-h-screen bg-black text-white text-center overflow-hidden relative flex flex-col items-center page-scale origin-top">
      
      {/* Event Title */}
      <div className="mt-5 text-center">
        <img
          src="./EventsPage/event_title.png"
          alt="Events Title"
          className="w-[550px] max-w-[90vw] mb-2.5 mx-auto"
        />
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[80vh] max-h-[600px] flex items-center justify-center overflow-hidden">

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent border-none text-orange-500 cursor-pointer z-10 text-3xl p-0 transition-transform duration-200 hover:scale-110"
        >
          <ChevronLeft size={28} />
        </button>

        <div
          className="relative w-full flex justify-center items-center"
          style={{ minHeight: "180px" }}
        >
          {events.map((event, index) => {
            const isActive = index === current;
            const isPrev =
              index === (current - 1 + events.length) % events.length;
            const isNext =
              index === (current + 1) % events.length;

            let style: React.CSSProperties = {
              position: "absolute",
              opacity: 0,
              transform: "scale(0.8)",
              transition: "all 0.5s ease",
              maxWidth: 300,
              zIndex: 1,
            };

            if (isActive) {
              style.opacity = 1;
              style.transform = "scale(1.1)";
              style.zIndex = 3;
              style.boxShadow =
                "0 0 25px rgba(255, 140, 0, 0.8)";
            } else if (isPrev) {
              style.opacity = 0.6;
              style.transform =
                "translateX(-220px) scale(0.9)";
              style.zIndex = 2;
            } else if (isNext) {
              style.opacity = 0.6;
              style.transform =
                "translateX(220px) scale(0.9)";
              style.zIndex = 2;
            }

            return (
              <div key={event.id} style={style}>

                {/* CAD 4.0 Clickable Image */}
                {event.id === 2 ? (
                  <a
                    href="https://cad-4-0.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={event.img}
                      alt={`Event ${index + 1}`}
                      className="w-full h-auto rounded-2xl shadow-lg cursor-pointer"
                    />
                  </a>
                ) : (
                  <img
                    src={event.img}
                    alt={`Event ${index + 1}`}
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                )}

              </div>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-none text-orange-500 cursor-pointer z-10 text-3xl p-0 transition-transform duration-200 hover:scale-110"
        >
          <ChevronRight size={28} />
        </button>

        {/* Orange Bubble - Top Left */}
        <div
          className="pointer-events-none absolute rounded-full z-0"
          style={{
            width: 200,
            height: 200,
            top: 50,
            left: 50,
            background:
              "radial-gradient(circle, rgba(255,140,0,0.4), transparent)",
          }}
        ></div>

        {/* Orange Bubble - Bottom Right */}
        <div
          className="pointer-events-none absolute rounded-full z-0"
          style={{
            width: 200,
            height: 200,
            bottom: 50,
            right: 50,
            background:
              "radial-gradient(circle, rgba(255,140,0,0.4), transparent)",
          }}
        ></div>

      </div>
    </div>
  );
};

export default EventsCarousel;
