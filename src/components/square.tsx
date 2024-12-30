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
import { Piece } from "../types";

type BoardPropType = {
  alt: boolean;
  show_notation_file: boolean;
  show_notation_rank: boolean;
  file: number;
  rank: string;
  color: "black" | "white";
  piece: Piece;
};

const Square: FC<BoardPropType> = ({
  alt,
  file,
  rank,
  show_notation_file,
  show_notation_rank,
  color,
  piece,
}): ReactNode => {
  const boardColor = alt == true ? "square-green" : "square-yellow";

  const renderPiece = (pieceType: typeof piece) => {
    switch (pieceType) {
      case "K":
        return color == "white" ? (
          <img src={WhiteKing} />
        ) : (
          <img src={BlackKing} />
        );
        break;
      case "B":
        return color == "white" ? (
          <img src={WhiteBishop} />
        ) : (
          <img src={BlackBishop} />
        );
        break;
      case "p":
        return color == "white" ? (
          <img src={WhitePawn} />
        ) : (
          <img src={BlackPawn} />
        );
        break;

      case "N":
        return color == "white" ? (
          <img src={WhiteKnight} />
        ) : (
          <img src={BlackKnight} />
        );
        break;

      case "R":
        return color == "white" ? (
          <img src={WhiteRook} />
        ) : (
          <img src={BlackRook} />
        );
        break;
      case "Q":
        return color == "white" ? (
          <img src={WhiteQueen} />
        ) : (
          <img src={BlackQueen} />
        );
        break;
      default:
        return null;
        break;
    }
  };

  return (
    <div className={`board ${boardColor}`}>
      {show_notation_rank ? <span className="file_num">{file}</span> : null}
      {show_notation_file ? <span className="rank_num">{rank}</span> : null}
      {/* {color == "white" ? <img src={WhitePawn} /> : <img src={BlackPawn} />} */}
      {renderPiece(piece)}
    </div>
  );
};

export default Square;
