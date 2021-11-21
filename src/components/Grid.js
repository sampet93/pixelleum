import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import "../Grid.css";
import "../Canvas.css";

const Grid = (props) => {
  const [dragging, setDragging] = useState(false);
  const [canvas, setCanvas] = useState([]);
  const [mainColor, setMainColor] = useState(props.mainColor);
  const [secondaryColor, setSecondaryColor] = useState(props.secondaryColor);

  let mainColorHelper = props.mainColor;
  let secondaryColorHelper = props.secondaryColor;

  const mouseDownHandler = (e) => {
    setDragging(true);
  };
  const mouseUpHandler = (e) => {
    setDragging(false);
  };

  const updateMainColor = () => {
    mainColorHelper = props.mainColor;
    setMainColor(props.mainColor);
  };
  const updateSecondaryColor = () => {
    secondaryColorHelper = props.secondaryColor;
    setSecondaryColor(props.secondaryColor);
  };

  const initGrid = (width, height) => {
    // Create the grid array of cells
    let _grid = new Array(height);
    for (let y = 0; y < _grid.length; y++) {
      _grid[y] = new Array(width);
      for (let x = 0; x < _grid[y].length; x++) {
        _grid[y][x] = (
          <Cell posX={x} posY={y} drag={dragging} mainColor={mainColorHelper} />
        );
      }
    }

    // Create table elements for every cell from grid array
    let tableElements = [];
    for (let y = 0; y < _grid.length; y++) {
      let row = [];
      for (let x = 0; x < _grid[y].length; x++) {
        row.push(<td key={x + y}>{_grid[x][y]}</td>);
      }
      tableElements.push(<tr key={y}>{row}</tr>);
    }

    setCanvas(tableElements);
  };

  useEffect(() => {
    updateMainColor();
    initGrid(props.width, props.height);
    console.log("UseEffect from Grid. Main color: " + mainColor);
  }, [props.mainColor, props.secondaryColor]);

  return (
    <div className="canvas">
      <table
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        onMouseLeave={mouseUpHandler}
        className="grid"
        cellPadding="0"
      >
        <tbody>{canvas}</tbody>
      </table>
    </div>
  );
};

export default Grid;
