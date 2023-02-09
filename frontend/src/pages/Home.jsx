import React, { useState, useEffect } from "react";
import "./Home.css";
import TransitionAccueil from "../components/transitionAccueil/TransitionAccueil";

function Home() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  return loader ? <TransitionAccueil /> : <div className="Home">Home</div>;
}

export default Home;
