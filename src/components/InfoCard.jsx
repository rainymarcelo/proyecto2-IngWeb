import React from 'react';

const InfoCard = ({ subtitle, info, info2, info3 = '', info4 = '' }) => (
  <div className='w-96 bg-gray-200 p-4 rounded-lg shadow-lg flex flex-col gap-4 items-center'>
    <h1 className='font-bold text-xl'>{subtitle}</h1>
    <p className='text-gray-800'>{info}</p>
    <p className='text-gray-800'>{info2}</p>
    <p className='text-gray-800'>{info3}</p>
    <p className='text-gray-800'>{info4}</p>
  </div>
);

export { InfoCard };
