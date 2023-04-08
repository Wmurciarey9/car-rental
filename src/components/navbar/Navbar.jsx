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
    <div className={`${isNavbarVisible ? "visible navbar" : ""}`}>
      <div className="container">
        <div className="left">
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="middle">
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Demos</a>
          <a href="#">Contact Us</a>
        </div>

        <div className="right">
          <a href="#"> Sign In</a>
          <button className="blueButton">Register</button>
        </div>
      </div>
    </div>
  );
};
