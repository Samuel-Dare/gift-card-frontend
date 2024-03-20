import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './reusableInput.css';

const ReusableInput = ({
  name,
  label,
  type,
  value,
  readOnly,
  pattern,
  required,
  errorMessage,
  onChange,
  disabled,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isInvalidInput, setIsInvalidInput] = useState(false);

  const handleChange = (e) => {
    onChange(name, e.target.value); // Call parent handleChange with name and value
    // const inputElement = e.target;
    // const isRequiredMissing = required && inputElement.validity.valueMissing;
    // const isInvalidPattern = inputElement.validity.patternMismatch;
    // const isInvalidType = inputElement.validity.typeMismatch;

    // setIsInvalidInput(isRequiredMissing || isInvalidPattern || isInvalidType);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => setIsFocus(true);

  let focus;
  isFocus ? (focus = 'true') : '';

  return (
    <div className="mb-4">
      <label
        className="mb-2 block text-sm font-bold text-colorGrey700"
        htmlFor={label}
      >
        {label}:
      </label>
      <div
        className={`relative flex ${errorMessage ? 'items-start' : 'items-center'}`}
      >
        <div className="w-full">
          <input
            className={`inputField focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-colorGrey700 shadow focus:outline-none 
        
          `}
            type={type === 'password' && showPassword ? 'text' : type}
            id={name}
            focus={focus}
            value={value}
            readOnly={readOnly === undefined ? false : !readOnly}
            onChange={handleChange}
            pattern={pattern}
            required={required}
            onBlur={handleFocus}
            onFocus={() => {
              (name === 'passwordConfirm' || name === 'newPasswordConfirm') &&
                handleFocus();
            }}
            disabled={disabled}
          />

          {isFocus && errorMessage && (
            <span className="errMsg mt-1 text-xs text-colorRed">
              {errorMessage}
            </span>
          )}
        </div>

        {type === 'password' && (
          <button
            className={`absolute right-3 ${errorMessage ? 'mt-2' : ''}`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReusableInput;
