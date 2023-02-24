import React, { useEffect, useState } from "react";
import "./PageMask.css";
import Page2Array from "../../components/Page2Array";
import MaskComp from "../../components/emotion/MaskComp";
import TransitionAccueil from "../../components/transitionAccueil/TransitionAccueil";

function PageMask() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return loader ? (
    <TransitionAccueil />
  ) : (
    <section className="mask-page">
      <h2 className="titre-mask">COMMENT VOUS SENTEZ-VOUS AUJOURD'HUI ?</h2>

      <div className="mask-full">
        {Page2Array.map((item) => (
          <MaskComp key={item.id} mask={item} />
        ))}
      </div>
    </section>
  );
}

export default PageMask;
