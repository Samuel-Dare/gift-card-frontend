import React from 'react';
import H1 from '../ui/H1';
import Animation from '../utils/Animation';

const orders = [
  {
    id: 1,
    product: 'Amazon Gift Card',
    value: 100,
    amount: 50,
    country: 'US',
    type: 'Physical',
    ePin: '123456',
    upload: 'file',
    status: 'Processing',
  },
  {
    id: 2,
    product: 'iTunes Gift Card',
    value: 150,
    amount: 100,
    country: 'UK',
    type: 'Virtual',
    ePin: '789012',
    status: 'Completed',
  },
  {
    id: 3,
    product: 'Google Play Gift Card',
    value: 50,
    amount: 25,
    country: 'US',
    type: 'Physical',
    ePin: '345678',
    upload: 'file',
    status: 'Failed',
  },
];

const MyOrders = () => {
  return (
    <div className="mt-8">
      <H1 title="My Orders" />
      <Animation type="2">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="">
                <th className="px-4 py-2">Product</th>
                <th className="px-4 py-2">Country</th>
                <th className="px-4 py-2">Value</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">E-Pin</th>
                <th className="px-4 py-2">Upload</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="bg-gray-100">
                  <td className="border px-4 py-2">{order.product}</td>
                  <td className="border px-4 py-2">{order.country}</td>
                  <td className="border px-4 py-2 text-right">{order.value}</td>
                  <td className="border px-4 py-2 text-right">
                    {order.amount}
                  </td>
                  <td className="border px-4 py-2">{order.type}</td>
                  <td className="border px-4 py-2">{order.ePin}</td>
                  <td className="border px-4 py-2">{order.upload}</td>
                  <td className="border px-4 py-2">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Animation>
    </div>
  );
};

export default MyOrders;
