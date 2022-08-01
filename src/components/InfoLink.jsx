import React from 'react';

const InfoLink = ({ imgAlt, path, conection, info }) => (
  <tr>
    <td className='w-1/5'>
      <div className='my-2'>
        <img className='object w-1/5 mx-2' src={path} alt={imgAlt} />
      </div>
    </td>
    <td>
      <a className='text-white text-left' href={conection}>
        {info}
      </a>
    </td>
  </tr>
);

export { InfoLink };
