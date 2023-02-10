import PropTypes from "prop-types";
import React from "react";
import "./Wish.css";

function Wish({ wish }) {
  return (
    // Permet d'affecter une class a chaque ID de mon tableau//

    <article className={`div${wish.id}`}>
      <button className="button-wish" type="button">
        <h3 className="wish-description">{wish.desc}</h3>
      </button>
    </article>
  );
}
Wish.propTypes = {
  wish: PropTypes.shape({
    desc: PropTypes.string,
    id: PropTypes.number,
  }),
};

Wish.defaultProps = {
  wish: {},
};
export default Wish;
