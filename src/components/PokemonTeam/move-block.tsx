import React from "react";
import { getDefaultMoveSet, getMoveName } from "../../utils/moveUtils";
import type { TrainerMon } from "@/utils/trainerUtils";


type MoveBlockProps = {  mon: TrainerMon
};

const MoveBlock: React.FC<MoveBlockProps> = ({mon}) => {

  const moves = mon.moves ?? getDefaultMoveSet(mon);

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
