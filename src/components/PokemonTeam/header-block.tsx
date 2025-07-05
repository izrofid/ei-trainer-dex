import React from "react";
import getSprite from "../../utils/getSprite";
import { getMonAbility, getSpeciesData } from "@/utils/SpeciesUtils";
import type { TrainerMon } from "@/utils/trainerUtils";
import { getAbilityName } from "@/utils/abilityUtils";
import { getItemName } from "@/utils/itemUtils";

type HeaderBlockProps = {
  trainerMon: TrainerMon;
};

const HeaderBlock: React.FC<HeaderBlockProps> = ({ trainerMon }) => {
  const species = getSpeciesData(trainerMon.species);

  const ability = trainerMon.ability ? trainerMon.ability : getMonAbility(trainerMon.species);

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
        <span className="text-xs px-1 rounded-md text-subtle">
          Lvl {trainerMon.level} @{" "}
          {trainerMon.heldItem
            ? `${getItemName(trainerMon.heldItem)}`
            : "No Item"}
        </span>
        <span className="text-xs text-subtle rounded-md px-1">
          {` Ability: ${getAbilityName(ability)}`}
        </span>
      </div>
    </div>
  );
};

export default HeaderBlock;
