/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import "./Carousel.css";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import PlateformChoice from "../plateformChoice/PlateformChoice";
import "swiper/css";
import "swiper/css/pagination";

import { useNavigate } from "react-router-dom";

function Carousel({ changeGenre, setItem }) {
  const url = import.meta.env.VITE_FRONT_URL;
  const key = import.meta.env.VITE_API_KEY;
  const optionApi = import.meta.env.VITE_API_OPTION_DEFAULT_PAGE;
  const optionGenre = import.meta.env.VITE_API_OPTION_GENRE;
  const region = import.meta.env.VITE_API_REGION;
  const average = import.meta.env.VITE_API_OPTION_AVERAGE;
  const page = import.meta.env.VITE_API_PAGE;
  const provider = import.meta.env.VITE_API_PROVIDER_OPTION;
  const [providerChoice, setProviderChoice] = useState();
  const [movies, setMovies] = useState([]);
  const [nextpage, setNextpage] = useState(1);
  // const [actualGenre, setActualGenre] = useState(changeGenre);
  const [state, setState] = useState({
    nextpage: 1,
    actualGenre: changeGenre,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // const urlApi = `${url}?api_key=${key}&${optionApi}${state.nextpage}${average}${optionGenre}${state.actualGenre.id}&with_watch_providers=8`;
    const urlApi = `${url}?api_key=${key}&${optionApi}${average}${optionGenre}${state.actualGenre.id}${provider}${providerChoice}${region}${page}${state.nextpage}`;

    axios
      .get(urlApi)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [state, providerChoice]);

  useEffect(() => {
    setState({ nextpage: 1, actualGenre: changeGenre }); // réinitialiser la page lorsque vous changez de genre
  }, [changeGenre, providerChoice]);
  // console.log("page :", state.nextpage);
  function handleClickGenre() {
    setState({ ...state, nextpage: state.nextpage + 1 });
  }

  function handleClick(item) {
    navigate("/banner", { state: { item } });
  }
  // console.log(providerChoice);
  return (
    <div>
      <PlateformChoice
        setProviderChoice={setProviderChoice}
        providerChoice={providerChoice}
      />
      <Swiper
        zoom
        key={state.nextpage}
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
        <button className="nextpage-btn" onClick={handleClickGenre}>
          Page suivante
        </button>
        <div className="page-number">
          <p>Page : {state.nextpage}</p>
        </div>

        {movies.map((item) => (
          <div key={item.id} className="carousel-container ">
            <SwiperSlide
              className="mySwiperSlide "
              swiperslide={item}
              key={item.id}
              onClick={() => handleClick(item)}
            >
              {item.poster_path ? (
                <img
                  className="item-carousel-img swiper-zoom-container"
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
