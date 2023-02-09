import React from "react";
import "./TransitionAccueil.css";
import image from "../../assets/logo.png";

function TransitionAccueil() {
  return (
    <div className="logo-container">
      <img src={image} className="logo" alt="logo" />
    </div>
  );
}

export default TransitionAccueil;
