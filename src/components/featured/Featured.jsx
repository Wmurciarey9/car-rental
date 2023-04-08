import React, { useState } from "react";
import "./featured.scss";
import { CarDisplay, CarDisplayTwo } from "../carDisplay/CarDisplay";

export const Featured = () => {
  const [active, setActive] = useState("SecondCar");

  return (
    <div className="featured">
      <h2>Vehicle Models</h2>
      <h1>Our Most Searched</h1>
      <div className="miniNavbar">
        <h2
          className=""
          onClick={() => {
            setActive("ElectricCars");
          }}
        >
          Electric Favourite
        </h2>
        <h2
          className=""
          onClick={() => {
            setActive("LuxuryCars");
          }}
        >
          Luxury Favourite
        </h2>
        <h2
          className=""
          onClick={() => {
            setActive("CommonCars");
          }}
        >
          Common Favourite
        </h2>
      </div>
      {active === "ElectricCars" && <CarDisplay />}
      {active === "LuxuryCars" && <CarDisplayTwo />}
      {active === "CommonCars" && <CarDisplay />}
    </div>
  );
};
