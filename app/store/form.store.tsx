import { create } from "zustand";
import { PersonalInformation } from "../interfaces/personal-information";
import { CourseInformation } from "../interfaces/course-information";

export interface FormData {
  personalInformation: PersonalInformation;
  courseInformation: CourseInformation;
}

export interface FormStore {
  isFormValid: boolean;
  setFormValid: (value: boolean) => void;
  formData: FormData;
  setPersonalInformation: (value: PersonalInformation) => void;
  setCourseInformation: (value: CourseInformation) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  formData: {
    personalInformation: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
    },
    courseInformation: {
      courseName: "",
      modality: "",
      startDate: '',
    },
  },
  isFormValid: true,
  setFormValid: (value) => set({ isFormValid: value }),
  setPersonalInformation: (value) => set((state) => ({ formData: { ...state.formData, personalInformation: value } })),
  setCourseInformation: (value) => set((state) => ({ formData: { ...state.formData, courseInformation: value } })),
}));
