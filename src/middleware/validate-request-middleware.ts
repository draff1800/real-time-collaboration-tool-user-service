import type { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { ValidateRequestError } from '../errors/custom-errors/validate-request-error.js';

export const validateRequest = (req: Request, _res: Response, next: NextFunction) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    const errorStrings = validationErrors.array().map((error) => error.msg);
    return next(new ValidateRequestError('Invalid payload', errorStrings));
  }

  next();
};
