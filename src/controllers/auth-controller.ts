import bcrypt from 'bcrypt';
import { User } from '../db/models/user-model.js';
import { logger } from '../utils/logger.js';
import { InternalServerError } from '../errors/custom-errors/internal-server-error.js';
import type { Request, Response, NextFunction } from 'express';

const register = async (username: string, email: string, password: string) => {
  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const savedUser = await User.create({
      username,
      email,
      passwordHash,
    });

    logger.info('New user saved', {
      userId: savedUser._id,
      username: savedUser.username,
    });

    return savedUser.serialize();
  } catch {
    throw new InternalServerError("Couldn't register user. Please try again later");
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const login = (_req: Request, res: Response, _next: NextFunction) => {
  res.json({ message: 'Yet to be implemented...' });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const verify = (_req: Request, res: Response, _next: NextFunction) => {
  res.json({ message: 'Yet to be implemented...' });
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logout = (_req: Request, res: Response, _next: NextFunction) => {
  res.json({ message: 'Yet to be implemented...' });
};

export { register, login, verify, logout };
