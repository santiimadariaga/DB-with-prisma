import { PrismaClient, Users } from '@prisma/client';

const db = new PrismaClient();

export async function updateUser(id: string, items: Users) {
  try {
    if (id !== items.id) {
      throw new Error('Id cant be different for product');
    }

    const updatedUser = await db.users.update({
      data: {
        id: items.id,
        name: items.name,
        email: items.email,
      },
      where: {
        id: id,
      },
    });
    console.log(updatedUser);
    return updatedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
