interface Props {
  label: string;
  name: string;
  value: string;
  error?: string;
  touched?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function InputCustom({ label, name, value, error, touched, handleBlur, handleChange }: Props) {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">{label}</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {error && touched && <div className="text-[#f00] text-[12px]">{error}</div>}
    </div>
  )
}
