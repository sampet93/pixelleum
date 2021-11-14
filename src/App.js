import Grid from "./components/Grid";
import Toolbox from "./components/Toolbox";
import ColorPicker from "./components/ColorPicker";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const GRID_WIDTH = 16;
  const GRID_HEIGHT = 16;
  const CELL_SIZE = 16;

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
          <Grid width={GRID_WIDTH} height={GRID_HEIGHT} cellSize={CELL_SIZE} />
        </Row>
      </Container>
      <div>
        <ColorPicker />
      </div>
    </div>
  );
}

export default App;
