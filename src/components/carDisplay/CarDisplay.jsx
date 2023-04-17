import React from "react";
import Tesla2 from "../../images/tesla2.png";
import CLA from "../../images/CLA-Coupe.png";
import VW from "../../images/VW.png";

import "./carDisplay.scss";

export const CarDisplay = () => {
  return (
    <div className="carDisplay">
      <div className="carSection">
        <img src={Tesla2} alt="" />
        <div className="columns">
          <div className="left">
            <div className="leftComponent">
              <h1>3.1 S </h1>
              <p>0 - 60 mph</p>
            </div>
            <div className="leftComponent">
              <h1>350 MI</h1>
              <p>Range (EPA est.)</p>
            </div>
            <div className="leftComponent">
              <h1>670 HP</h1>
              <p>peak power</p>
            </div>
            <div className="leftComponent">
              <h1 style={{ color: "green" }}>$159</h1>
              <p>per day</p>
            </div>
          </div>

          <div className="center">
            <h1>Tesla Model 3</h1>
            <button>See all cars</button>
          </div>
          <div className="right">
            <div className="iconSet">
              <i class="fa-solid fa-car"></i>
              100+ miles autonomy
            </div>
            <div className="iconSet">
              <i class="fa-solid fa-car"></i>
              Multiple charging points
            </div>
            <div className="iconSet">
              <i class="fa-solid fa-car"></i>
              Full auto insurance coverage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const CarDisplayTwo = () => {
  return (
    <div className="carDisplay">
      <div className="carSection">
        <img src={CLA} alt="" />
        <div className="columns">
          <div className="left">
            <div className="leftComponent">
              <h1>5.6 S </h1>
              <p>0 - 60 mph</p>
            </div>
            <div className="leftComponent">
              <h1>25 / 36 mpg</h1>
              <p>Fuel economy</p>
            </div>
            <div className="leftComponent">
              <h1>221 HP</h1>
              <p>peak power</p>
            </div>
            <div className="leftComponent">
              <h1 style={{ color: "green" }}>$107</h1>
              <p>per day</p>
            </div>
          </div>

          <div className="center">
            <h1>2024 CLA Coupe</h1>
            <button>See all cars</button>
          </div>
          <div className="right">
            <div className="iconSet">
              <i class="fa-solid fa-car"></i>
              hybridized 2.0-liter four-cylinder
            </div>
            <div className="iconSet">
              <i class="fa-solid fa-car"></i>5 Seats
            </div>
            <div className="iconSet">
              <i class="fa-solid fa-car"></i>
              Full auto insurance coverage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const CarDisplayThree = () => {
  return (
    <div className="carDisplay">
      <div className="carSection">
        <img src={VW} alt="" />
        <div className="columns">
          <div className="left">
            <div className="leftComponent">
              <h1>7.8 s</h1>
              <p>0 - 60 mph</p>
            </div>
            <div className="leftComponent">
              <h1>24 / 36 mpg</h1>
              <p>Fuel economy</p>
            </div>
            <div className="leftComponent">
              <h1>170 HP</h1>
              <p>Peak power</p>
            </div>
            <div className="leftComponent">
              <h1 style={{ color: "green" }}>$25</h1>
              <p>per day</p>
            </div>
          </div>

          <div className="center">
            <h1>VW Passat CC</h1>
            <button>See all cars</button>
          </div>
          <div className="right">
            <div className="iconSet">
              <i class="fa-solid fa-car"></i>
              4-cyl Turbo 2.0 liter
            </div>
            <div className="iconSet">
              <i class="fa-solid fa-car"></i>5 Seats
            </div>
            <div className="iconSet">
              <i class="fa-solid fa-car"></i>
              Full auto insurance coverage
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
