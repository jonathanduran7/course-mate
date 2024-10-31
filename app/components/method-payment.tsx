import { Formik } from "formik";
import { initialValues, methodPaymentSchema } from "../schema/payment-method";
import { Box, Button } from "@mui/material";
import { useStepperStore } from "../store/stepper.store";
import InputCustom from "./input-custom";
import { useFormStore } from "../store/form.store";

export default function MethodPayment() {
  const { handleNext, handleBack, activeStep } = useStepperStore();
  const form = useFormStore((state) => state.formData);
  const setPaymentInformation = useFormStore((state) => state.setPaymentInformation);
  return (
    <div className="h-full">
      Metodo de pago
      <Formik
        initialValues={form.paymentInformation || initialValues}
        onSubmit={(values) => {
          setPaymentInformation(values);
          handleNext();
        }}
        validationSchema={methodPaymentSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
          return (
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-between h-full">
              <div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="methodPayment">Metodo de pago</label>
                  <select
                    name="methodPayment"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.methodPayment}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Method</option>
                    <option value="credit-card">Tarjeta de credito</option>
                    <option value="paypal">Paypal</option>
                    <option value="bank-transfer">Transferencia</option>
                  </select>
                  {errors.methodPayment && touched.methodPayment && <div className="text-[#f00] text-[12px]">{errors.methodPayment}</div>}
                </div>

                {values.methodPayment.includes('credit-card') && (
                  <>
                    <div className="flex gap-7 mb-4">
                      <InputCustom
                        label="Nombre del titular de la tarjeta"
                        name="cardInformation.cardName"
                        value={values.cardInformation?.cardName}
                        error={errors?.cardInformation?.cardName}
                        touched={touched?.cardInformation?.cardName}
                        handleChange={handleChange}
                        handleBlur={handleBlur} />

                      <InputCustom
                        label="Número de tarjeta"
                        name="cardInformation.cardNumber"
                        value={values.cardInformation.cardNumber}
                        error={errors?.cardInformation?.cardNumber}
                        touched={touched?.cardInformation?.cardNumber}
                        handleChange={handleChange}
                        handleBlur={handleBlur} />

                    </div>

                    <div className="flex gap-7 mb-4">
                      <InputCustom
                        label="Fecha de expiración"
                        name="cardInformation.expirationDate"
                        value={values.cardInformation.expirationDate}
                        error={errors?.cardInformation?.expirationDate}
                        touched={touched?.cardInformation?.expirationDate}
                        handleChange={handleChange}
                        handleBlur={handleBlur} />

                      <InputCustom
                        label="CVV"
                        name="cardInformation.cvv"
                        value={values.cardInformation.cvv}
                        error={errors?.cardInformation?.cvv}
                        touched={touched?.cardInformation?.cvv}
                        handleChange={handleChange}
                        handleBlur={handleBlur} />
                    </div>
                  </>
                )}

                {values.methodPayment.includes('bank-transfer') && (
                  <div>
                    <InputCustom
                      label="Nombre del titular de la cuenta"
                      name="bankInformation.bankName"
                      value={values.bankInformation.bankName}
                      error={errors?.bankInformation?.bankName}
                      touched={touched?.bankInformation?.bankName}
                      handleChange={handleChange}
                      handleBlur={handleBlur} />

                    <InputCustom
                      label="Número de cuenta"
                      name="bankInformation.accountNumber"
                      value={values.bankInformation.accountNumber}
                      error={errors?.bankInformation?.accountNumber}
                      touched={touched?.bankInformation?.accountNumber}
                      handleChange={handleChange}
                      handleBlur={handleBlur} />
                  </div>
                )}

                {values.methodPayment.includes('paypal') && (
                  <div>
                    <InputCustom
                      label="Email"
                      name="paypalInformation.email"
                      value={values.paypalInformation.email}
                      error={errors?.paypalInformation?.email}
                      touched={touched?.paypalInformation?.email}
                      handleChange={handleChange}
                      handleBlur={handleBlur} />
                  </div>
                )}
              </div>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, width: '100%' }}>
                <Button
                  color="inherit"
                  sx={{ mr: 1 }}
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button type="submit" disabled={!isValid}>
                  Next
                </Button>
              </Box>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}
