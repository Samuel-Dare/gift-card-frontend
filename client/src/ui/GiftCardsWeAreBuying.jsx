import Animation from '../utils/Animation';

const GiftCardsWeAreBuying = () => {
  return (
    <Animation type="3">
      <div className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 md:m-10 lg:grid-cols-3">
        <div className="border-gray-300 rounded-lg border p-5">
          <h3 className="mb-2 text-xl font-bold">Amazon Gift Card</h3>
          <p className="text-gray-700 mb-2">Gift Card Value: $50</p>
          <p className="text-gray-700 mb-2">Buy Rate: $40</p>
        </div>
        <div className="border-gray-300 rounded-lg border p-5">
          <h3 className="mb-2 text-xl font-bold">iTunes Gift Card</h3>
          <p className="text-gray-700 mb-2">Gift Card Value: $25</p>
          <p className="text-gray-700 mb-2">Buy Rate: $20</p>
        </div>
      </div>
    </Animation>
  );
};

export default GiftCardsWeAreBuying;
