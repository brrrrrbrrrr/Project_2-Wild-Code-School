import React from "react";
import projectorBottom from "../../assets/projector_bottom.png";
import projectorTop from "../../assets/projector_top.png";
import projection from "../../assets/projection.mp4";
import projectionMobile from "../../assets/projection_mobile.mp4";
import spectator from "../../assets/spectator.png";
import ray from "../../assets/ray.png";
import "./PageError.css";

function PageError() {
  return (
    <div className="pageError">
      <h1>Oups ! Cette page n'existe pas</h1>
      <div className="animation">
        <div className="projector-container">
          <img src={ray} alt="ray" className="ray" />
          <img
            src={projectorTop}
            alt="projector top"
            className="projectorTop"
          />
          <img
            src={projectorTop}
            alt="projector top"
            className="projectorTop2"
          />
          <img
            src={projectorBottom}
            alt="projector"
            className="projectorBottom"
          />
        </div>
        <img src={spectator} alt="spectator" className="spectator" />
        <video width="640" height="480" autoPlay muted loop className="screen">
          <source src={projection} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
      <video
        width="640"
        height="480"
        autoPlay
        muted
        loop
        className="screenMobile"
      >
        <source src={projectionMobile} type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
    </div>
  );
}

export default PageError;
