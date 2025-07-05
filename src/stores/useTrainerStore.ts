import type { Trainer } from "@/utils/trainerUtils";
import { create } from "zustand";

interface TrainerState {
  trainer?: Trainer;
  setTrainer: (trainer: Trainer) => void;
}

const useTrainerStore = create<TrainerState>()((set) => ({
  trainer: undefined,
  setTrainer: (trainer: Trainer) => set({ trainer }),
}));

export { useTrainerStore };
