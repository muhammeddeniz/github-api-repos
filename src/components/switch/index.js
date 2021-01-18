import React, { useState } from "react";

import "./switch.css";

const Switch = ({ isUser, setIsUser }) => {
  const [buttonLeftClass, setButtonLeftClass] = useState(
    "switch__button__normal"
  );
  const [buttonRightClass, setButtonRightClass] = useState(
    "switch__button__active"
  );

  return (
    <div className="switch__container">
      <button
        className={buttonLeftClass}
        onClick={() => {
          setIsUser(true);
          setButtonRightClass("switch__button__normal");
          setButtonLeftClass("switch__button__active");
        }}
      >
        Kullanici
      </button>

      <button
        className={buttonRightClass}
        onClick={() => {
          setIsUser(false);
          setButtonRightClass("switch__button__active");
          setButtonLeftClass("switch__button__normal");
        }}
      >
        Organizasyon
      </button>
    </div>
  );
};

export default Switch;
