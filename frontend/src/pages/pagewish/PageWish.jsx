import React from "react";
import "./PageWish.css";
import wishesArray from "../../components/envie/Wishes";
import Wish from "../../components/envie/Wish";

function PageWish() {
  return (
    <section className="page-wishes">
      <h2 className="wish-title">Que voulez-vous ressentir ?</h2>
      <div className="wishes-full">
        {wishesArray.map((item) => (
          <Wish key={item.id} wish={item} />
        ))}
      </div>
    </section>
  );
}

export default PageWish;
