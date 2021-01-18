import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

import "./input.css";

const Input = ({ ...restProps }) => {
  return (
    <div className="input__container">
      <div className="input__container__icon">
        <SearchRoundedIcon
          style={{ color: "#147efb", marginLeft: 6 }}
        ></SearchRoundedIcon>
      </div>
      <input className="inputComponent" {...restProps}></input>
    </div>
  );
};

export default Input;
