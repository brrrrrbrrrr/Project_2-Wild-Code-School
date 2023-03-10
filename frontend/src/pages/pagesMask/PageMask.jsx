import React from "react";
import "./PageMask.css";
import Page2Array from "../../components/Page2Array";
import MaskComp from "../../components/emotion/MaskComp";

// eslint-disable-next-line prettier/prettier, react/prop-types
function PageMask({ maskChoice, setMaskChoice }) {
  return (
    <section className="mask-page">
      <h2 className="titre-mask">COMMENT VOUS SENTEZ-VOUS AUJOURD'HUI ?</h2>

      <div className="mask-full">
        {Page2Array.map((item) => (
          <MaskComp
            maskChoice={maskChoice}
            setMaskChoice={setMaskChoice}
            key={item.id}
            mask={item}
          />
        ))}
      </div>
    </section>
  );
}

export default PageMask;
