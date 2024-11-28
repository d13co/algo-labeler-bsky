import { type ComAtprotoLabelDefs } from '@atproto/api';
import { type LoginCredentials, setLabelerLabelDefinitions } from '@skyware/labeler/scripts';

import { BSKY_IDENTIFIER, BSKY_PASSWORD } from './config.js';
import { LABELS } from './constants.js';
import logger from './logger.js';

const loginCredentials: LoginCredentials = {
  identifier: BSKY_IDENTIFIER,
  password: BSKY_PASSWORD,
};

const labelDefinitions: ComAtprotoLabelDefs.LabelValueDefinition[] = [];

for (const label of LABELS) {
  labelDefinitions.push(label);
}

try {
  await setLabelerLabelDefinitions(loginCredentials, labelDefinitions);
  logger.info('Label definitions set successfully.');
} catch (error) {
  logger.error(`Error setting label definitions: ${error}`);
}
