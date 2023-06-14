import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export function userValidator(req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req);
  if (result.isEmpty()) {
    next();
    return;
  }
  res.status(400).send('Empty fields, email and name are required');
}

export function expensesValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validationResult(req);
  if (result.isEmpty()) {
    next();
    return;
  }
  res.status(400).send('Empty fields, userId and price are required');
}

export function deleteValidator(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const result = validationResult(req);
  if (result.isEmpty()) {
    next();
    return;
  }
  res.status(400).send('The field "deleted_at" is required.');
}
