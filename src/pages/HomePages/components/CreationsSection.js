import React from "react";
import useWindowSize from "../../../hooks/windowSize";
import { creations } from "./creationsData";

const CreationsSection = () => {
  const windowWidth = useWindowSize();

  return (
    <div className="creations">
      <div className="title-button">
        <h2>Our Creations</h2>
        <button className="see-all-button">See All</button>
      </div>

      <div className="creations-container">
        {creations.map((data) => (
          <div className={`creation-bg ${data.special ? "special" : null}`}>
            <img
              src={windowWidth < 1000 ? data.image_m : data.image_l}
              alt={data.name}
              className="creations-img"
              loading="lazy"
            />
            <div className="img-div"></div>
            <h3>{data.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreationsSection;
