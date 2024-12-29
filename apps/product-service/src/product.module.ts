// import { Module } from '@nestjs/common';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { commonVars } from './config/common.config';
// import { amqpClientOptions } from './config/amqpClientOptions';
// import { queues } from './config/rmq.config';
// import { ProductController } from './InterfaceAdapters/controllers/product.controller';
// import { models } from './infrastructure/orm/sequelize/models';
// import { SequelizeConfigModule } from './infrastructure/orm/sequelize/sequelize.module';

// @Module({
//   imports: [
//     SequelizeConfigModule,
//     SequelizeModule.forFeature(models),
//     ClientsModule.register([
//       {
//         name: commonVars.PRODUCT_SERVICE,
//         transport: Transport.RMQ,
//         options: {
//           ...amqpClientOptions,
//           queue: queues.PRODUCT_SERVICE_QUEUE,
//         },
//       },
//     ]),
//   ],
//   controllers: [
//     ///
//     ProductController,
//   ],
//   providers: [],
// })
// export class ProductModule {}
