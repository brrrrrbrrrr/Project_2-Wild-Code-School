/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import "./Carousel.css";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

function Carousel({ changeGenre, setItem }) {
  const url = import.meta.env.VITE_FRONT_URL;
  const key = import.meta.env.VITE_API_KEY;
  const optionApi = import.meta.env.VITE_API_OPTION_DEFAULT_PAGE;
  const optionGenre = import.meta.env.VITE_API_OPTION_GENRE;
  const average = import.meta.env.VITE_API_OPTION_AVERAGE;
  const [movies, setMovies] = useState([]);
  const [nextpage, setNextpage] = useState(1);

  useEffect(() => {
    const urlApi = `${url}?api_key=${key}&${optionApi}${nextpage}${average}${optionGenre}${changeGenre.id}`;
    // console.log(urlApi);
    axios
      .get(urlApi)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [changeGenre, nextpage]);

  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <button
          className="nextpage-btn"
          onClick={() => setNextpage(nextpage + 1)}
        >
          Plus de choix
        </button>
        {movies.map((item) => (
          <SwiperSlide
            key={item.id}
            swiperslide={item}
            onClick={() => setItem(item)}
            // onClick={() => console.log(item)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
