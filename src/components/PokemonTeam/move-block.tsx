import React from "react";
import { getMoveName } from "../../utils/moveUtils";


type MoveBlockProps = {  moves: number[];
};

const MoveBlock: React.FC<MoveBlockProps> = ({moves}) => {
  return (
    <div className="py-2 mt-2 mb-3">
      <div className="grid grid-cols-2 gap-2">
        {moves.map((move, index) => (
          <div key={index} className="py-1 px-2 rounded-lg bg-move">
            {move !== undefined ? `${getMoveName(move)}` : "No Move"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoveBlock;
