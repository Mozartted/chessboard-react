import { FC, ReactNode } from "react";

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
    </div>
  );
};

export default Square;
