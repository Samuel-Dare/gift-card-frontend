import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './ui/AppLayout';
import MyProfile from './pages/MyProfile';
import MyOrders from './pages/MyOrders';
import Register from './pages/Register';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import SellGiftCard from './pages/SellGiftCard';
import ContactUs from './pages/ContactUs';
import CheckBalance from './pages/CheckBalance';
import { useAuth } from './contexts/AuthContext';
import Logout from './pages/Logout';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          {isLoggedIn && (
            <>
              <Route path="/sell-gift-card" element={<SellGiftCard />} />
              <Route path="/orders" element={<MyOrders />} />
              <Route path="/profile" element={<MyProfile />} />
            </>
          )}
          <Route path="/balance" element={<CheckBalance />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
