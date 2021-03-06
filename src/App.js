import Grid from "./components/Grid";
import Toolbox from "./components/Toolbox";
import ColorPicker from "./components/ColorPicker";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const GRID_WIDTH = 16;
  const GRID_HEIGHT = 16;
  const CELL_SIZE = 16;

  const [mainColor, setMainColor] = useState("#000000");
  const [secondaryColor, setSecondaryColor] = useState("#FFFFFF");

  const mainColorSetter = (color) => {
    setMainColor(color);
  };
  const secondaryColorSetter = (color) => {
    setSecondaryColor(color);
  };

  // Disable default right click behaviour
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=VT323&display=swap"
        rel="stylesheet"
      ></link>
      <Container>
        <Row>
          <Toolbox />
        </Row>
        <Row>
          <Grid
            width={GRID_WIDTH}
            height={GRID_HEIGHT}
            cellSize={CELL_SIZE}
            mainColor={mainColor}
            secondaryColor={secondaryColor}
          />
        </Row>
        <Row className="justify-content-sm-center">
          <Col md="auto">
            <ColorPicker
              defaultColor={mainColor}
              colorSetter={mainColorSetter}
            />
          </Col>
          <Col md="auto">
            <ColorPicker
              defaultColor={secondaryColor}
              colorSetter={secondaryColorSetter}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
