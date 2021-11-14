import { useState } from "react";
import SketchPicker from "react-color";

const ColorPicker = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const styles = {
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  };

  return (
    <div>
      <button onClick={handleClick} />
      <div>{displayColorPicker ? <SketchPicker /> : null}</div>
    </div>
  );
};

export default ColorPicker;
