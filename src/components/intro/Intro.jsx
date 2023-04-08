import React from "react";
import "./intro.scss";
import Car from "../../images/car1.jpg";

export const Intro = () => {
  return (
    <div className="intro">
      <img src={Car} alt="" />

      <div className="text">
        <p>The perfect fit for your trip</p>
        <h1>
          Car Rental <span className="blueText"> made affordable</span>
        </h1>
        <p className="small">
          Rent the car of your dreams at an unimaginable price. Flexible pick up
          times and delivery options available,{" "}
          <span> plus unlimited miles </span>
        </p>
        <div className="buttons">
          <button className="blueButton">Book Now</button>
          <button className="blackButton">More Info</button>
        </div>
      </div>
    </div>
  );
};
