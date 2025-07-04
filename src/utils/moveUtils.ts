import moveData from "../data/moveData.json"

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