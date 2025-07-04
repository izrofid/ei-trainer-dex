import React from "react";
import PokemonTeam from "./PokemonTeam/pokemon-team";
import TopBar from "./top-bar";
import trainerData from "../data/sample.json";
import SideBar from "./side-bar";

const TrainerDex: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <TopBar />
        <div className="px-4 flex justify-center items-center flex-col">
          <PokemonTeam team={trainerData.pokemon} />
        </div>
      </div>
      <SideBar trainerName={trainerData.trainerName} trainerClass={trainerData.trainerClass} />
    </div>
  );
};

export default TrainerDex;
