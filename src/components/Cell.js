import React, { useState } from "react";
import "../Cell.css";

const Cell = (props) => {
  const [color, setColor] = useState("#FFFFFF");
  const [prevColor, setPrevColor] = useState("#FFFFFF");

  const clickHandler = (e) => {
    if (e.buttons === 1) {
      console.log(props.mainColor);
      setColor(props.mainColor);
      setPrevColor(props.mainColor);
    }
  };

  const mouseEnterHandler = (e) => {
    setPrevColor(color);
    setColor(props.mainColor);
    if (e.buttons === 1) {
      setColor(props.mainColor);
      setPrevColor(props.mainColor);
    }
  };

  const mouseLeaveHandler = (e) => {
    setColor(prevColor);
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
      onMouseLeave={(e) => mouseLeaveHandler(e)}
    ></div>
  );
};

export default Cell;
