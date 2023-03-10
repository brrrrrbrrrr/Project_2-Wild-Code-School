/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PlateformChoice.css";

function PlateformChoice({ setProviderChoice, providerChoice }) {
  const [plateformArrayApi, setPlateformArrayApi] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/watch/providers/movie?api_key=b57a315f37e6b92bd78f45a87f99afa6"
      )
      .then((res) => {
        setPlateformArrayApi(res.data.results);
      });
  }, []);

  const platArray = plateformArrayApi.filter(
    (plat) =>
      plat.display_priority === 0 ||
      plat.display_priority === 1 ||
      plat.display_priority === 2 ||
      plat.display_priority === 3
  );

  const myPlateformArray = platArray.filter(
    (plat) =>
      plat.provider_name === "Netflix" ||
      plat.provider_name === "Apple TV" ||
      (plat.provider_name === "Amazon Prime Video" &&
        plat.provider_id === 119) ||
      plat.provider_name === "Canal+" ||
      plat.provider_name === "Google Play Movies" ||
      plat.provider_name === "Disney plus"
  );

  function handleClick(item) {
    setProviderChoice(item.provider_id);
  }

  return (
    <div className="plateform-btn-container">
      {myPlateformArray.map((item) => (
        <button
          onClick={() => handleClick(item)}
          className={`button-plateform ${
            providerChoice === item.provider_id ? "selected" : ""
          }`}
          key={item.id}
        >
          {item.provider_name}
        </button>
      ))}
    </div>
  );
}

export default PlateformChoice;
