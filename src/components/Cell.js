import React, { useState, useEffect } from "react";
import "../Cell.css";

const Cell = (props) => {
  const [color, setColor] = useState("#FFFFFF");

  const clickHandler = (event) => {
    setColor("#FF0000");
  };

  return (
    <div
      className="cell"
      style={{
        backgroundColor: color,
      }}
      onClick={clickHandler}
      onDragStart={(e) => e.preventDefault()}
    ></div>
  );
};

export default Cell;
