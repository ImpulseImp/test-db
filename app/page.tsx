import React from 'react';
// import MyTables from '@/components/MyTables';
import Link from 'next/link';
import { getData } from '@/utils/actions';
const HomePage = async () => {
  const data = await getData();
  console.log(data);
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
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
