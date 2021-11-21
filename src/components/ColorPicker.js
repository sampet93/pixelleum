import { useState } from "react";
import { PhotoshopPicker } from "react-color";

const ColorPicker = (props) => {
  const [color, setColor] = useState(props.defaultColor);
  const [pickerColor, setPickerColor] = useState(props.defaultColor);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleChange = (color, event) => {
    setPickerColor(color.hex);
  };

  const handleChangeComplete = (color, event) => {
    setPickerColor(color.hex);
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
      <button
        style={{
          backgroundColor: color,
          width: "50px",
          height: "50px",
          borderRadius: "10px",
          borderStyle: "solid",
          borderColor: "var(--tb-btn-border-color)",
        }}
        onClick={handleClick}
      />
      <div style={{ position: "absolute", zIndex: "2" }}>
        {displayColorPicker ? (
          <PhotoshopPicker
            color={pickerColor}
            onChange={handleChange}
            onChangeComplete={handleChangeComplete}
            onAccept={() => {
              setDisplayColorPicker(false);
              props.colorSetter(pickerColor);
              setColor(pickerColor);
            }}
            onCancel={() => {
              setDisplayColorPicker(false);
              setPickerColor(color);
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ColorPicker;
