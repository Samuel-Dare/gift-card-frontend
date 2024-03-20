const ReusableDropdownInput = ({
  label,
  options,
  value,
  onChange,
  required,
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="mb-2 block text-sm font-bold text-colorGrey700"
      >
        {label}
      </label>
      <select
        id={label}
        value={value}
        onChange={onChange}
        required={required}
        className="my-2 block w-full border p-2 outline-none hover:border-colorBrand2 focus:border-colorBrand2"
      >
        <option value="">select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ReusableDropdownInput;
