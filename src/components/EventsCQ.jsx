import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./EventsCQ.css";

const events = [
  { id: 1, img: "/CQ3.0.png" },
  { id: 2, img: "/cq4.0.png" },
  { id: 3, img: "/cad3.0.png" },
];

export default function EventsCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="events-container">
     
      <div className="header-images">
        <img src="/event_title.png" alt="Events Title" className="title-img" />
        
      </div>

      
      <div className="carousel">
        <button onClick={prevSlide} className="nav-btn left">
          <ChevronLeft size={28} />
        </button>

        <div className="cards-wrapper">
          {events.map((event, index) => {
            const isActive = index === current;
            const isPrev = index === (current - 1 + events.length) % events.length;
            const isNext = index === (current + 1) % events.length;

            return (
              <div
                key={event.id}
                className={`card ${isActive ? "active" : ""} ${
                  isPrev ? "prev" : ""
                } ${isNext ? "next" : ""}`}
              >
                <img src={event.img} alt={`Event ${index + 1}`} />
              </div>
            );
          })}
        </div>

        <button onClick={nextSlide} className="nav-btn right">
          <ChevronRight size={28} />
        </button>

        <div className="bubble bubble-left"></div>
        <div className="bubble bubble-right"></div>
      </div>
    </div>
  );
}

