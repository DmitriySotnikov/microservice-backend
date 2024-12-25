import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { commonVars } from '../../config/common.config';
import { queues } from '../../config/rmq.config';
import { amqpClientOptions } from '../../config/amqpClientOptions';
import { ProductController } from './controllers/product.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: commonVars.PRODUCT_SERVICE,
        transport: Transport.RMQ,
        options: {
          ...amqpClientOptions,
          queue: queues.PRODUCT_SERVICE_QUEUE,
        },
      },
    ]),
  ],
  controllers: [
    ///
    ProductController,
  ],
  providers: [],
})
export class ProductModule {}
