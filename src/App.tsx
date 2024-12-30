import "./App.css";
import Chessboard from "./components/chessboard.tsx";

function App() {
  return (
    <Chessboard
      fen={"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"}
    />
  );
}

export default App;
