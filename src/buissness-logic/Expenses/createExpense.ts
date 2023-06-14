import { Gastos, PrismaClient } from '@prisma/client';
import { Response } from 'express';

const db = new PrismaClient();

export async function createExpense(expenseInput: Gastos, res: Response) {
  try {
    const result = await db.gastos.create({
      data: {
        userId: expenseInput.userId,
        description: expenseInput.description,
        price: expenseInput.price,
      },
    });
    console.log(result);
    res.send(`New expense created in user: ${result.userId}`);
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
