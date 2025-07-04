import React from "react";
import EvIvBlock from "./ev-iv-block";
import MoveBlock from "./move-block";
import StatBlock from "./stat-block";
import HeaderBlock from "./header-block";

export interface TrainerMon {
  speciesId: number;
  level: number;
  ability: number;
  heldItem: number;
  ev: number[];
  iv: number[];
  moves: number[];
}

type PokemonBlockProps = {
  trainerMon: TrainerMon;
};

const PokemonBlock: React.FC<PokemonBlockProps> = ({ trainerMon }) => {
  const { speciesId, ev, iv, moves } = trainerMon;
  return (
    <div className="bg-paper text-foreground py-4 px-2 rounded-sm select-none h-full flex flex-col">
      <HeaderBlock trainerMon={trainerMon} />
      <div className="py-2">
        <EvIvBlock ev={ev} iv={iv} />
      </div>
      <div className="flex flex-col flex-1 justify-evenly">
        <MoveBlock moves={moves} />
        <StatBlock speciesId={speciesId}/>
      </div>
    </div>
  );
};

export default PokemonBlock;
