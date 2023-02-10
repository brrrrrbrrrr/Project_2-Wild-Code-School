import React from "react";
import movieclapperloading from "../../assets/movieclapperloading.mp4";

function MovieClapper() {
  return (
    <div className="clapper-container">
      <video
        className="movie-clapper-animation"
        src={movieclapperloading}
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default MovieClapper;
