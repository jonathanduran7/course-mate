import * as yup from 'yup';

export const initialValues = {
  courseName: '',
  modality: '',
  startDate: new Date(),
}

export const courseInformationSchema = yup.object({
  courseName: yup.string().required('El nombre del curso es requerido'),
  modality: yup.mixed().oneOf(['presencial', 'virtual', 'hibrido'] as const).defined(),
  startDate: yup.date().default(() => new Date()),
});
