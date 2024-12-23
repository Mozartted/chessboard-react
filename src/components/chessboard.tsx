import { FC, ReactNode } from "react";
import Board from "./board";

const Chessboard: FC = () => {
  const squareSizes = 8;

  const notationFile = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
  const notationRanks = ["a", "b", "c", "d", "e", "f", "g", "h"];

  // Board structure logic
  const rows: Array<ReactNode[]> = [];
  let colorAlt = true;
  let startColor = true;
  let fileCount = 0;
  let rankCount = 0;

  for (let i = 0; i < squareSizes; i++) {
    colorAlt = startColor == true ? true : false;
    rows.push([]);
    for (let j = 0; j < squareSizes; j++) {
      rows[i].push(
        <Board
          key={`box-coordinates-${notationFile[fileCount]}-${notationRanks[rankCount]}`}
          show_notation_file={fileCount == squareSizes - 1}
          show_notation_rank={rankCount == 0}
          alt={colorAlt}
          file={notationFile[fileCount]}
          rank={notationRanks[rankCount]}
        />,
      );
      colorAlt = !colorAlt;
      rankCount++;
    }
    fileCount++;
    rankCount = 0;
    startColor = !startColor;
  }

  return (
    <>
      <div className="chessboard">
        {rows.map((item, index) => (
          <div key={index} className="rows">
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Chessboard;
