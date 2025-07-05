import moveData from "../data/moveData.json";
import { getSpeciesData } from "./SpeciesUtils";
import { validateMoves, type TrainerMon } from "./trainerUtils";

export interface Move {
  moveId: number;
  name: string;
  description: string | null;
  power: number;
  type: number;
  cat: number;
  acc: number;
  pp?: number;
  secondaryEffectChance?: number;
  target?: number;
  priority?: number;
  properties?: string[];
}

const moveDataMap: Record<number, Move> = moveData;

function getMoveData(id: number): Move | undefined {
  return moveDataMap[id];
}

function getMoveName(id: number) {
  const move = getMoveData(id);
  return move ? move.name : "Unknown Move";
}

export { getMoveData, getMoveName };

export const getDefaultMoveSet = (mon: TrainerMon) => {
  const species = getSpeciesData(mon.species);
  const learnableMoves = species.levelUpMoves.filter(
    (moveArray) => moveArray[1] <= mon.level
  );
  const moveset = learnableMoves.slice(-4).map((moveArray) => moveArray[0]);

  if (validateMoves(moveset)) return moveset;
  else throw new Error("invalid moveset")
};
