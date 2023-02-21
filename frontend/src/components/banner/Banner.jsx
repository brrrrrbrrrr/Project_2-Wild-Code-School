/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */

import "./Banner.css";
import React from "react";

function Banner({ item }) {
  return (
    <div className="banner-container">
      <img src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} />
      <article>
        <p className="item-overview">{item.overview}</p>
      </article>
    </div>
  );
}

export default Banner;
