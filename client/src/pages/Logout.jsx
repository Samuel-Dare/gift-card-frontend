import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import H1 from '../ui/H1';

function Logout() {
  const navigate = useNavigate(); // Use useNavigate hook to get navigation function
  const [countdown, setCountdown] = useState(5); // Initial countdown value

  // useEffect hook to handle countdown and redirection
  useEffect(() => {
    // Define a timer to decrement countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Redirect to home page when countdown reaches 0
    if (countdown === 0) {
      navigate('/'); // Redirect to home page
    }

    // Cleanup the timer when component unmounts or countdown reaches 0
    return () => clearInterval(timer);
  }, [countdown, navigate]); // Dependencies for useEffect

  return (
    <div>
      <div>
        <H1 title="Logout" />
        <p>You are logged out!</p>
        <p>Redirecting back to home in {countdown} seconds</p>
      </div>
    </div>
  );
}

export default Logout;
