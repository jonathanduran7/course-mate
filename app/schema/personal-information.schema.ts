import * as yup from 'yup';

export const personalInformationSchema = yup.object().shape({
  fullName: yup.string().required('El nombre es requerido'),
  email: yup.string().email().required('El email es requerido'),
  phone: yup.string().required('El teléfono es requerido'),
  country: yup.string().required('El país es requerido'),
});

export const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
}
