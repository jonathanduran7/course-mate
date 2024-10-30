import { create } from "zustand";
import { PersonalInformation } from "../interfaces/personal-information";
import { CourseInformation } from "../interfaces/course-information";
import { PaymentInformation } from "../interfaces/payment-information";

export interface FormData {
  personalInformation: PersonalInformation;
  courseInformation: CourseInformation;
  paymentInformation: PaymentInformation;
}

export interface FormStore {
  isFormValid: boolean;
  setFormValid: (value: boolean) => void;
  formData: FormData;
  setPersonalInformation: (value: PersonalInformation) => void;
  setCourseInformation: (value: CourseInformation) => void;
  setPaymentInformation: (value: PaymentInformation) => void;
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
    paymentInformation: {
      methodPayment: '',
      cardInformation: {
        cardName: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
      },
      bankInformation: {
        bankName: '',
        accountNumber: '',
      },
      paypalInformation: {
        email: '',
      },
    }
  },
  isFormValid: true,
  setFormValid: (value) => set({ isFormValid: value }),
  setPersonalInformation: (value) => set((state) => ({ formData: { ...state.formData, personalInformation: value } })),
  setCourseInformation: (value) => set((state) => ({ formData: { ...state.formData, courseInformation: value } })),
  setPaymentInformation: (value) => set((state) => ({ formData: { ...state.formData, paymentInformation: value } })),
}));
