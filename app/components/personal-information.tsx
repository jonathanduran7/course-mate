import { Formik } from "formik";
import { initialValues, personalInformationSchema } from "../schema/personal-information.schema";

export default function PersonalInformation() {
  return (
    <div className="border-red h-full" >
      Personal Infromation
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={personalInformationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center border border-black">
            <div className="flex gap-7">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="fullName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fullName}
                />
                {errors.fullName && touched.fullName && errors.fullName && <div className="text-[#f00] text-[12px]">{errors.fullName}</div>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email && <div className="text-[#f00] text-[12px]">{errors.email}</div>}
              </div>
            </div>
            <div className="flex gap-7">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                {errors.phone && touched.phone && errors.phone && <div className="text-[#f00] text-[12px]">{errors.phone}</div>}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">Country</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                />
                {errors.country && touched.country && errors.country && <div className="text-[#f00] text-[12px]">{errors.country}</div>}
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  )
}
