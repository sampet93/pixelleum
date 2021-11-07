import Grid from "./components/Grid";

function App() {
  const GRID_WIDTH = 16;
  const GRID_HEIGHT = 16;
  const CELL_SIZE = 16;

  // Disable default right click behaviour
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  return (
    <div>
      <Grid width={GRID_WIDTH} height={GRID_HEIGHT} cellSize={CELL_SIZE} />
    </div>
  );
}

export default App;
