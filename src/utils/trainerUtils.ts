import trainers from "../data/trainers.json";

// const IV_MIN = 0;
// const IV_MAX = 31;
// const EV_MIN = 0;
// const EV_MAX = 255;
// const STAT_COUNT = 6; // HP, Atk, Def, SpA, SpD, Spe
const MOVE_COUNT = 4;
// const LEVEL_MIN = 1;
// const LEVEL_MAX = 100;

export interface TrainerMon {
  species: number;
  level: number;
  heldItem: number;
  moves: number[];
  ability: number;
  nature: number;
  ivs: number[];
  evs: number[];
}

export interface Trainer {
  trainerId: number;
  trainerName: string;
  trainerClass: string;
  partySize: number;
  trainerPic: number;
  party: TrainerMon[];
}

// const validateIvs = (ivs: number[]): ivs is number[] => {
//     return ivs.length === STAT_COUNT && ivs.every((iv) => iv >= IV_MIN && iv <= IV_MAX);
// }

// const validateEvs = (evs: number[]): evs is number[] => {
//     return evs.length === STAT_COUNT &&
//            evs.every((ev) => ev >= EV_MIN && ev <= EV_MAX) &&
//            evs.reduce((sum, ev) => sum + ev, 0) <= 510; // Total EV limit
// }

// const validateLevel = (level: number): boolean => {
//     return level >= LEVEL_MIN && level <= LEVEL_MAX;
// }

export const validateMoves = (moves: number[]): boolean => {
    return moves.length <= MOVE_COUNT && moves.every(move => move > 0);
}

const typedTrainers = trainers as Trainer[];

export const getTrainer = (trainerId: number) => {
  const matchingTrainers = typedTrainers.filter(
    (trainer) => trainer.trainerId === trainerId
  );

  if (matchingTrainers.length > 1) {
    throw new Error(`Multiple trainers found with ID ${trainerId}`);
  }

  return matchingTrainers[0];
};

export const getTrainerParty = (trainer: Trainer) => {
  if (!trainer.partySize || trainer.partySize === 0) {
    throw new Error("Trainer does not have a party");
  }

  return trainer.party;
};

export const getTrainerList = () => {
    return typedTrainers.map((trainer) => ({
        value: trainer.trainerId,
        label: `${trainer.trainerClass} ${trainer.trainerName}`
    }))
}