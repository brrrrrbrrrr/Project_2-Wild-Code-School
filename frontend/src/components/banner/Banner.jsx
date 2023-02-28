/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import "./Banner.css";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import button from "../../assets/images/button.png";

function Banner() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { item } = state;
  const goBack = () => {
    navigate(-1);
  };
  const [movieVideo, setMovieVideo] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${item.id}?api_key=b57a315f37e6b92bd78f45a87f99afa6&append_to_response=videos`
      )
      .then((response) => {
        setMovieVideo(response.data.videos.results);
      });
  }, []);
  const trailer = movieVideo.find((vid) => vid.name === "Official Trailer");
  console.log(movieVideo);
  return (
    <div className="banner-container">
      <div className="backdrop-img-container">
        <img
          className="backdrop-img"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        />
      </div>
      {trailer ? <YouTube videoId={trailer?.key} /> : null}
      <div className="item-description-container">
        <div className="image-title-container">
          <div className="poster-img-container">
            <img
              className="poster-img"
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            />
          </div>
          <div className="item-title-container">
            <h1 className="item-title">{item.title}</h1>
            <div className="line" />
          </div>
        </div>

        <article className="synopsis-container">
          <h2 className="synopsis-title">Synopsis</h2>
          <p className="item-overview">{item.overview}</p>
        </article>
        <div className="button-container">
          <img className="button" onClick={goBack} src={button} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
