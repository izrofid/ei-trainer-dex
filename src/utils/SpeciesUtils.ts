import speciesData from "../data/speciesData.json"

interface Pokemon {
  speciesId: number;
  speciesName: string;
  types: number[];
  stats: number[];
  abilities: number[];
  heldItems: number[];
  levelUpMoves: number[][];
  tmMoves?: number[];
  eggMoves?: number[] | null;
  dexId: number;
  evolutions?: number[][] | null;
  forms?: string[] | null;
  siblings?: number[];
  baseForm?: number;
  formId?: number;
  nameKey: string;
  eggGroup?: number[];
  items?: number[];
}

interface SpeciesData {
  [id: string]: Pokemon;
}

const typedSpeciesData = speciesData as SpeciesData;

export function getSpeciesData(speciesId: number): Pokemon {
  if (speciesId === undefined || speciesId === null) {
    throw new Error(`Invalid speciesId: ${speciesId}`);
  }
  const s = typedSpeciesData[speciesId.toString()];
  if (!s) throw new Error(`Species ${speciesId} not found`);
  return s;
}

export const getMonAbility = (species: number, slot: number = 0) => {
  const ability = getSpeciesData(species).abilities[slot]
  return ability
}