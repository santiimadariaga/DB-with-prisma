import { PrismaClient, Users } from '@prisma/client';

const db = new PrismaClient();

export async function getAllUsers(): Promise<Users[]> {
  try {
    const arrayOfUsers = db.users.findMany();
    return arrayOfUsers;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
