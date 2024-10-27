import { Formik } from "formik"
import { courseInformationSchema, initialValues } from "../schema/course-information.schema"
import { useStepperStore } from "../store/stepper.store"
import { Box, Button } from "@mui/material"
import InputCustom from "./input-custom"
import { useFormStore } from "../store/form.store"

export default function CourseInformation() {
  const { handleNext, handleBack, activeStep } = useStepperStore()
  const setCourseInformation = useFormStore((state) => state.setCourseInformation)
  const { courseInformation } = useFormStore((state) => state.formData)
  return (
    <div className="h-full">
      Course Information
      <Formik
        initialValues={courseInformation || initialValues}
        onSubmit={(values) => {
          console.log(values)
          setCourseInformation(values)
          handleNext()
        }}
        validationSchema={courseInformationSchema}
        enableReinitialize={true}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) => {
          return (
            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-between h-full">
              <div>
                <div className="flex gap-7 mb-4">
                  <InputCustom
                    label="Course Name"
                    name="courseName"
                    value={values.courseName}
                    error={errors?.courseName}
                    touched={touched?.courseName}
                    handleChange={handleChange}
                    handleBlur={handleBlur} />

                  <div>
                    <div>
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modality">Modality</label>
                      <select
                        name="modality"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.modality}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      >
                        <option value="">Select Modality</option>
                        <option value="presencial">Presencial</option>
                        <option value="virtual">Virtual</option>
                        <option value="hibrido">Hibrido</option>
                      </select>
                      {errors.modality && touched.modality && <div className="text-[#f00] text-[12px]">{errors.modality}</div>}
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">Start Date</label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="date"
                      name="startDate"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.startDate}
                    />
                  </div>
                  {errors.startDate && touched.startDate && <div className="text-[#f00] text-[12px]">{errors.startDate}</div>}
                </div>
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
