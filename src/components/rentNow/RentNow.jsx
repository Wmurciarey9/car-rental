import React from "react";
import "./rentNow.scss";

export const RentNow = () => {
  return (
    <div className="rentNow">
      <div className="containerBox">
        <div className="rentalBox">
          <h2>Book your car</h2>
          <form className="box-form" action="search">
            <div className="box-data">
              <span>
                <i class="fa-solid fa-car"></i>
                Select Your Car Type
                <b>*</b>
              </span>
              <select name="data-selection" id="">
                <option>Select your car type</option>
                <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                <option value="VW Golf 6">VW Golf 6</option>
                <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                <option value="VW Passat CC">VW Passat CC</option>
              </select>
            </div>
            <div className="box-data">
              <span>
                <i class="fa-solid fa-location-dot"></i>
                Pick-Up Location
                <b>*</b>
              </span>
              <select name="data-selection" id="">
                <option>Select pick up location</option>
                <option>Belgrade</option>
                <option>Novi Sad</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>
            <div className="box-data">
              <span>
                <i class="fa-solid fa-location-dot"></i>
                Drop-Of Location
                <b>*</b>
              </span>
              <select name="data-selection" id="">
                <option>Select drop of location</option>
                <option>Belgrade</option>
                <option>Novi Sad</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>
            <div className="box-data">
              <span>
                <i class="fa-solid fa-car"></i>
                Pick-up
                <b>*</b>
              </span>
              <input type="date" id="pickTime" />
            </div>
            <div className="box-data">
              <span>
                <i class="fa-solid fa-car"></i>
                Drop-of
                <b>*</b>
              </span>
              <input type="date" id="pickTime" />
            </div>

            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};
