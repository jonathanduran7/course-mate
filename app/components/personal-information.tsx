import { Formik } from "formik";
import { initialValues, personalInformationSchema } from "../schema/personal-information.schema";
import { useStepperStore } from "../store/stepper.store";
import InputCustom from "./input-custom";
import { useFormStore } from "../store/form.store";
import ActionsButton from "./actions-button";

export default function PersonalInformation() {
  const { handleNext } = useStepperStore();
  const setPersonalInformation = useFormStore((state) => state.setPersonalInformation);
  const form = useFormStore((state) => state.formData);

  return (
    <div className="h-full" >
      Personal Infromation
      <Formik
        initialValues={form.personalInformation || initialValues}
        onSubmit={(values) => {
          setPersonalInformation(values);
          handleNext()
        }}
        validationSchema={personalInformationSchema}
        enableReinitialize={true}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
          return (
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-between h-full">
              <div>
                <div className="flex gap-7 mb-4">
                  <InputCustom
                    label="First Name"
                    name="fullName"
                    value={values.fullName}
                    error={errors?.fullName}
                    touched={touched?.fullName}
                    handleChange={handleChange}
                    handleBlur={handleBlur} />

                  <InputCustom
                    label="Correo"
                    name="email"
                    value={values.email}
                    error={errors?.email}
                    touched={touched?.email}
                    handleChange={handleChange}
                    handleBlur={handleBlur} />
                </div>
                <div className="flex gap-7">
                  <InputCustom
                    label="Phone"
                    name="phone"
                    value={values.phone}
                    error={errors?.phone}
                    touched={touched?.phone}
                    handleChange={handleChange}
                    handleBlur={handleBlur} />
                  <InputCustom
                    label="Pais"
                    name="country"
                    value={values.country}
                    error={errors?.country}
                    touched={touched?.country}
                    handleChange={handleChange}
                    handleBlur={handleBlur} />
                </div>
              </div>
              <ActionsButton isValid={isValid} />
            </form>
          )
        }}
      </Formik>
    </div>
  )
}
