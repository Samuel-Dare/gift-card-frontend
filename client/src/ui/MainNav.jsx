import { useScreenSize } from '../contexts/ScreenSize';
import Logo from './Logo';
import MainNavListItems from './MainNavListItems';

export default function MainNav() {
  const { isSmallScreen } = useScreenSize();

  return (
    <>
      <nav
        className={`${
          isSmallScreen ? '' : 'space-y-5'
        } to-colorBrand3 from-colorBrand1 bg-gradient-to-r via-colorBrand2 px-3 py-5 text-colorGrey0 md:px-10 md:py-7`}
      >
        <Logo />
        <MainNavListItems />
      </nav>

      {/* <nav
        className={`${
          isSmallScreen ? '' : 'space-y-5'
        } from-colorBrand1 to-colorBrand3 bg-gradient-to-r via-colorBrand2 px-3 py-5 text-colorGrey0 md:px-10 md:py-7`}
        style={{ backgroundImage: "url('assets/contour_line_background.svg')" }}
      >
        <Logo />
        <MainNavListItems />
      </nav> */}
    </>
  );
}
