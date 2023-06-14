import { Gastos, PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function updateExpenses(id: string, items: Gastos) {
  try {
    if (id !== items.id) {
      throw new Error('Id cant be different for product');
    }

    const updatedExpense = await db.gastos.update({
      data: {
        id: items.id,
        status: items.status,
        userId: items.userId,
        description: items.description,
        price: items.price,
        deleted_at: items.deleted_at,
      },
      where: {
        id: id,
      },
    });
    console.log(updatedExpense);
    return updatedExpense;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
