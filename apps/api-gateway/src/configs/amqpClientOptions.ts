import { serverConfig } from './common.config';

// const recoveryQueue = 'recovery';

export const amqpClientOptions = {
  urls: [serverConfig.rabbitMQUrl],
  // noAck: false,
  queueOptions: {
    durable: false,
    // deadLetterExchange: '', // setup the dead letter exchange to point to the default exchange
    // deadLetterRoutingKey: recoveryQueue, // dead letters from our burger-queue should be routed to the recovery-queue
    messageTtl: 30000,
  },
  // persistent: true,
};
