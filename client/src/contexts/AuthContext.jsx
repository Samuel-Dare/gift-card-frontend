import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

// Create a context for user authentication
const AuthContext = createContext();

// Custom hook to use the authentication context
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap the entire application
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null); // Add user state

  // Function to handle user login
  const login = async (email, password) => {
    try {
      const response = await fetch(
        'http://localhost/my_php_projects/gift-card-backend/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
          credentials: 'include',
        },
      );

      const data = await response.json();

      if (response.ok) {
        // Login successful, set token and isLoggedIn state
        setToken(data.token);
        setIsLoggedIn(true);
        // Decode token to extract user details
        const decodedToken = jwtDecode(data.token);
        setUser(decodedToken.user);
        // Store token in localStorage for persistent login
        localStorage.setItem('token', data.token);
      } else {
        // Login failed, display error message
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Login error:', error.message);
      throw error;
    }
  };

  // Function to handle user logout
  const logout = () => {
    // Clear token and isLoggedIn state
    setToken(null);
    setIsLoggedIn(false);
    setUser(null);
    // Remove token from localStorage
    localStorage.removeItem('token');
  };

  // Check if user is logged in on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // User is logged in, set token and isLoggedIn state
      setToken(storedToken);
      setIsLoggedIn(true);
      // Decode token to extract user details
      const decodedToken = jwtDecode(storedToken);
      setUser(decodedToken.user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
