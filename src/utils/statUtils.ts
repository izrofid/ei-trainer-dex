import { getSpeciesData } from "./SpeciesUtils";
import type { TrainerMon } from "./trainerUtils";

export function calculateHP(
  base: number,
  iv: number,
  ev: number,
  level: number
): number {
  const evComponent = Math.floor(0.25 * ev);
  const total = (2 * base + iv + evComponent) * level;
  return Math.floor(total / 100) + level + 10;
}

export function calculateOtherStat(
  base: number,
  iv: number,
  ev: number,
  level: number,
  natureMultiplier: number
): number {
  const evComponent = Math.floor(0.25 * ev);
  const total = (2 * base + iv + evComponent) * level;
  const stat = Math.floor(total / 100) + 5;
  return Math.floor(stat * natureMultiplier);
}

export const calculateStats = (trainerMon: TrainerMon): number[] => {
  const base = getSpeciesData(trainerMon.species).stats;
  const level = trainerMon.level;
  const ivs = trainerMon.ivs ?? [0, 0, 0, 0, 0, 0];
  const evs = trainerMon.evs ?? [0, 0, 0, 0, 0, 0];
  const reorderedBaseStats = [
    base[0],
    base[1],
    base[2],
    base[4],
    base[5],
    base[3],
  ];

  const actualHp = calculateHP(reorderedBaseStats[0], ivs[0], evs[0], level);

  const otherStats = reorderedBaseStats.slice(1);

  const actualOtherStats = otherStats.map((stat, index) =>
    calculateOtherStat(stat, ivs[index + 1], evs[index + 1], level, 1)
  );

  const actualStats = [actualHp, ...actualOtherStats];

  return actualStats;
};
