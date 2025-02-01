import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'defaultSecret',
  nodeEnv: process.env.NODE_ENV || 'development',
};
