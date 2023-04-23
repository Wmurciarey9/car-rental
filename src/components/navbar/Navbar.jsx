import React, { useEffect, useRef, useState } from "react";
import "./navbar.scss";
import Logo from "../../images/logo2-white-transparent.png";

export const Navbar = () => {
  const lastScrollTop = useRef(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          // downward scroll
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          // upward scroll
          setIsNavbarVisible(true);
        } // else was horizontal scroll
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  return (
    <div
      className={`${isNavbarVisible ? "visible navbar navbar-expand-lg " : ""}`}
    >
      <div className="container-fluid">
        <img src={Logo} alt="" className="logo navbar-brand" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a href="#" className="nav-link">
              Services
            </a>
            <a href="#" className="nav-link">
              Pricing
            </a>
            <a href="#" className="nav-link">
              Demos
            </a>
            <a href="#" className="nav-link">
              Contact Us
            </a>
          </div>
          <br />
          <div className="buttons">
            <button className="blueButton">Sign In</button>
            <button className="blueButton">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};
