import { create } from "zustand";

export interface FormStore {
  isFormValid: boolean;
  setFormValid: (value: boolean) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  isFormValid: true,
  setFormValid: (value) => set({ isFormValid: value }),
}));
