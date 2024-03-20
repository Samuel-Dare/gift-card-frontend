import { useScreenSize } from '../contexts/ScreenSize';
import Logo from './Logo';
import MainNavListItems from './MainNavListItems';

export default function MainNav() {
  const { isSmallScreen } = useScreenSize();

  return (
    // <nav
    //   className={`${
    //     isSmallScreen ? "flex md:hidden" : "hidden md:flex"
    //   } fixed left-0 right-0 top-0 z-10 items-center justify-between border-b-2 border-colorGrey100 bg-colorGrey900 px-10 py-5 md:py-7`}
    // >
    <nav
      className={`${
        isSmallScreen ? 'flex md:hidden' : 'hidden md:flex'
      } items-center justify-between border-b-2 border-colorGrey100 bg-colorGrey900 px-10 py-5 md:py-7`}
    >
      <Logo />
      <MainNavListItems />
    </nav>
  );
}
