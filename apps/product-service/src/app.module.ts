import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { commonVars } from './config/common.config';
import { amqpClientOptions } from './config/amqpClientOptions';
import { queues } from './config/rmq.config';
import { ControllersModule } from './interfaceAdapters/controllers/controllers.module';

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
    ControllersModule,
  ],
  providers: [],
})
export class AppModule {}
