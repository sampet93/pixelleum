import React, { useState } from "react";
import "../Cell.css";

const Cell = (props) => {
  const [color, setColor] = useState("#FFFFFF");

  const clickHandler = (e) => {
    if (e.buttons === 1) {
      setColor("#FF0000");
    }
  };

  const mouseEnterHandler = (e) => {
    if (e.buttons === 1) {
      setColor("#FF0000");
    }
  };

  return (
    <div
      className="cell"
      style={{
        backgroundColor: color,
      }}
      onMouseDown={clickHandler}
      onDragStart={(e) => e.preventDefault()}
      onMouseEnter={(e) => mouseEnterHandler(e)}
    ></div>
  );
};

export default Cell;
