import { Link } from 'react-router-dom';
import { useScreenSize } from '../contexts/ScreenSize';
import Animation from '../utils/Animation';

function Button({ children, disabled, to, type, onClick }) {
  const { isSmallScreen } = useScreenSize();

  const base =
    'text-sm bg-colorBrand1 font-semibold uppercase tracking-wide text-colorGrey50 transition-colors duration-300 hover:bg-colorBrand2 focus:bg-colorBrand2 focus:outline-none focus:ring focus:ring-colorBrand2 focus:ring-offset-2 disabled:cursor-not-allowed w-full mt-2 block';

  const secondaryBase =
    'inline-block text-lg rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 border-2 border-colorGrey400 text-colorGrey-400 hover:bg-colorGrey400 hover:text-colorGrey800 focus:bg-colorGrey400 focus:text-colorGrey800 focus:ring-colorGrey-200';

  const pointerBase =
    'text-colorBrand1 hover:text-colorBrand2 p-4 tracking-wide inline-block text-lg font-semibold disabled:cursor-not-allowed focus:outline-none transition-colors duration-300';

  const styles = {
    primary: isSmallScreen
      ? base + ' rounded-md py-2 md:py-2.5 md:text-base'
      : base + ' px-3 py-2 md:px-4 md:py-2.5 md:text-base md:w-auto ml-auto',

    primary2: isSmallScreen
      ? base + ' rounded-md py-2 md:py-2.5 md:text-base'
      : base + ' px-3 py-2 md:px-4 md:py-2.5 md:text-base md:w-auto mr-auto',

    small:
      'px-4 py-2 md:px-5 md:py-2.5 text-sm border-colorBrand1 hover:bg-colorBrand2 hover:text-colorGrey100 md:w-auto rounded-lg ' +
      secondaryBase,

    pointer: pointerBase,

    pointerBlack: 'text-colorGrey800 hidden md:inline-block ' + pointerBase,

    secondary: secondaryBase + ' md:w-auto',
    secondaryGrey: secondaryBase,
    secondaryFull: 'text-sm w-full rounded-lg ' + secondaryBase,
  };

  if (!children) return;

  if (to)
    return (
      <Animation type="2">
        <Link to={to} className={styles[type] + ' text-center'}>
          {children}
        </Link>
      </Animation>
    );

  if (onClick)
    return (
      <Animation type="2">
        <button onClick={onClick} disabled={disabled} className={styles[type]}>
          {children}
        </button>
      </Animation>
    );

  return (
    <Animation type="2">
      <button disabled={disabled} className={styles[type]}>
        {children}
      </button>
    </Animation>
  );
}

export default Button;
