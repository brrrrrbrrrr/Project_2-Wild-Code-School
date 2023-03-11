import PropTypes from "prop-types";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import "./MaskComp.css";

// eslint-disable-next-line react/prop-types
function MaskComp({ mask, setMaskChoice }) {
  function handleClick() {
    setMaskChoice(mask.img);
  }
  return (
    <article className={`divmask${mask.id}`}>
      <div className="mask">
        <Link to="/pagewish">
          <img
            onClick={handleClick}
            className="mask-img"
            src={mask.img}
            alt={mask.name}
            role="presentation"
          />
          <h3 className="mask-description">{mask.desc}</h3>
        </Link>
      </div>
    </article>
  );
}

MaskComp.propTypes = {
  mask: PropTypes.shape({
    desc: PropTypes.string,
    id: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string,
  }),
};
MaskComp.defaultProps = {
  mask: {},
};

export default MaskComp;
