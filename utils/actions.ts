'use server';

import prisma from './db';

// export const sayHello = async function (userID) {
//   console.log(`Hello user with id ${userID}`);
// };

export async function getData() {
  const data = await prisma.cable.findMany();
  return data;
}
