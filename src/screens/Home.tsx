import React from 'react';
import AboutPage from './AboutPage/AboutPage';
import DomainPage from './Domains/screens/DomainPage';
import EventCQ from './EventsCQ/EventsCQ';
import { LandingPage } from './TitlePage/LandingPage';

// Home aggregates the public landing sections shown on the root route
const Home: React.FC = () => {
  return (
    <>
      <LandingPage />
      <AboutPage />
      <DomainPage />
      <EventCQ />
    </>
  );
};

export default Home;
