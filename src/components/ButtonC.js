import React from "react";

const ButtonC = ({ title, ...restProps }) => {
  return <button {...restProps}>{title}</button>;
};

export default ButtonC;
