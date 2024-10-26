import { create } from "zustand";

export interface StepperStore {
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
}

export const useStepperStore = create<StepperStore>((set) => ({
  activeStep: 0,
  handleNext: () => set((state) => ({ activeStep: state.activeStep + 1 })),
  handleBack: () => set((state) => ({ activeStep: state.activeStep - 1 })),
  handleReset: () => set({ activeStep: 0 }),
}));
