import { FC, ReactNode } from "react";
import Square from "./square";
import { Piece } from "../types";
import { isUpperCased } from "../utils";

type Position = {
  color: "white" | "black";
  piece: Piece;
};
type ChessboardPropType = {
  fen?: string;
};

const Chessboard: FC = ({ fen }: ChessboardPropType) => {
  const loadedFen = fen?.split(" ") as Array<string>;
  const squareSizes = 8;

  const ranks = loadedFen[0].split("/");
  const boardStructure = [];
  for (const rank of ranks) {
    const pieces: Position[] = [];
    const rankPieces = rank.split("");
    for (const p of rankPieces) {
      if (!isNaN(parseInt(p))) {
        // it's a number
        const i = 0;
        while (i < parseInt(p)) {
          pieces.push({ color: "white", piece: null });
        }
      } else {
        const casedState = isUpperCased(p);
        if (casedState) {
        } else {
        }
      }
    }
    // for(let piece of rank.split())
    boardStructure.push();
  }

  const notationFile = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
  const notationRanks = ["a", "b", "c", "d", "e", "f", "g", "h"];

  // Square structure logic

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
        <Square
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
