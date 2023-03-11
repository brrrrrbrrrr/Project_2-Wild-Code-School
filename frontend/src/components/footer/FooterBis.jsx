/* eslint-disable react/button-has-type */
import React from "react";
import "./FooterBis.css";
import { Link } from "react-router-dom";

function FooterBis() {
  return (
    <div className="contact-container">
      <div className="footer_copyright">
        <p className="copyright">
          &copy; Copyright {new Date().getFullYear()} | FeelMotion.com | All
          Rights Reserved
        </p>
      </div>
      <Link to="/contact">
        <button className="contact-btn">Contact</button>
      </Link>
    </div>
  );
}

export default FooterBis;
