import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { UseCasesModule } from 'src/use-cases/use-cases.module';

@Module({
  imports: [
    UseCasesModule
  ],
  controllers: [ProductController],
})
export class ControllersModule {}
