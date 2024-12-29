import { Module } from '@nestjs/common';
import { UpdateProductsUseCase } from './product/updateProduct.use-case';
import { GetProductByIdUseCase } from './product/getProductByIdProduct.use-case';
import { CreateProductUseCase } from './product/createProduct.use-case';
import { DeleteProductUseCase } from './product/deleteProduct.use-case';
import { GetAllProductsUseCase } from './product/getAllProducts.use-case';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';

@Module({
  imports: [
    RepositoriesModule
  ],
  providers: [
    CreateProductUseCase,
    DeleteProductUseCase,
    GetAllProductsUseCase,
    GetProductByIdUseCase,
    UpdateProductsUseCase
  ],
  exports: [
    CreateProductUseCase,
    DeleteProductUseCase,
    GetAllProductsUseCase,
    GetProductByIdUseCase,
    UpdateProductsUseCase
  ],
})
export class UseCasesModule {}
