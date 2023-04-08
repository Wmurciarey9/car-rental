import React from "react";
import "./info.scss";
import Car1 from "../../images/1.png";
import Car2 from "../../images/2.png";
import Car3 from "../../images/3.png";

export const Info = () => {
  return (
    <div className="info">
      <h2>Plan your trip now</h2>
      <h1>Quick & easy car rental</h1>
      <div className="infoSection">
        <div className="itemSection">
          <img src={Car1} alt="" />

          <h2>Select Car</h2>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="itemSection">
          <img src={Car2} alt="" />
          <h2>Electric Car</h2>
          <p>
            We have eco friendly alternatives for you as-well, tons of miles.
            fully charged and ready for your ride
          </p>
        </div>
        <div className="itemSection">
          <img src={Car3} alt="" />
          <h2>Easy process</h2>
          <p>
            Our process is very simple and straight forward, no complicated
            steps and it's all thanks to our sofisticated software
          </p>
        </div>
      </div>
    </div>
  );
};
