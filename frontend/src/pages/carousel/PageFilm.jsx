/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"; // ignored
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Carousel from "../../components/carousel/Carousel";
import PageWish from "../pagewish/PageWish";
import Banner from "../../components/banner/Banner";

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";

import "./PageFilm.css";

// import required modules
// import { Pagination } from "swiper";

export default function PageFilm() {
  const [changeGenre, setChangeGenre] = useState("");
  const [changeGenre2, setChangeGenre2] = useState("");
  const [item, setItem] = useState("");

  // console.log(changeGenre2);

  return (
    <div className="carousels-container">
      <Banner item={item} />
      <div className="first-carousel">
        <h1 className="genre-title">{changeGenre.name}</h1>
        <Carousel changeGenre={changeGenre} setItem={setItem} />
      </div>

      <div className="second-carousel" />
      <h1 className="genre-title">{changeGenre2.name}</h1>
      <Carousel changeGenre={changeGenre2} setItem={setItem} />
      {/* <Genre setChangeGenre={setChangeGenre} /> */}
      <PageWish
        changeGenre2={changeGenre2}
        setChangeGenre2={setChangeGenre2}
        setChangeGenre={setChangeGenre}
      />
    </div>
  );
}
