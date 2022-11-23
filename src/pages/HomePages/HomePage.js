import React from "react";
import CreationsSection from "./components/CreationsSection";
import HeroSection from "./components/HeroSection";
import "./components/Home.css";
import InfoSection from "./components/InfoSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <CreationsSection />
    </>
  );
};

export default HomePage;
