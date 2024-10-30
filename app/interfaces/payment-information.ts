export interface PaymentInformation {
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
