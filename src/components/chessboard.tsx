import { FC, ReactNode } from "react";
import Board from "./board";

const Chessboard: FC = () => {
  const squareSizes = 8;

  // Board structure logic
  const rows: Array<ReactNode[]> = [];
  let colorAlt = true;
  let startColor = true;
  for (let i = 0; i < squareSizes; i++) {
    colorAlt = startColor == true ? true : false;
    rows.push([]);
    for (let j = 0; j < squareSizes; j++) {
      rows[i].push(<Board alt={colorAlt} />);
      colorAlt = !colorAlt;
    }
    startColor = !startColor;
  }

  return (
    <>
      {rows.map((item) => (
        <div className="rows">{item}</div>
      ))}
    </>
  );
};

export default Chessboard;
