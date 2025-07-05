import { getTrainer, type Trainer } from "@/utils/trainerUtils";
import { create, type StateCreator } from "zustand";

interface TrainerSlice {
  trainer?: Trainer;

  setTrainer: (trainer: Trainer) => void;
}

interface StatSlice {
  statType: "base" | "actual";
  setStatType: (statType: "base" | "actual") => void;
}

type TrainerState = TrainerSlice & StatSlice;

const createTrainerSlice: StateCreator<TrainerState, [], [], TrainerSlice> = (
  set
) => ({
  trainer: getTrainer(1),
  setTrainer: (trainer: Trainer) => set({ trainer }),
});

const createStatSlice: StateCreator<TrainerState, [], [], StatSlice> = (
  set
) => ({
  statType: "actual",
  setStatType: (statType: "base" | "actual") => set({ statType }),
});

const useTrainerStore = create<TrainerState>()((...a) => ({
  ...createTrainerSlice(...a),
  ...createStatSlice(...a),
}));

export { useTrainerStore };
