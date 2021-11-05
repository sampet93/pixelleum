import React, { useState } from "react";
import Cell from "./Cell";
import "../Grid.css";

const initGrid = (width, height, defaultColor) => {
  let grid = new Array(height);
  for (let y = 0; y < grid.length; y++) {
    grid[y] = new Array(width);
    for (let x = 0; x < grid[y].length; x++) {
      grid[y][x] = <Cell />;
    }
  }

  return grid;
};

const Grid = (props) => {
  const [grid, setData] = useState(initGrid(props.width, props.height));
  console.log(grid);
  return (
    <div
      className="Grid"
      style={{
        width: props.width * props.cellSize + "px",
        height: props.height * props.cellSize + "px",
      }}
    >
      {grid}
    </div>
  );
};

export default Grid;
