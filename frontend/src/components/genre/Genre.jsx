/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Genre.css";

function Genre({ genres, setChangeGenre, setGenre }) {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=b57a315f37e6b92bd78f45a87f99afa6"
      )
      .then((res) => {
        setGenre(res.data.genres);
      });
  }, []);

  return (
    <div>
      {genres.map((film) => (
        <button
          className="title-genre
        "
          key={film.id}
          onClick={() => setChangeGenre(film)}
        >
          {film.name}
        </button>
      ))}
    </div>
  );
}
Genre.propTypes = {
  genres: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
};

Genre.defaultProps = {
  genres: {},
};
export default Genre;
