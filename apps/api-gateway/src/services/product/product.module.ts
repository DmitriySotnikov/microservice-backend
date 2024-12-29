import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { commonVars } from '../../configs/common.config';
import { queues } from '../../configs/rmq.config';
import { amqpClientOptions } from '../../configs/amqpClientOptions';
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
