import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { amqpClientOptions } from './config/amqpClientOptions';
import { queues } from './config/rmq.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: { ...amqpClientOptions, queue: queues.PRODUCT_SERVICE_QUEUE },
    },
  );
  ///
  await app.listen();
}

((): void => {
  bootstrap()
    .then(() => process.stdout.write(`Product-service started`))
    .catch((err) => {
      process.stderr.write(`Error: ${err.message}\n`);
      process.exit(1);
    });
})();
