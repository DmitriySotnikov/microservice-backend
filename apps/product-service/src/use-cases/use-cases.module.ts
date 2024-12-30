import { Module } from '@nestjs/common';
import { UpdateProductUseCase } from './product/updateProduct/updateProduct.use-case';
import { GetProductByIdUseCase } from './product/getProductById/getProductById.use-case';
import { CreateProductUseCase } from './product/createProduct/createProduct.use-case';
import { DeleteProductUseCase } from './product/deleteProduct/deleteProduct.use-case';
import { GetAllProductsUseCase } from './product/getAllProducts/getAllProducts.use-case';
import { RepositoriesModule } from 'src/infrastructure/repositories/repositories.module';
import { CreateProductFactoryService } from './product/createProduct/createProductFactory.service';
import { UpdateProductFactoryService } from './product/updateProduct/updateProductFactory.service';

@Module({
  imports: [RepositoriesModule],
  providers: [
    CreateProductUseCase,
    CreateProductFactoryService,
    DeleteProductUseCase,
    GetAllProductsUseCase,
    GetProductByIdUseCase,
    UpdateProductUseCase,
    UpdateProductFactoryService
  ],
  exports: [
    CreateProductUseCase,
    DeleteProductUseCase,
    GetAllProductsUseCase,
    GetProductByIdUseCase,
    UpdateProductUseCase,
  ],
})
export class UseCasesModule {}
