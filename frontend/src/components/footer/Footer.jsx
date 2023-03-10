import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer-section">
      <div className="footer_socials">
        <a href="https://www.facebook.com/people/Cin%C3%A9-Feelmotion/100090610116113/">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/FEELMOTION_WCD">
          <FaTwitter />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
      </div>
      <div className="footer_contactemail">
        <p className="email">Contact : FEELMOTION.WCD@GMAIL.COM</p>
      </div>
      <div className="footer_copyright">
        <p className="copyright">
          &copy; Copyright {new Date().getFullYear()} | FeelMotion.com | All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}
export default Footer;
