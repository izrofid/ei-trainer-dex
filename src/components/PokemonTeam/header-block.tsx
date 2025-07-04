import React from "react";
import getSprite from "../../utils/getSprite";
import { getSpeciesData } from "@/utils/SpeciesUtils";
import type { TrainerMon } from "./pokemon-block";
import { getAbilityName } from "@/utils/abilityUtils";
import { getItemName } from "@/utils/itemUtils";

type HeaderBlockProps = {
  trainerMon: TrainerMon;
};

const HeaderBlock: React.FC<HeaderBlockProps> = ({ trainerMon }) => {
  const species = getSpeciesData(trainerMon.speciesId);

  return (
    <div className="flex items-center gap-2">
      <div className="rounded-full size-[96px] items-center flex justify-center bg-avatar">
        <img
          src={getSprite(species.speciesId)}
          alt={species ? species.nameKey : "Unknown Species"}
          className="size-[64px]"
        />
      </div>
      <div className="flex flex-col text-left space-y-1">
        <span>
          <span className="text-xl px-1 font-bold">
            {species ? species.nameKey : "Unknown Species"}
          </span>
        </span>
        <span className="text-xs px-2 py-1 rounded-md bg-card">
          Lvl {trainerMon.level} @{" "}
          {trainerMon.heldItem
            ? `${getItemName(trainerMon.heldItem)}`
            : "No Item"}
        </span>
        <span className="text-xs bg-card rounded-md px-2 py-1">
          {` Ability: ${getAbilityName(trainerMon.ability)}`}
        </span>
      </div>
    </div>
  );
};

export default HeaderBlock;
