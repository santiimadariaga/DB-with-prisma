import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export async function getExpensesForUser(userId: string) {
  try {
    const expensesForUser = await db.users.findMany({
      where: {
        id: userId,
      },
      select: {
        name: true,
        email: true,
        gastos: {
          select: {
            category: true,
            description: true,
            price: true,
          },
        },
      },
    });
    return expensesForUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
