import { useState } from 'react';
import ReusableInput from '../ui/ReusableInput';
import H1 from '../ui/H1';
import Button from '../ui/Button';
import Animation from '../utils/Animation';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    passwordConfirm: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
      pattern: "^[A-Za-z0-9 ,.'\\-]{3,40}$",
      errorMessage: 'Field should be between 3 and 40 characters',
    },
    {
      id: 2,
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      required: true,
      pattern: "^[A-Za-z0-9 ,.'\\-]{3,40}$",
      errorMessage: 'Field should be between 3 and 40 characters',
    },
    {
      id: 3,
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
      errorMessage: 'A valid email is required',
    },
    {
      id: 4,
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      required: true,
      // pattern: '^+(?:[0-9] ?){6,14}[0-9]$',
      pattern: '^(?:+d{1,3}s?)?(?:(d{3})|d{3})[-.s]?d{3}[-.s]?d{4}$',
      errorMessage: 'A valid phone number is required',
    },
    {
      id: 5,
      name: 'address',
      label: 'Address',
      type: 'text',
      required: false,
    },
    {
      id: 6,
      name: 'password',
      type: 'password',
      label: 'Password',
      required: true,
      pattern:
        '^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$',
      errorMessage:
        'Password should be between 8-20 characters, must include at least 1 letter, 1 number, and 1 special character',
    },
    {
      id: 7,
      name: 'passwordConfirm',
      type: 'password',
      label: 'Confirm Password',
      required: true,
      pattern: formData.password,
      errorMessage: 'Passwords do not match',
    },
  ];

  const [set1, set2] = [inputs.slice(0, 4), inputs.slice(4)];

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://localhost/my_php_projects/gift-card-backend/users',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Specify JSON content type
          },
          body: JSON.stringify(formData), // Convert form data to JSON
        },
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      // Optionally handle successful registration response
      console.log('User registered successfully');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="md:mx-10">
      <H1 title="Register" />
      <form onSubmit={handleSubmit}>
        <div className="md:flex md:gap-5">
          <div className="w-full">
            <Animation type="3">
              {set1.map((input) => (
                <ReusableInput
                  key={input.id}
                  name={input.name}
                  label={input.label}
                  type={input.type}
                  value={formData[input.name]}
                  required={input.required}
                  pattern={input.pattern}
                  errorMessage={input.errorMessage}
                  onChange={handleChange}
                />
              ))}
            </Animation>
          </div>
          <div className="w-full">
            <Animation type="4">
              {set2.map((input) => (
                <ReusableInput
                  key={input.id}
                  name={input.name}
                  label={input.label}
                  type={input.type}
                  value={formData[input.name]}
                  required={input.required}
                  pattern={input.pattern}
                  errorMessage={input.errorMessage}
                  onChange={handleChange}
                />
              ))}
            </Animation>
          </div>
        </div>

        <Button type="primary">Register</Button>
      </form>
    </div>
  );
};

export default Register;
