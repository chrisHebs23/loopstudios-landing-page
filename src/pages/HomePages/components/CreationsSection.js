import React from "react";
import { creations } from "./creationsData";

const CreationsSection = () => {
  return (
    <div className="creations-container">
      <h2>Our Creations</h2>
      {creations.map((data) => (
        <div
          className="creation-bg"
          style={{ backgroundImage: `url(${data.image_m})` }}
        >
          <h3>{data.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CreationsSection;
