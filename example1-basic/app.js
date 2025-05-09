import * as bedrock from '@bedrock/core';

// modules
import 'bedrock-express';
import 'bedrock-mongodb';
import 'bedrock-server';
import 'bedrock-session-mongodb';
import 'bedrock-validation';
import 'bedrock-views';
import 'bedrock-webpack';

// Observe the startup process
bedrock.events.on('bedrock.init', () => {
  const logger = bedrock.loggers.get('app');
  logger.info('Initializing the app...');
})

bedrock.events.on('bedrock.start', () => {
  const logger = bedrock.loggers.get('app');
  logger.info('Starting application...');
});

bedrock.events.on('bedrocl.ready', () => {
  const logger = bedrock.loggers.get('app');
  logger.info('Application ready...');
});

bedrock.events.on('bedrock.started', () => {
  const logger = bedrock.loggers.get('app');
  logger.info('Application fully started!');
});

bedrock.start();