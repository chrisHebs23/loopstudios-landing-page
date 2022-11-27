import React from "react";
import CreationsSection from "./components/CreationsSection";
import HeroSection from "./components/HeroSection";
import "./components/Home.css";
import InfoSection from "./components/InfoSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <InfoSection />
      <CreationsSection />
    </main>
  );
};

export default HomePage;
