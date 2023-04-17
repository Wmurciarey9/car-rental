import React, { useState } from "react";
import "./featured.scss";
import {
  CarDisplay,
  CarDisplayThree,
  CarDisplayTwo,
} from "../carDisplay/CarDisplay";

export const Featured = () => {
  const [active, setActive] = useState("ElectricCars");
  const [colorTxt, setColorTxt] = useState("txt1");

  const textID = (id) => {
    setColorTxt(colorTxt === id ? "" : id);
  };

  const coloringTxt = (id) => {
    return colorTxt === id ? "colored-text" : "";
  };

  return (
    <div className="featured">
      <h2>Vehicle Models</h2>
      <h1>Our Most Searched</h1>
      <div className="miniNavbar">
        <h2
          className={`${coloringTxt("txt1")}`}
          id="txt1"
          onClick={() => {
            setActive("ElectricCars");
            textID("txt1");
          }}
        >
          Electric Favourite
        </h2>
        <h2
          className={`${coloringTxt("txt2")}`}
          id="txt2"
          onClick={() => {
            setActive("LuxuryCars");
            textID("txt2");
          }}
        >
          Luxury Favourite
        </h2>
        <h2
          className={`${coloringTxt("txt3")}`}
          id="txt3"
          onClick={() => {
            setActive("CommonCars");
            textID("txt3");
          }}
        >
          Common Favourite
        </h2>
      </div>

      {active === "ElectricCars" && <CarDisplay />}
      {active === "LuxuryCars" && <CarDisplayTwo />}
      {active === "CommonCars" && <CarDisplayThree />}
    </div>
  );
};
