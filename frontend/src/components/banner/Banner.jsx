/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */

import "./Banner.css";
import React from "react";
import { useLocation } from "react-router-dom";

function Banner() {
  const { state } = useLocation();
  const { item } = state;
  // console.log(item);
  return (
    <div className="banner-container">
      <img
        className="backdrop-img"
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
      />

      <div className="item-description-container">
        <div className="image-title-container">
          <div className="poster-img-container">
            <img
              className="poster-img"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            />
          </div>

          <h1 className="item-title">{item.title}</h1>
        </div>

        <article className="synopsis-container">
          <h2 className="synopsis-title">Synopsis</h2>
          <p className="item-overview">{item.overview}</p>
        </article>
      </div>
    </div>
  );
}

export default Banner;
