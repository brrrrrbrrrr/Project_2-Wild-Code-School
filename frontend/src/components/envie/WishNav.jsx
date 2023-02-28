/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */

import React from "react";

function WishNav({
  wish,
  setChangeGenre2,
  setChangeGenre,
  genres,
  handleChangeNav,
}) {
  function handleClickNav() {
    setChangeGenre2(genres[wish.choice2]);
    setChangeGenre(genres[wish.choice]);
    handleChangeNav(wish.desc.split("J'ai envie "));
  }
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  return <p onClick={handleClickNav}>{wish.desc.split("J'ai envie ")}</p>;
}
export default WishNav;
