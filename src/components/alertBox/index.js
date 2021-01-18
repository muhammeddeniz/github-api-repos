import React from "react";
import ErrorIcon from "@material-ui/icons/Error";

import "./alertBox.css";

const AlertBox = () => {
  return (
    <div className="alertbox__container">
      <ErrorIcon style={{ color: "#fff" }}></ErrorIcon>
      <h3 className="alertbox__container__text">
        Aramanızla ilgili bir eşleşme bulunamadı!
      </h3>
    </div>
  );
};

export default AlertBox;
