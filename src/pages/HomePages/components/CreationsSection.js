import React from "react";
import { creations } from "./creationsData";

const CreationsSection = () => {
  return (
    <div className="creations">
      <h2>Our Creations</h2>

      <div className="creations-container">
        {creations.map((data) => (
          <div
            className={`creation-bg ${data.image_m} ${
              data.special ? "special" : null
            }`}
          >
            <h3>{data.name}</h3>
          </div>
        ))}
      </div>
      <button className="see-all-button">See All</button>
    </div>
  );
};

export default CreationsSection;
