import app from './app/app.js';
import { envVariables } from './config/env-variables/env-variables.js';
import { connectToDb } from './db/connection.js';
import { logger } from './utils/logger.js';

const PORT = envVariables.port;
const NODEENV = envVariables.nodeEnv;

await connectToDb();

app.listen(PORT, () => {
  logger.info(`Started on Port ${PORT} in ${NODEENV} mode`);
});
