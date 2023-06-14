import { Gastos, PrismaClient, Users } from '@prisma/client';

const db = new PrismaClient();

export async function changeToDeletedExpenses(id: string, item: Gastos) {
  try {
    const changeToDeleted = await db.gastos.update({
      data: {
        deleted_at: item.deleted_at,
      },
      where: {
        id: id,
      },
    });

    console.log(changeToDeleted);
    return changeToDeleted;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function changeToDeletedUsers(id: string, item: Users) {
  try {
    const changeToDeleted = await db.users.update({
      data: {
        deleted_at: item.deleted_at,
      },
      where: {
        id: id,
      },
    });

    console.log(changeToDeleted);
    return changeToDeleted;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
