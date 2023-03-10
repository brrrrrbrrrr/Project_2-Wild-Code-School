import React, { useState, useEffect } from "react";

import "./Navbar.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import logo from "../../assets/Logo_FeelMotion_sans_texte.png";
import wishesArray from "../envie/Wishes";
import WishNav from "../envie/WishNav";

// eslint-disable-next-line react/prop-types
function Navbar({ changeGenre2, genres, setChangeGenre, setChangeGenre2 }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [burgerBar, setBurgerBar] = useState("burger-bar unclicked");
  const [choiceNav, setChoiceNav] = useState("");
  const array = wishesArray;

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);

    if (toggleMenu) {
      setBurgerBar("burger-bar unclicked");
    } else {
      setBurgerBar("burger-bar clicked");
    }
  };

  const handleClick = () => {
    window.location.href = "#footer-section";
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
            <li>
              <ul className="menu">
                <li>
                  <p className="items">Envie {choiceNav}</p>
                  <ul className="sousmenu">
                    {array.map((item) => (
                      <WishNav
                        genres={genres}
                        changeGenre2={changeGenre2}
                        setChangeGenre2={setChangeGenre2}
                        setChangeGenre={setChangeGenre}
                        key={item.id}
                        wish={item}
                        choiceNav={choiceNav}
                        setChoiceNav={setChoiceNav}
                      />
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li className="items">favoris</li>
            <li
              className="items"
              id="#footer-section"
              onClick={handleClick}
              role="presentation"
            >
              contact
            </li>
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
