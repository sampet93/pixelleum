// Button to display chosen color for left and right mouse

import React, { useState } from "react";

const ColorButton = (props) => {
  const [color, setColor] = useState("#FF0000");
  const clickHandler = (e) => {};

  return (
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        borderRadius: "10px",
        borderStyle: "solid",
        borderColor: "var(--tb-btn-border-color)",
        cursor: "pointer",
      }}
    ></div>
  );
};

export default ColorButton;
