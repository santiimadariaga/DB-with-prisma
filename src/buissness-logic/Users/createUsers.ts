import { Response } from 'express';
import { PrismaClient, Users } from '@prisma/client';

const db = new PrismaClient();

export async function createUser(
  userInput: Users,
  res: Response
): Promise<any> {
  try {
    const result = await db.users.create({
      data: {
        email: userInput.email,
      },
    });
    console.log(result);
    res.send('User Created');
  } catch (error: any) {
    console.log(error);
    throw error;
  }
}
