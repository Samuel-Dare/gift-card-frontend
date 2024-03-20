import React from 'react';

const CheckBalance = () => {
  return (
    <div className="container mx-auto mt-8 flex flex-col items-center justify-center lg:flex-row">
      <div className="lg:w-1/2 lg:pr-4">
        <h2 className="mb-4 text-3xl font-bold">Welcome</h2>
        <p className="mb-4">
          To check your card balance or recent activity, enter the card number
          and 6-digit security code shown on your card. The card number is a
          16-digit number found on either the front or back of your card.
        </p>
      </div>
      <div className="lg:w-1/2 lg:pl-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <h3 className="mb-4 text-2xl font-bold">Enter Card Details</h3>
          <div className="mb-4">
            <label
              htmlFor="cardNumber"
              className="text-gray-700 mb-2 block font-bold"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="border-gray-400 w-full rounded-md border px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="securityCode"
              className="text-gray-700 mb-2 block font-bold"
            >
              Security Code (6-digit)
            </label>
            <input
              type="password"
              id="securityCode"
              name="securityCode"
              className="border-gray-400 w-full rounded-md border px-3 py-2"
            />
          </div>
          <button className="bg-blue-500 text-white hover:bg-blue-600 rounded-md px-4 py-2">
            Check Balance
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckBalance;
