import React from "react";
import { LandingPage } from "./TitlePage/LandingPage";
import AboutPage from "./AboutPage/AboutPage";
import DomainPage from "./Domains/screens/DomainPage";
import EventsSection from "./EventsCQ/EventsCQ";
import CTASection from "./CTASection/CTASection";

const Home: React.FC = () => {
  return (
    <main>
      <LandingPage />
      <AboutPage />
      <DomainPage />
      <EventsSection />
      <CTASection />
    </main>
  );
};

export default Home;