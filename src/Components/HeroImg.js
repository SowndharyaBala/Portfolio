import "./HeroImgStyles.css";
import IntroImg from "../assets/IntroImg.jpg";

import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>

      <div className="content">
        <p>HI, I AM A FULL STACK DEVELOPER</p>
        <div className="btn-container">
          <Link to="/project" className="btn-warning">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
