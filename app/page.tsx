import React from 'react';
// import MyTables from '@/components/MyTables';
import Link from 'next/link';
import { getData } from '@/utils/actions';

import DeleteForm from '@/components/DeleteForm';
const HomePage = async () => {
  const data = await getData();

  return (
    <div className=''>
      {/* <MyTables /> */}
      <nav className='flex flex-col'>
        <Link
          href={'/users'}
          className='underline text-lg font-semibold text-emerald-700 hover:text-emerald-500 transition-colors duration-300'
        >
          go to users page
        </Link>
        <Link
          href={'/drinks'}
          className='underline text-lg font-semibold text-emerald-700 hover:text-emerald-500 transition-colors duration-300'
        >
          go to drinks page
        </Link>
      </nav>
      <div>
        <ul className='flex  flex-col space-y-4 justify-center max-w-xl'>
          {data.map((item, idx) => {
            return (
              <li key={item.id} className='flex justify-between items-center'>
                <h1 className='font-semibold text-lg'>
                  <span>{idx + 1}. </span>
                  {item.name}
                </h1>
                <DeleteForm itemID={item.id} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
