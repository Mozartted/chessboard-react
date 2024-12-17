import { FC, ReactNode } from "react";

type BoardPropType = {
  alt: boolean;
};

const Board: FC<BoardPropType> = ({ alt }): ReactNode => {
  const boardColor = alt == true ? "square-green" : "square-yellow";

  return <div className={`board ${boardColor}`}></div>;
};

export default Board;
