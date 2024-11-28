import { CommitCreateEvent, Jetstream } from '@skyware/jetstream';
import fs from 'node:fs';
import WebSocket from 'ws';

import { CURSOR_UPDATE_INTERVAL, DID, FIREHOSE_URL, HOST, METRICS_PORT, PORT, WANTED_COLLECTION } from './config.js';
import { label, labelerServer } from './label.js';
import logger from './logger.js';
import { startMetricsServer } from './metrics.js';

labelerServer.app.listen({ port: PORT, host: HOST }, (error, address) => {
  if (error) {
    logger.error('Error starting server: %s', error);
  } else {
    logger.info(`Labeler server listening on ${address}`);
  }
});

function shutdown() {
  try {
    logger.info('Shutting down gracefully...');
    labelerServer.stop();
  } catch (error) {
    logger.error(`Error shutting down gracefully: ${error}`);
    process.exit(1);
  }
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

await label('did:plc:a3hf5fssbzaoeidajyrzgz45', 'scam');
await label('did:plc:a3hf5fssbzaoeidajyrzgz45', 'impersonator');
