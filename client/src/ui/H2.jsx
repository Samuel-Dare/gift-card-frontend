import { useScreenSize } from '../contexts/ScreenSize';

const H2 = ({ title, center = false }) => {
  const { isSmallScreen } = useScreenSize();
  isSmallScreen ? (center = true) : center;

  return (
    <h2
      className={`${center ? 'text-center ' : ''} text-colorBrand1 mb-5 text-xl font-semibold md:text-2xl`}
    >
      {title}
    </h2>
  );
};

export default H2;
