import React from "react";

const Result = ({ input, output }) => {
  return (
    <div className="result">
      <output className="input">{input}</output>
      <output>{output}</output>
    </div>
  );
};

export default Result;
