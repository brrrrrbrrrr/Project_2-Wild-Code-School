import React from "react";

// eslint-disable-next-line react/prop-types
function MaskNav({ setMaskChoice, item }) {
  const handleClickMask = () => {
    // eslint-disable-next-line react/prop-types
    setMaskChoice(item.img);
  };
  return (
    <img
      className="stylemasknav"
      onClick={handleClickMask}
      // eslint-disable-next-line react/prop-types
      src={item.img}
      alt=""
      role="presentation"
    />
  );
}

export default MaskNav;
