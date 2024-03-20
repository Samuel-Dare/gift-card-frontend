import React from 'react';

const BuyGiftCardForm = () => {
  return (
    <div className="container mx-auto mt-8">
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Buy Gift Card</h2>
        <div className="mb-4">
          <label htmlFor="product" className="block text-gray-700 font-bold mb-2">Product</label>
          <input type="text" id="product" name="product" className="border border-gray-400 rounded-md px-3 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 font-bold mb-2">Country</label>
          <input type="text" id="country" name="country" className="border border-gray-400 rounded-md px-3 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">Amount (Actual Gift Card Price)</label>
          <input type="text" id="amount" name="amount" className="border border-gray-400 rounded-md px-3 py-2 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="buyRate" className="block text-gray-700 font-bold mb-2">Buy Rate</label>
          <input type="text" id="buyRate" name="buyRate" className="border border-gray-400 rounded-md px-3 py-2 w-full" />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Buy Gift Card</button>
      </div>
    </div>
  );
};

export default BuyGiftCardForm;
