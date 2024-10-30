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
  paypalInformation: {
    email: '',
  },
}

export const methodPaymentSchema = yup.object({
  methodPayment: yup.mixed()
    .oneOf(['credit-card', 'paypal', 'bank-transfer'] as const)
    .defined()
    .required('El método de pago es requerido'),
  cardInformation: yup.lazy((_, { parent }) => {
    return parent.methodPayment === 'credit-card'
      ? yup.object({
        cardName: yup.string().required('El nombre del titular de la tarjeta es requerido'),
        cardNumber: yup.string().required('El número de la tarjeta es requerido'),
        expirationDate: yup.string().required('La fecha de expiración es requerida'),
        cvv: yup.string().required('El CVV es requerido'),
      })
      : yup.mixed().notRequired();
  }),
  bankInformation: yup.lazy((_, { parent }) => {
    return parent.methodPayment === 'bank-transfer'
      ? yup.object({
        bankName: yup.string().required('El nombre del banco es requerido'),
        accountNumber: yup.string().required('El número de cuenta es requerido'),
      })
      : yup.mixed().notRequired();
  }),
  paypalInformation: yup.lazy((_, { parent }) => {
    return parent.methodPayment === 'paypal'
      ? yup.object({
        email: yup.string().email('El email es inválido').required('El email es requerido'),
      })
      : yup.mixed().notRequired();
  }),
});
