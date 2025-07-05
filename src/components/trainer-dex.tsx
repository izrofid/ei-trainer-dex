import React from "react";
import PokemonTeam from "./PokemonTeam/pokemon-team";
import TopBar from "./top-bar";
import SideBar from "./side-bar";
import { getTrainer } from "@/utils/trainerUtils";
import { useTrainerStore } from "@/stores/useTrainerStore";

const TrainerDex: React.FC = () => {

  const trainer = useTrainerStore((state) => state.trainer) ?? getTrainer(860);

  return (
    <div className="flex">
      <div className="flex flex-col">
        <TopBar />
        <div className="px-4 flex justify-center items-center flex-col">
          <PokemonTeam team={trainer.party} />
        </div>
      </div>
      <SideBar trainerName={trainer.trainerName} trainerClass={trainer.trainerClass} />
    </div>
  );
};

export default TrainerDex;
