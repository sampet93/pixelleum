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
          </div>
        ) : (
          <div className="toolbox-button" onClick={clickHandler}>
            <span class="material-icons md-48">edit</span>
            <p>PEN</p>
          </div>
        );
        break;
      case "picker":
        return selected ? (
          <div className="toolbox-button-selected" onClick={clickHandler}>
            <span class="material-icons md-48">colorize</span>
            <p>PICKER</p>
          </div>
        ) : (
          <div className="toolbox-button" onClick={clickHandler}>
            <span class="material-icons md-48">colorize</span>
            <p>PICKER</p>
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
