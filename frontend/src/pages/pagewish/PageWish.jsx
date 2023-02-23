/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "./PageWish.css";
import wishesArray from "../../components/envie/Wishes";
import Wish from "../../components/envie/Wish";

function PageWish({ genres, setChangeGenre2, setChangeGenre, changeGenre2 }) {
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
