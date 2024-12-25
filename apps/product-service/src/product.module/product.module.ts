import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { commonVars } from '../config/common.config';
import { amqpClientOptions } from '../config/amqpClientOptions';
import { queues } from '../config/rmq.config';
import { ProductController } from './controllers/product.controller';
import { productModels } from 'src/db/productModels';

@Module({
  imports: [
    SequelizeModule.forFeature(productModels),
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
