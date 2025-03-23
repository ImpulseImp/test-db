import Image from 'next/image';
import Link from 'next/link';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

async function getDrinks(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function DrinksList() {
  const { drinks } = await getDrinks(url);
  console.log(drinks);
  return (
    <div className='p-4'>
      <h1 className='p-2 text-red-400 text-3xl mb-4'>
        All Drinks listed below:
      </h1>
      <ul className='grid grid-cols-3 gap-1'>
        {drinks.map(({ idDrink, strDrink, strDrinkThumb }) => {
          return (
            <li key={idDrink}>
              <Image
                src={strDrinkThumb}
                width={48}
                height={48}
                className='w-48 h-48'
                alt='cocktail'
              />
              <Link href={`/drinks/${idDrink}`}>{strDrink}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default DrinksList;
