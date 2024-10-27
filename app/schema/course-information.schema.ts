import * as yup from 'yup';

export const initialValues = {
  courseName: '',
  modality: '',
  startDate: '',
}

export const courseInformationSchema = yup.object({
  courseName: yup.string().required('El nombre del curso es requerido'),
  modality: yup.mixed()
    .oneOf(['presencial', 'virtual', 'hibrido'] as const)
    .defined()
    .required('La modalidad es requerida'),
  startDate: yup.date().required('La fecha de inicio es requerida'),
});
