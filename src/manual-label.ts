import { CommitCreateEvent, Jetstream } from '@skyware/jetstream';
import fs from 'node:fs';
import WebSocket from 'ws';

import { CURSOR_UPDATE_INTERVAL, DID, FIREHOSE_URL, HOST, METRICS_PORT, PORT, WANTED_COLLECTION } from './config.js';
import { label, labelerServer } from './label.js';
import logger from './logger.js';
import { startMetricsServer } from './metrics.js';

// labelerServer.app.listen({ port: PORT, host: HOST }, (error, address) => {
//   if (error) {
//     logger.error('Error starting server: %s', error);
//   } else {
//     logger.info(`Labeler server listening on ${address}`);
//   }
// });

await label('did:plc:l4z3o3wf5xwazpkgt3xpxaq4', 'scam');
await label('did:plc:l4z3o3wf5xwazpkgt3xpxaq4', 'impersonator');
