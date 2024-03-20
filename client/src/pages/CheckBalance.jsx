import CheckCard from '../ui/CheckCard';
import H1 from '../ui/H1';

const CheckBalance = () => {
  return (
    <div className="md:mx-auto md:w-1/2">
      <H1 title="Check My Balance" />
      <CheckCard />
    </div>
  );
};

export default CheckBalance;
