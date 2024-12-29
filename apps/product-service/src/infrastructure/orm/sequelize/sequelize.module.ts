import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { seqConfigs } from './config';

@Module({
  imports: [
    ///
    // SequelizeModule.forRootAsync(seqConfigs[0]) // TODO Разобраться
    SequelizeModule.forRoot(seqConfigs[0])
],
})
export class SequelizeConfigModule {}
