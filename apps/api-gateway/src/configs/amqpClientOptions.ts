import { serverConfig } from './common.config';

export const amqpClientOptions = {
  urls: [serverConfig.rabbitMQUrl],
  queueOptions: {
    durable: false,
    messageTtl: 30000,
  },
};
