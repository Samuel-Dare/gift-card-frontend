import { useState } from 'react';

import ReusableInput from '../ui/ReusableInput';
import H1 from '../ui/H1';
import Button from '../ui/Button';
import Animation from '../utils/Animation';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Client-side validation
  //   if (!formData.email || !formData.password) {
  //     setError('Please fill in all fields.');
  //     return;
  //   }

  //   try {
  //     const response = await fetch(
  //       'http://localhost/my_php_projects/gift-card-backend/login',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json', // Specify JSON content type
  //         },
  //         body: JSON.stringify(formData), // Convert form data to JSON
  //         credentials: 'include',
  //       },
  //     );

  //     const data = await response.json();

  //     if (!response.ok) {
  //       // Check if login failed (status code 401 Unauthorized)
  //       if (response.status === 401) {
  //         setError('Invalid email or password.'); // Display error to user
  //       } else {
  //         // Handle other errors
  //         throw new Error(data.message || 'Login failed.');
  //       }
  //     } else {
  //       // Login successful

  //       console.log('User successfully logged in');

  //       // Redirect user to dashboard or provide other feedback
  //     }
  //   } catch (error) {
  //     console.error(error.message);
  //     setError('Login failed. Please try again later.');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData.email, formData.password); // Call the login function with email and password
      // Redirect user to dashboard or another page upon successful login
      // You can use useHistory hook from react-router-dom for navigation
      setError('');
      navigate('/sell-gift-card');
    } catch (error) {
      setError(error.message); // Set error message state if login fails
    }
  };

  return (
    <div className="w-full md:mx-auto md:w-1/2">
      <H1 title="Login" />
      <Animation type="2">
        <form onSubmit={handleSubmit}>
          <ReusableInput
            name="email"
            label="email"
            // type="email"
            value={formData.email}
            required
            errorMessage="Field is required"
            onChange={handleChange}
          />
          <ReusableInput
            name="password"
            label="password"
            type="password"
            value={formData.password}
            required
            errorMessage="Field is required"
            onChange={handleChange}
          />
          <Button type="primary">Login</Button>
          {error && <p className="text-colorRed">{error}</p>}
        </form>
      </Animation>
    </div>
  );
};

export default Login;
