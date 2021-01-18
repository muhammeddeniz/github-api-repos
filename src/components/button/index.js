import React from "react";

import "./button.css";

const Button = ({ ...restProps }) => {
  return <button className="btn__component" {...restProps}></button>;
};

export default Button;
