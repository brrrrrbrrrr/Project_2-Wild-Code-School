/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// Import Swiper React components

// eslint-disable-next-line import/no-extraneous-dependencies

import Carousel from "../../components/carousel/Carousel";

// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";

import "./PageFilm.css";
import Loading from "../Loading";

export default function PageFilm({ changeGenre, changeGenre2, setItem }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);

  return !loading ? (
    <Loading />
  ) : (
    <div className="carousels-container">
      <div className="first-carousel">
        <h1 className="genre-title">{changeGenre.name}</h1>
        <Carousel changeGenre={changeGenre} setItem={setItem} />
      </div>

      <div className="second-carousel" />
      <h1 className="genre-title">{changeGenre2.name}</h1>
      <Carousel changeGenre={changeGenre2} setItem={setItem} />
    </div>
  );
}
