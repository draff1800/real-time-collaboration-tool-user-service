import { envVariables } from './config.js';
import { connectToDb } from './db/connection.js';
import app from './app/app.js';
import { logger } from './utils/logger.js';

const PORT = envVariables.serverPort;
const NODEENV = envVariables.nodeEnv;

await connectToDb();

app.listen(PORT, () => {
  logger.info(`Started on port ${PORT} in ${NODEENV} mode`);
});
