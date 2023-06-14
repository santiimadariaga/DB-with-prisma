import { PrismaClient, Gastos } from '@prisma/client';

const db = new PrismaClient();

export async function getAllExpenses(): Promise<Gastos[]> {
  try {
    const arrayOfExpenses = await db.gastos.findMany();
    return arrayOfExpenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
