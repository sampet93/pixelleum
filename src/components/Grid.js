import React, { useState } from "react";
import Cell from "./Cell";
import "../Grid.css";
import "../Canvas.css";

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

const getTableElements = (grid) => {
  let tableElements = [];
  for (let y = 0; y < grid.length; y++) {
    let row = [];
    for (let x = 0; x < grid[y].length; x++) {
      row.push(grid[y][x]);
    }
    tableElements.push(<tr>{row}</tr>);
  }

  return tableElements;
};

const getCanvasTable = (tableElements) =>
  tableElements.map((element) => <td>{element}</td>);

const Grid = (props) => {
  const [grid, setData] = useState(initGrid(props.width, props.height));
  const canvas = getCanvasTable(getTableElements(grid));
  console.log(grid);
  return (
    <div className="canvas">
      <table
        className="grid"
        cellPadding="0"
        style={{
          width: props.width * props.cellSize + "px",
          height: props.height * props.cellSize + "px",
        }}
      >
        {canvas}
      </table>
    </div>
  );
};

export default Grid;
