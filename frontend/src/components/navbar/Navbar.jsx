import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo_FeelMotion_sans_texte.png";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [burgerBar, setBurgerBar] = useState("burger-bar unclicked");

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);

    if (toggleMenu) {
      setBurgerBar("burger-bar unclicked");
    } else {
      setBurgerBar("burger-bar clicked");
    }
  };

  useEffect(() => {
    const changeWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header>
      {(toggleMenu || width > 940) && (
        <nav>
          <div className="logo-container">
            <img className="logo-navbar" src={logo} alt="logo" />
            <p className="logo-title">feel motion</p>
          </div>
          <ul className="list-items">
            <li className="items">accueil</li>
            <li className="items">à propos</li>
            <li className="items">humeurs</li>
            <li className="items">favoris</li>
            <li className="items">contact</li>
          </ul>
        </nav>
      )}
      <div
        className="burger-bar-container"
        onClick={toggleNav}
        role="toolbar"
        onKeyDown={toggleNav}
      >
        <div className={burgerBar} />
        <div className={burgerBar} />
        <div className={burgerBar} />
      </div>
    </header>
  );
}

export default Navbar;
