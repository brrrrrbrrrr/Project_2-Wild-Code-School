import PropTypes from "prop-types";
import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from "react-router-dom";
import "./MaskComp.css";

function MaskComp({ mask }) {
  return (
    <article className={`divmask${mask.id}`}>
      <div className="mask">
        <Link to="/pagewish">
          <img className="mask-img" src={mask.img} alt={mask.name} />
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
