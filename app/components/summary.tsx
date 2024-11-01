import { Box, Button } from "@mui/material"
import { useFormStore } from "../store/form.store"
import { useStepperStore } from "../store/stepper.store"
import EditIcon from '@mui/icons-material/Edit';

export default function Summary() {
  const { personalInformation, courseInformation, paymentInformation } = useFormStore(state => state.formData)
  const { handleBack, changeStep } = useStepperStore(state => state)
  return (
    <div className="h-full">
      <p className="font-bold text-4xl">Resumen</p>

      <div className="mt-2">
        <div className="flex align-center">
          <p className="font-bold">Informacion Personal</p>
          <EditIcon sx={{ height: 20, cursor: 'pointer' }} onClick={() => changeStep(0)} />
        </div>
        <div>
          <p>Nombre completo: {personalInformation.fullName}</p>
          <p>Correo: {personalInformation.email}</p>
          <p>Telefono: {personalInformation.phone}</p>
          <p>Pais: {personalInformation.country}</p>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex align-center">
          <p className="font-bold">Informacion del curso</p>
          <EditIcon sx={{ height: 20, cursor: 'pointer' }} onClick={() => changeStep(1)} />
        </div>
        <div>
          <p>Nombre del curso: {courseInformation.courseName}</p>
          <p>Modalidad: {courseInformation.modality}</p>
          <p>Fecha de inicio: {courseInformation.startDate as string}</p>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex align-center">
          <p className="font-bold">Informacion del pago</p>
          <EditIcon sx={{ height: 20, cursor: 'pointer' }} onClick={() => changeStep(2)} />
        </div>
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

      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, width: '100%' }}>
        <Button
          color="inherit"
          sx={{ mr: 1 }}
          onClick={handleBack}
        >
          Back
        </Button>

        <Box sx={{ flex: '1 1 auto' }} />
        <Button>
          Next
        </Button>
      </Box>
    </div>
  )
}
