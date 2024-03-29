/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
// eslint-disable-next-line import/no-extraneous-dependencies

import logo from "../../assets/Logo_FeelMotion_sans_texte.png";
import wishesArray from "../envie/Wishes";
import WishNav from "../envie/WishNav";
import MaskNav from "../emotion/MaskNav";
import Page2Array from "../Page2Array";

// eslint-disable-next-line react/prop-types
function Navbar({
  changeGenre2,
  genres,
  setChangeGenre,
  // eslint-disable-next-line react/prop-types
  setChangeGenre2,
  maskChoice,
  // eslint-disable-next-line react/prop-types
  setMaskChoice,
  choiceNav,
  setChoiceNav,
}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [burgerBar, setBurgerBar] = useState("burger-bar unclicked");

  const array = wishesArray;

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
            <Link to="/">
              <li className="items">accueil</li>
            </Link>
            <li>
              <ul className="menu">
                <li>
                  <li className="items">{maskChoice ? "" : "Humeurs"} </li>

                  <img className="maskhumeurs" src={maskChoice} alt="" />
                  <ul className="sousmenu-humeurs sousmenu">
                    {Page2Array.map((item) => (
                      <MaskNav
                        setMaskChoice={setMaskChoice}
                        key={item.id}
                        item={item}
                      />
                    ))}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <ul className="menu">
                <li>
                  <p className="items">Envie {choiceNav}</p>
                  <ul className="sousmenu sousmenu-wish" onClick={toggleNav}>
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

            <Link to="/contact">
              <li
                className="items"
                id="#footer-section"
                onClick={toggleNav}
                role="presentation"
              >
                contact
              </li>
            </Link>
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
