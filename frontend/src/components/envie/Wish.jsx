/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { React } from "react";
import "./Wish.css";
import { Link } from "react-router-dom";

function Wish({ wish, setChangeGenre2, setChangeGenre, genres }) {
  function handleClick() {
    setChangeGenre2(genres[wish.choice2]);
    setChangeGenre(genres[wish.choice]);
  }

  return (
    // Permet d'affecter une class a chaque ID de mon tableau//

    <article className={`div${wish.id}`}>
      <Link to="/pagewish/pagefilm">
        <button className="button-wish" type="button" onClick={handleClick}>
          <h3 className="wish-description">{wish.desc}</h3>
        </button>
      </Link>
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
