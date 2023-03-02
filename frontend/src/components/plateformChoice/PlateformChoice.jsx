/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";

function PlateformChoice() {
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

  // console.log(platArray);
  return <div />;
}

export default PlateformChoice;
