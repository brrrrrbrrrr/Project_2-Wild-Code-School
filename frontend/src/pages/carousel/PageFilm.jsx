/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"; // ignored
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Carousel from "../../components/carousel/Carousel";
import PageWish from "../pagewish/PageWish";

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";

import "./PageFilm.css";
import Genre from "../../components/genre/Genre";

// import required modules
// import { Pagination } from "swiper";

export default function PageFilm() {
  const [genres, setGenre] = useState([]);
  const [movies, setMovies] = useState([]);
  const [changeGenre, setChangeGenre] = useState("");
  const [changeGenre2, setChangeGenre2] = useState("");

  return (
    <div className="carousels-container">
      <div className="first-carousel">
        <h1 className="genre-title">{changeGenre.name}</h1>
        <Carousel
          movies={movies}
          changeGenre={changeGenre}
          setMovies={setMovies}
        />
      </div>

      <div className="second-carousel" />
      <h1 className="genre-title">{changeGenre2.name}</h1>
      <Carousel
        movies={movies}
        changeGenre={changeGenre2}
        setMovies={setMovies}
      />
      <Genre
        genres={genres}
        setGenre={setGenre}
        setChangeGenre={setChangeGenre}
        movie={movies}
        setMovie={setMovies}
        changeGenre2={changeGenre2}
        setChangeGenre2={setChangeGenre2}
      />
      <PageWish />
    </div>
  );
}
