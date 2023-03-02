/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import React from "react";
import "./WishNav.css";

function WishNav({
  wish,
  setChangeGenre2,
  setChangeGenre,
  genres,
  setChoiceNav,
}) {
  const handleChangeNav = (newMood) => {
    setChoiceNav(newMood);
  };

  function handleClickNav() {
    setChangeGenre2(genres[wish.choice2]);
    setChangeGenre(genres[wish.choice]);
    handleChangeNav(wish.desc.split("J'ai envie "));
  }
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  return (
    <Link to="/pagewish/pagefilm">
      <p onClick={handleClickNav}>{wish.desc.split("J'ai envie ")}</p>
    </Link>
  );
}
export default WishNav;
