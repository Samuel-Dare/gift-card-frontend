import React from 'react';
import CheckBalance from '../ui/CheckCard';
import GiftCardsWeAreBuying from '../ui/GiftCardsWeAreBuying';
import H1 from '../ui/H1';
import CheckCard from '../ui/CheckCard';

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
    <div className="md:mx-10">
      <H1 title="Dashboard" />
      <GiftCardsWeAreBuying />
      <CheckCard
        type="1"
        title="Welcome"
        paragraph="To check your card balance or recent activity, enter the card number
          and 6-digit security code shown on your card. The card number is a
          16-digit number found on either the front or back of your card."
      />
    </div>
  );
};

export default Home;
