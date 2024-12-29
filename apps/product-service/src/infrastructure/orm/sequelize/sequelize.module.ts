import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { seqConfigs } from './config';

@Module({
  imports: [
    ///
    SequelizeModule.forRootAsync({ useFactory: () => seqConfigs[0] }),
  ],
})
export class SequelizeConfigModule {}
