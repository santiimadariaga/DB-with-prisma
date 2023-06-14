import { Router } from 'express';
import * as controllers from './controllers';
import {
  deleteValidator,
  expensesValidator,
  userValidator,
} from '../validators/validators';
import { body } from 'express-validator';

export const stockRouter = Router();

//      USER CRUD
stockRouter.post(
  '/newUser',
  body('email').isString().notEmpty(),
  userValidator,
  controllers.createUserController
);

stockRouter.put(
  '/updateUser/:id',
  body('id').isString().notEmpty(),
  body('name').isString().notEmpty(),
  body('email').isString().notEmpty(),
  userValidator,
  controllers.updateUserController
);

stockRouter.put(
  '/changeToDeleted/user/:id',
  body('deleted_at').isString().notEmpty(),
  deleteValidator,
  controllers.changeToDeletedUController
);

stockRouter.get('/users', controllers.getAllUsersController);

stockRouter.delete('/user/:id', controllers.deleteUserController);

//      EXPENSES CRUD
stockRouter.post(
  '/newExpense',
  body('userId').isString().notEmpty(),
  body('price').isNumeric().notEmpty(),
  expensesValidator,
  controllers.createExpenseController
);

stockRouter.put(
  '/updateExpense/:id',
  body('userId').isString().notEmpty(),
  body('price').isNumeric().notEmpty(),
  expensesValidator,
  controllers.updateExpensesController
);

stockRouter.put(
  '/changeToDeleted/expense/:id',
  body('deleted_at').isString().notEmpty(),
  deleteValidator,
  controllers.changeToDeletedEController
);

stockRouter.get('/expenses', controllers.getAllExpensesController);

stockRouter.delete('/expense/:id', controllers.deleteExpenseController);

// Obtener los gastos de tal usuario en una tabla ordenada
stockRouter.get(
  '/expensesForUser/:userId',
  controllers.getExpensesUserController
);
