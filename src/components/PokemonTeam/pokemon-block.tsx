import React from "react";
import EvIvBlock from "./ev-iv-block";
import MoveBlock from "./move-block";
import StatBlock from "./stat-block";
import HeaderBlock from "./header-block";
import type { TrainerMon } from "@/utils/trainerUtils";


type PokemonBlockProps = {
  trainerMon: TrainerMon;
};

const PokemonBlock: React.FC<PokemonBlockProps> = ({ trainerMon }) => {
  const { evs, ivs } = trainerMon;
  return (
    <div className="bg-paper text-foreground py-4 px-2 rounded-sm select-none h-full flex flex-col">
      <HeaderBlock trainerMon={trainerMon} />
      <div className="py-2">
        <EvIvBlock ev={evs} iv={ivs} />
      </div>
      <div className="flex flex-col flex-1 justify-evenly">
        <MoveBlock mon={trainerMon} />
        <StatBlock mon={trainerMon}/>
      </div>
    </div>
  );
};

export default PokemonBlock;
