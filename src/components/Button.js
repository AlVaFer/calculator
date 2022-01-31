import React from "react";
import "./ButtonStyle.css";

const Button = ({ wide, handler, content }) => {
  return (
    <button
      className={`button ${wide ? "wide" : " "}`}
      onClick={handler}
    >
      {content}
    </button>
  );
};

export default Button;
