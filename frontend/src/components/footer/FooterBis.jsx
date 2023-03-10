/* eslint-disable react/button-has-type */
import React from "react";
import "./FooterBis.css";
import { Link } from "react-router-dom";

function FooterBis() {
  return (
    <div className="contact-container">
      <Link to="/contact">
        <button className="contact-btn">Contact</button>
      </Link>
    </div>
  );
}

export default FooterBis;
