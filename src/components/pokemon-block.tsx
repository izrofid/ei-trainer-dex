import React from "react";
import speciesData from "../data/speciesData.json";
import { getMoveName } from "@/utils/moveUtils";
import { getAbilityName } from "@/utils/abilityUtils";
import getSprite from "@/utils/getSprite";
import { getItemName } from "@/utils/itemUtils";

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
  const { speciesId, level, ability, heldItem, ev, iv, moves } = trainerMon;
  const species = speciesData[speciesId.toString() as keyof typeof speciesData];

  return (
    <div className="bg-zinc-800 text-foreground py-4 px-2 rounded-sm h-full flex flex-col">
      <div className="flex items-center gap-2">
        <div className="rounded-full size-[96px] items-center flex justify-center bg-zinc-600">
          <img
            src={getSprite(speciesId)}
            alt={species ? species.nameKey : "Unknown Species"}
            className="size-[64px]"
          />
        </div>
        <div className="flex flex-col text-left">
          <span>
            <span className="text-lg font-bold">
              {species ? species.nameKey : "Unknown Species"}
            </span>
          </span>
          <span className="text-sm text-gray-300">
            Lvl {level} @ {heldItem ? `${getItemName(heldItem)}` : "No Item"}
          </span>
          <span className="text-sm text-gray-300">
            {` Ability: ${getAbilityName(ability)}`}
          </span>
        </div>
      </div>

      <div className="text-left px-2 flex flex-col pt-3 gap-3">
        <span className="text-sm text-red-500">
          EVs: {ev[0]} HP / {ev[1]} Atk / {ev[2]} Def / {ev[3]} SpA / {ev[4]}{" "}
          SpD / {ev[5]} Spe
        </span>
        <span className="text-sm text-green-500">
          IVs: {iv[0]} HP / {iv[1]} Atk / {iv[2]} Def / {iv[3]} SpA / {iv[4]}{" "}
          SpD / {iv[5]} Spe
        </span>
      </div>

      <div className="flex flex-col flex-1 p-2 justify-evenly">
        <div className="py-2 mt-2 mb-3">
          <div className="grid grid-cols-2 gap-2">
            {moves.map((move, index) => (
              <div key={index} className="p-1 rounded-lg bg-zinc-600">
                {move !== undefined ? `${getMoveName(move)}` : "No Move"}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm">
          {[
            { label: "HP", value: species?.stats[0] },
            { label: "Atk", value: species?.stats[1] },
            { label: "Def", value: species?.stats[2] },
            { label: "SpA", value: species?.stats[3] },
            { label: "SpD", value: species?.stats[4] },
            { label: "Spe", value: species?.stats[5], bg: "bg-rose-600" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`rounded-lg text-center text-white ${
          stat.bg || "bg-slate-600"
              }`}
            >
              <span>{stat.label}</span>: {stat.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonBlock;
