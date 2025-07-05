import React from "react";
import PokemonBlock from "./pokemon-block";
import type { TrainerMon } from "@/utils/trainerUtils";

type PokemonTeamProps = {
  team: TrainerMon[];
};

const PokemonTeam: React.FC<PokemonTeamProps> = ({ team }) => {
  return (
    <div className="grid grid-cols-3 gap-3 w-max h-full pt-2">
      {team.map((pokemon, index) => (
        <PokemonBlock key={index} trainerMon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonTeam;
