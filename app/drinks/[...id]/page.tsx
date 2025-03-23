'use client';
import { usePathname } from 'next/navigation';

function SingleDrink() {
  const path = usePathname();
  console.log(path);
  return <div>SingleDrink</div>;
}
export default SingleDrink;
