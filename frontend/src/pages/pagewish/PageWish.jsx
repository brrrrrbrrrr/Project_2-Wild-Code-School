/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import "./PageWish.css";
import axios from "axios";
import wishesArray from "../../components/envie/Wishes";
import Wish from "../../components/envie/Wish";

function PageWish({ setChangeGenre2, setChangeGenre, changeGenre2 }) {
  const [genres, setGenre] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=b57a315f37e6b92bd78f45a87f99afa6&language=fr-FR"
      )
      .then((res) => {
        setGenre(res.data.genres);
      });
  }, []);

  return (
    <section className="page-wishes">
      <h2 className="wish-title">Que voulez-vous ressentir ?</h2>
      <div className="wishes-full">
        {wishesArray.map((item) => (
          <Wish
            genres={genres}
            changeGenre2={changeGenre2}
            setChangeGenre2={setChangeGenre2}
            setChangeGenre={setChangeGenre}
            key={item.id}
            wish={item}
          />
        ))}
      </div>
    </section>
  );
}

export default PageWish;
