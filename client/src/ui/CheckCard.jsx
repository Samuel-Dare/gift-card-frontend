import React from 'react';
import Button from './Button';
import Animation from '../utils/Animation';

const CheckCard = ({ type, title, paragraph }) => {
  return (
    <div
      className={`container mx-auto flex flex-col items-center justify-center ${type === '1' ? 'mt-8 lg:flex-row lg:gap-5' : 'lg-flex-col'}`}
    >
      {type === '1' && (
        <div className="lg:w-1/2">
          <Animation type={`${type === '1' ? '3' : '2'}`}>
            <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
            <p className="mb-4">{paragraph}</p>
          </Animation>
        </div>
      )}
      <div className={`${type === '1' ? 'lg:w-1/2' : ''} w-full`}>
        <Animation type={`${type === '1' ? '4' : '2'}`}>
          <div className="rounded-lg p-4">
            {type === '1' && (
              <h3 className="mb-4 text-2xl font-semibold">
                Enter Card Details
              </h3>
            )}
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

            <Button type="primary">Check Balance</Button>
          </div>
        </Animation>
      </div>
    </div>
  );
};

export default CheckCard;
