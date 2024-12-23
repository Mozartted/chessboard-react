import { FC, ReactNode } from "react";

// Pieces import
import BlackPawn from "../assets/pieces/pawn-b.svg";
import BlackRook from "../assets/pieces/rook-b.svg";
import BlackKnight from "../assets/pieces/knight-b.svg";
import BlackBishop from "../assets/pieces/bishop-b.svg";
import BlackKing from "../assets/pieces/king-b.svg";
import BlackQueen from "../assets/pieces/queen-b.svg";

import WhitePawn from "../assets/pieces/pawn-w.svg";
import WhiteRook from "../assets/pieces/rook-w.svg";
import WhiteKnight from "../assets/pieces/knight-w.svg";
import WhiteBishop from "../assets/pieces/bishop-w.svg";
import WhiteKing from "../assets/pieces/king-w.svg";
import WhiteQueen from "../assets/pieces/queen-w.svg";

type BoardPropType = {
  alt: boolean;
  show_notation_file: boolean;
  show_notation_rank: boolean;
  file: number;
  rank: string;
};

const Square: FC<BoardPropType> = ({
  alt,
  file,
  rank,
  show_notation_file,
  show_notation_rank,
}): ReactNode => {
  const boardColor = alt == true ? "square-green" : "square-yellow";

  return (
    <div className={`board ${boardColor}`}>
      {show_notation_rank ? <span className="file_num">{file}</span> : null}
      {show_notation_file ? <span className="rank_num">{rank}</span> : null}
      <img src={WhitePawn} />
    </div>
  );
};

export default Square;
