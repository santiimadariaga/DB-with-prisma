import { Request, Response } from 'express';
import { createUser } from '../buissness-logic/Users/createUsers';
import { getAllUsers } from '../buissness-logic/Users/getUsers';
import { deleteUser } from '../buissness-logic/Users/deleteUsers';
import { createExpense } from '../buissness-logic/Expenses/createExpense';
import { deleteExpense } from '../buissness-logic/Expenses/deleteExpenses';
import { getAllExpenses } from '../buissness-logic/Expenses/getExpenses';
import { updateUser } from '../buissness-logic/Users/updateUsers';
import { updateExpenses } from '../buissness-logic/Expenses/updateExpenses';
import {
  changeToDeletedExpenses,
  changeToDeletedUsers,
} from '../buissness-logic/General/changeToDeleted';
import { getExpensesForUser } from '../buissness-logic/General/getExpensesForUser';

//      USERS
export const createUserController = async (req: Request, res: Response) => {
  try {
    const userInput = req.body;
    const result = await createUser(userInput, res);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const fieldsToChanges = req.body;
    await updateUser(id, fieldsToChanges);
    res.send('User updated successfully');
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUsersController = async (res: Response) => {
  try {
    const result = await getAllUsers();
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteUser(id);
    res.send('User deleted successfully');
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

//      EXPENSES
export const createExpenseController = async (req: Request, res: Response) => {
  try {
    const expenseInput = req.body;
    const result = await createExpense(expenseInput, res);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateExpensesController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const fieldsToChanges = req.body;
    await updateExpenses(id, fieldsToChanges);
    res.send('Expense updated successfully');
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllExpensesController = async (res: Response) => {
  try {
    const result = await getAllExpenses();
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteExpenseController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteExpense(id);
    res.send(`Expense deleted successfully`);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GENERAL

export const changeToDeletedEController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const fieldsToChanges = req.body;
    console.log(fieldsToChanges);
    await changeToDeletedExpenses(id, fieldsToChanges);
    res.send('Changed to "deleted".');
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const changeToDeletedUController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const fieldsToChanges = req.body;
    console.log(fieldsToChanges);
    await changeToDeletedUsers(id, fieldsToChanges);
    res.send('Changed to "deleted".');
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getExpensesUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId } = req.params;
    const result = await getExpensesForUser(userId);
    console.log(result);
    res.send(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
