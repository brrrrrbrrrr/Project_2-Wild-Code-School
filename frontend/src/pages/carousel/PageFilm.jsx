import React, { useState, useEffect } from "react"; // ignored
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

// Import Swiper styles
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";

import "./PageFilm.css";

// import required modules
// import { Pagination } from "swiper";

const url = import.meta.env.VITE_FRONT_URL;
const key = import.meta.env.VITE_API_KEY;
const urlApi = `${url}?key=${key}`;

export default function PageFilm() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(urlApi)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <div className="carousels-container">
      <div className="first-carousel">
        <h1 className="genre-title">Genre</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {movies.map((item) => (
            <SwiperSlide key={item.id} swiperslide={item}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="second-carousel">
        <h1 className="genre-title">Genre</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {movies.map((item) => (
            <SwiperSlide key={item.id} swiperslide={item}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
