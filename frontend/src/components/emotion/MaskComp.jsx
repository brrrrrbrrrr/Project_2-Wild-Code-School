import PropTypes from "prop-types";
import React from "react";
import "./MaskComp.css";

function MaskComp({ mask }) {
  return (
    <article className={`div${mask.id}`}>
      <div className="mask">
        <img className="mask-img" src={mask.img} alt={mask.name} />
        <h3 className="mask-description">{mask.desc}</h3>
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
