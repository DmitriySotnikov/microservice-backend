import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfigModule } from '../orm/sequelize/sequelize.module';
import { Module } from '@nestjs/common';
import { models } from 'src/infrastructure/orm/sequelize/models';
import {
  CreateProductRepository,
  DeleteProductRepository,
  GetAllProductsRepository,
  GetProductByIdRepository,
  UpdateProductRepository,
} from 'src/core';
import { SequelizeDeleteProductRepository } from './sequelize/deleteProduct.repository';
import { SequelizeGetAllProductRepository } from './sequelize/getAllProduct.repository';
import { SequelizeGetProductByIdRepository } from './sequelize/getProductById.repository';
import { SequelizeUpdateProductRepository } from './sequelize/updateProduct.repository';
import { SequelizeCreateProductRepository } from './sequelize/createProduct.repository';

@Module({
  imports: [SequelizeConfigModule, SequelizeModule.forFeature(models)],
  providers: [
    {
      provide: CreateProductRepository,
      useClass: SequelizeCreateProductRepository,
    },
    {
      provide: DeleteProductRepository,
      useClass: SequelizeDeleteProductRepository,
    },
    {
      provide: GetAllProductsRepository,
      useClass: SequelizeGetAllProductRepository,
    },
    {
      provide: GetProductByIdRepository,
      useClass: SequelizeGetProductByIdRepository,
    },
    {
      provide: UpdateProductRepository,
      useClass: SequelizeUpdateProductRepository,
    },
  ],
  exports: [
    CreateProductRepository,
    DeleteProductRepository,
    GetAllProductsRepository,
    GetProductByIdRepository,
    UpdateProductRepository,
  ],
})
export class RepositoriesModule {}
