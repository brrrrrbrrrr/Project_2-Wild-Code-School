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

import { useNavigate } from "react-router-dom";

function Carousel({ changeGenre, setItem }) {
  const url = import.meta.env.VITE_FRONT_URL;
  const key = import.meta.env.VITE_API_KEY;
  const optionApi = import.meta.env.VITE_API_OPTION_DEFAULT_PAGE;
  const optionGenre = import.meta.env.VITE_API_OPTION_GENRE;
  const average = import.meta.env.VITE_API_OPTION_AVERAGE;
  const [movies, setMovies] = useState([]);
  const [nextpage, setNextpage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const urlApi = `${url}?api_key=${key}&${optionApi}${nextpage}${average}${optionGenre}${changeGenre.id}`;

    axios
      .get(urlApi)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [changeGenre, nextpage]);

  function handleClick(item) {
    navigate("/banner", { state: { item } });
  }

  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 576px
          576: {
            slidesPerView: 4,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 5,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 10,
          },
          1280: {
            slidesPerView: 10,
          },
        }}
      >
        <button
          className="nextpage-btn"
          onClick={() => setNextpage(nextpage + 1)}
        >
          Plus de choix
        </button>
        {movies.map((item) => (
          <div className="carousel-container">
            <SwiperSlide
              className="mySwiperSlide"
              key={item.id}
              swiperslide={item}
              onClick={() => handleClick(item)}
            >
              {item.poster_path ? (
                <img
                  className="item-carousel-img"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
              ) : (
                <p className="no-poster">{item.title}</p>
              )}
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
