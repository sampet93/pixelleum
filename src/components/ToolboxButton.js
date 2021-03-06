import React, { useState } from "react";
import "../styles/toolbox.css";

const ToolboxButton = (props) => {
  const [tool, setTool] = useState(props.tool);
  const [selected, setSelected] = useState(props.selected);

  const clickHandler = (e) => {
    setSelected(selected ? false : true);
  };

  const getButton = () => {
    switch (tool) {
      case "pen":
        return selected ? (
          <div className="toolbox-button-selected" onClick={clickHandler}>
            <span class="material-icons md-48">edit</span>
            <p>PEN</p>
            <p>(P)</p>
          </div>
        ) : (
          <div className="toolbox-button" onClick={clickHandler}>
            <span class="material-icons md-48">edit</span>
            <p>PEN</p>
            <p>(P)</p>
          </div>
        );
        break;
      case "picker":
        return selected ? (
          <div className="toolbox-button-selected" onClick={clickHandler}>
            <span class="material-icons md-48">colorize</span>
            <p>PICKER</p>
            <p>(B)</p>
          </div>
        ) : (
          <div className="toolbox-button" onClick={clickHandler}>
            <span class="material-icons md-48">colorize</span>
            <p>PICKER</p>
            <p>(B)</p>
          </div>
        );
      case "bucket":
        return selected ? (
          <div className="toolbox-button-selected" onClick={clickHandler}>
            <span class="material-icons md-48">format_color_fill</span>
            <p>BUCKET</p>
            <p>(G)</p>
          </div>
        ) : (
          <div className="toolbox-button" onClick={clickHandler}>
            <span class="material-icons md-48">format_color_fill</span>
            <p>BUCKET</p>
            <p>(G)</p>
          </div>
        );

      case "empty":
        return <div className="toolbox-button"></div>;
        break;

      default:
        return <div className="toolbox-button"></div>;
        break;
    }
  };

  return getButton();
};

export default ToolboxButton;
