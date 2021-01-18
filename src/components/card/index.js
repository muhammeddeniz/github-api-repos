import React from "react";

import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="left">
        <img
          className="left_img"
          src="https://avatars0.githubusercontent.com/u/13857072?v=4"
        ></img>
      </div>

      <div className="right">
        <div className="right__header">
          <p className="right__header__title">name</p>
          <p className="right__header__nick">@login</p>
        </div>

        <div className="right__body">
          <p className="right__body__blog">blog</p>
          <p className="right__body__location">location</p>

          <p className="right__body__email">email</p>
        </div>

        <div className="right__footer">
          <p className="right__body__type">type</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
