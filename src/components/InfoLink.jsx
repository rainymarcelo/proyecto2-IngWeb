import React from 'react';

const InfoLink = ({ imgAlt, path, conection, info }) => (
  <tr>
    <td className='w-1/4'>
      <div className='my-4 y-25px'>
        <img className='object w-1/2 mx-2' src={path} alt={imgAlt} />
      </div>
    </td>
    <td>
      <a className='text-white text-center' href={conection}>
        {info}
      </a>
    </td>
  </tr>
);

export { InfoLink };
