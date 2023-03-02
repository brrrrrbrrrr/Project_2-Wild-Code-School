/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import "./Plateform.css";
import axios from "axios";

function Plateform(item) {
  const [plateform, setPlateform] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${item.item.id}/watch/providers?api_key=b57a315f37e6b92bd78f45a87f99afa6`
      )
      .then((response) => {
        if (response?.data?.results?.FR !== undefined) {
          setPlateform(response.data.results.FR.flatrate);
        }
      });
  }, []);

  return plateform ? (
    <div className="plateform-full-container">
      {plateform?.map((plateforme) => (
        <div key={plateforme.provider_id} className="plateform-column">
          <img
            src={`https://image.tmdb.org/t/p/w500${plateforme.logo_path}`}
            alt=""
            className="plateform-img"
          />
        </div>
      ))}
    </div>
  ) : (
    <p className="no-plateform">Aucune plateforme connue</p>
  );
}

export default Plateform;
