import { useScreenSize } from '../contexts/ScreenSize';
import Animation from '../utils/Animation';

const H1 = ({ title, center = false }) => {
  const { isSmallScreen } = useScreenSize();
  isSmallScreen ? (center = true) : center;

  return (
    <Animation type="1">
      <h1
        className={`${center ? 'text-center ' : ''} text-colorBrand1 mb-5 text-2xl font-semibold md:text-3xl`}
      >
        {title}
      </h1>
    </Animation>
  );
};

export default H1;
