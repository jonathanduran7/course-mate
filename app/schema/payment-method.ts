import * as yup from 'yup';

export const initialValues = {
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
}

export const methodPaymentSchema = yup.object({
  methodPayment: yup.mixed()
    .oneOf(['credit-card', 'paypal', 'bank-transfer'] as const)
    .defined()
    .required('El método de pago es requerido'),
  cardInformation: yup.object({
    cardName: yup.string().required('El nombre del titular de la tarjeta es requerido'),
    cardNumber: yup.string().required('El número de la tarjeta es requerido'),
    expirationDate: yup.string().required('La fecha de expiración es requerida'),
    cvv: yup.string().required('El CVV es requerido'),
  }).when('methodPayment', (methodPayment, schema) => {
    if (methodPayment.includes('credit-card')) {
      return schema.required('La información de la tarjeta es requerida');
    }
    return schema.notRequired();
  }),
  bankInformation: yup.object({
    bankName: yup.string().required('El nombre del banco es requerido'),
    accountNumber: yup.string().required('El número de cuenta es requerido'),
  }).when('methodPayment', (methodPayment, schema) => {
    if (methodPayment.includes('bank-transfer')) {
      return schema.required('La información del banco es requerida');
    }
    return schema.notRequired();
  })
});
