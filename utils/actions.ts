'use server';

import { revalidatePath } from 'next/cache';
import prisma from './db';

// export const sayHello = async function (userID) {
//   console.log(`Hello user with id ${userID}`);
// };

export async function getData() {
  const data = await prisma.cable.findMany();
  return data;
}

export async function deleteItem(id: string) {
  await prisma.cable.delete({
    where: {
      id,
    },
  });
  revalidatePath('/');
}
