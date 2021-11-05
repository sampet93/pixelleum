import Grid from "./components/Grid";

function App() {
  const GRID_WIDTH = 32;
  const GRID_HEIGHT = 32;
  const CELL_SIZE = 16;

  return (
    <div>
      <Grid width={GRID_WIDTH} height={GRID_HEIGHT} cellSize={CELL_SIZE} />
    </div>
  );
}

export default App;
