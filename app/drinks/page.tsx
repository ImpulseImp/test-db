'use client';
import { usePathname } from 'next/navigation';

function DrinksPage() {
  const path = usePathname();
  console.log(path);
  return <div>DrinksPage</div>;
}
export default DrinksPage;
