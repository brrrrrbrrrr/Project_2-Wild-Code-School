// /* eslint-disable react/prop-types */
// /* eslint-disable react/button-has-type */
// /* eslint-disable import/no-extraneous-dependencies */
// import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
// import axios from "axios";
// import "./Genre.css";

// function Genre({ setChangeGenre }) {
//   return (
//     <div>
//       <button className="btn-test">click moi</button>
//       {genres.map((film) => (
//         <button
//           className="title-genre
//         "
//           key={film.id}
//           onClick={() => setChangeGenre(film)}
//         >
//           {film.name}
//         </button>
//       ))}
//     </div>
//   );
// }
// Genre.propTypes = {
//   genres: PropTypes.shape({
//     id: PropTypes.string,
//     name: PropTypes.string,
//   }),
// };

// Genre.defaultProps = {
//   genres: {},
// };
// export default Genre;
