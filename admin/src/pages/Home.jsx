import React from 'react';
import BuyGiftCardForm from './BuyGiftCardForm';

const Home = () => {
  // Dummy data for the table
  const giftCards = [
    {
      product: 'Amazon Card',
      amount: '$50',
      country: 'US',
      rate: '50',
      status: 'Active',
    },
    {
      product: 'Amazon Card',
      amount: '$50',
      country: 'US',
      rate: '50',
      status: 'Active',
    },
    {
      product: 'Amazon Card',
      amount: '$50',
      country: 'US',
      rate: '50',
      status: 'Active',
    },
    {
      product: 'Others',
      amount: '$25',
      country: 'UK',
      rate: '25',
      status: 'Inactive',
    },
    // Add more gift cards as needed
  ];

  return (
    <div className="container m-36 mx-auto">
      <h1 className="mb-4 mt-6 text-center text-3xl font-bold">
        Gift Card Dashboard
      </h1>
      <div className="overflow-x-auto">
        <table className="border-gray-700 w-full table-auto border-collapse border">
          <thead>
            <tr>
              <th className="border-gray-700 border px-4 py-2">Product</th>
              <th className="border-gray-700 border px-4 py-2">Amount</th>
              <th className="border-gray-700 border px-4 py-2">Country</th>
              <th className="border-gray-700 border px-4 py-2">Rate</th>
              <th className="border-gray-700 border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {giftCards.map((card, index) => (
              <tr key={index}>
                <td className="border-gray-700 border px-4 py-2">
                  {card.product}
                </td>
                <td className="border-gray-700 border px-4 py-2">
                  {card.amount}
                </td>
                <td className="border-gray-700 border px-4 py-2">
                  {card.country}
                </td>
                <td className="border-gray-700 border px-4 py-2">
                  {card.rate}
                </td>
                <td
                  className={`border-gray-700 border px-4 py-2 ${card.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}
                >
                  {card.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <BuyGiftCardForm />
    </div>
  );
};

export default Home;
