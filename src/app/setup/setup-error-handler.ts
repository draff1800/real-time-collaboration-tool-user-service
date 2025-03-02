import express from 'express';
import { handleError } from '../../middleware/handle-error-middleware.js';

export const setupErrorHandler = (app: express.Application) => {
  app.use(handleError);
};
