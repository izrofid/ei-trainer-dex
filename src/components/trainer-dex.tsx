import React from "react";
import PokemonTeam from "./pokemon-team";
import TopBar from "./top-bar";
import trainerData from "../data/sample.json";
import SideBar from "./side-bar";

const TrainerDex: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col h-full">
        <TopBar />
        <div className="p-4 flex justify-center items-center flex-col h-full">
          <PokemonTeam team={trainerData.pokemon} />
        </div>
      </div>
      <SideBar trainerName={trainerData.trainerName} trainerClass={trainerData.trainerClass} />
    </div>
  );
};

export default TrainerDex;
