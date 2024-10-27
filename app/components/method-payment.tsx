import { Formik } from "formik";
import { initialValues, methodPaymentSchema } from "../schema/payment-method";
import { Box, Button } from "@mui/material";
import { useStepperStore } from "../store/stepper.store";
import InputCustom from "./input-custom";

export default function MethodPayment() {
  const { handleNext, handleBack, activeStep } = useStepperStore();
  return (
    <div>
      Metodo de pago
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
          handleNext();
        }}
        validationSchema={methodPaymentSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
          return (
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-between h-full">
              <div>
                <InputCustom label="Metodo de pago" name="methodPayment" value={values.methodPayment} error={errors?.methodPayment} touched={touched?.methodPayment} handleChange={handleChange} handleBlur={handleBlur} />
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
