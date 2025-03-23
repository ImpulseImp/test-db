import React from 'react';
// import MyTables from '@/components/MyTables';
import Link from 'next/link';
const HomePage = () => {
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
    </div>
  );
};

export default HomePage;
