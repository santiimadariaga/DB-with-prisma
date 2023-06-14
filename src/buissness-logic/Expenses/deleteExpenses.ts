import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function deleteExpense(id: string) {
  try {
    await db.gastos.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
