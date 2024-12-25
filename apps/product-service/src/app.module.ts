import { Module } from '@nestjs/common';
import { seqConfigs } from './db/database.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductModule } from './product.module/product.module';

@Module({
  imports: [
    //
    SequelizeModule.forRoot(seqConfigs[0]),
    ProductModule,
  ],
})
export class AppModule {}
