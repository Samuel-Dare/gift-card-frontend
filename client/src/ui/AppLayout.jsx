import MainNav from './MainNav';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <>
      <MainNav />
      <div className="mt-[30px] md:mt-[50px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
