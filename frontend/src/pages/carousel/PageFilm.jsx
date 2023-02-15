/* eslint-disable no-unused-vars */
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
import Genre from "../../components/genre/Genre";

// import required modules
// import { Pagination } from "swiper";

export default function PageFilm() {
  const [genres, setGenre] = useState([]);
  const [movies, setMovies] = useState([]);
  const [changeGenre, setChangeGenre] = useState("");
  const url = import.meta.env.VITE_FRONT_URL;
  const key = import.meta.env.VITE_API_KEY;
  const optionApi = import.meta.env.VITE_API_OPTION_GENRE;
  const urlApi = `${url}?api_key=${key}&${optionApi}${changeGenre.id}`;

  useEffect(() => {
    axios
      .get(urlApi)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [changeGenre]);

  return (
    <div className="carousels-container">
      <div className="first-carousel">
        <h1 className="genre-title">{changeGenre.name}</h1>
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
        <h1 className="genre-title">{changeGenre.name}</h1>
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
        <Genre
          genres={genres}
          setGenre={setGenre}
          setChangeGenre={setChangeGenre}
          movie={movies}
          setMovie={setMovies}
        />
      </div>
    </div>
  );
}
