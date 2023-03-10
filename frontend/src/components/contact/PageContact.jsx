import React from "react";
import Footer from "../footer/Footer";
import logo from "../../assets/logofooter.png";
import "./PageContact.css";

function PageContact() {
  return (
    <div>
      <Footer />
      <div className="footer-section-logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default PageContact;
