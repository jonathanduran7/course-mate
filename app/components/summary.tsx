import { useFormStore } from "../store/form.store"

export default function Summary() {
  const { personalInformation, courseInformation, paymentInformation } = useFormStore(state => state.formData)
  return (
    <div className="h-full">
      Summary

      <div className="mt-2">
        <p>Informacion Personal</p>
        <div>
          <p>Nombre completo: {personalInformation.fullName}</p>
          <p>Correo: {personalInformation.email}</p>
          <p>Telefono: {personalInformation.phone}</p>
          <p>Pais: {personalInformation.country}</p>
        </div>
      </div>

      <div className="mt-2">
        <p>Informacion del curso</p>
        <div>
          <p>Nombre del curso: {courseInformation.courseName}</p>
          <p>Modalidad: {courseInformation.modality}</p>
          <p>Fecha de inicio: {courseInformation.startDate as string}</p>
        </div>
      </div>

      <div className="mt-2">
        <p>Informacion del pago</p>
        <div>
          <p>Metodo de pago: {paymentInformation.methodPayment}</p>
          {paymentInformation.methodPayment.includes('credit-card') && (
            <div>
              <p>Nombre del titular de la tarjeta: {paymentInformation.cardInformation.cardName}</p>
              <p>Numero de tarjeta: {paymentInformation.cardInformation.cardNumber}</p>
              <p>Fecha de expiracion: {paymentInformation.cardInformation.expirationDate}</p>
              <p>CVV: {paymentInformation.cardInformation.cvv}</p>
            </div>
          )}

          {paymentInformation.methodPayment.includes('bank-transfer') && (
            <div>
              <p>Nombre del titular de la cuenta: {paymentInformation.bankInformation.bankName}</p>
              <p>Numero de cuenta: {paymentInformation.bankInformation.accountNumber}</p>
            </div>
          )}

          {paymentInformation.methodPayment.includes('paypal') && (
            <div>
              <p>Correo de paypal: {paymentInformation.paypalInformation.email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
