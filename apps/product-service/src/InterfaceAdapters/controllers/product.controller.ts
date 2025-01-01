import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { productEventPatterns } from '../../config/rmq.config';
import { ack, getErrorObject } from '../../infrastructure/helpers/helpers';
import { CreateProductUseCase } from '../../use-cases/product/createProduct/createProduct.use-case';
import { GetAllProductsUseCase } from '../../use-cases/product/getAllProducts/getAllProducts.use-case';
import { DeleteProductUseCase } from '../../use-cases/product/deleteProduct/deleteProduct.use-case';
import { GetProductByIdUseCase } from '../../use-cases/product/getProductById/getProductById.use-case';
import { UpdateProductUseCase } from '../../use-cases/product/updateProduct/updateProduct.use-case';
import { UpdateProductDto } from '../dtos/updateProductDto';

@Controller()
export class ProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private deleteProductUseCase: DeleteProductUseCase,
    private getAllProductsUseCase: GetAllProductsUseCase,
    private getProductByIdUseCase: GetProductByIdUseCase,
    private updateProductUseCase: UpdateProductUseCase,
  ) {}

  @MessagePattern(productEventPatterns.CREATE_PRODUCT)
  async createProductController(
    ///
    @Payload() { createProduct },
    @Ctx() context: RmqContext,
  ) {
    try {
      ack(context);

      return await this.createProductUseCase.execute({ createProduct });
    } catch (error) {
      return getErrorObject(error);
    }
  }

  @MessagePattern(productEventPatterns.GET_ALL_PRODUCTS)
  async getAllProductsController(
    ///
    @Payload() {},
    @Ctx() context: RmqContext,
  ) {
    try {
      ack(context);

      return await this.getAllProductsUseCase.execute();
    } catch (error) {
      return getErrorObject(error);
    }
  }

  @MessagePattern(productEventPatterns.GET_PRODUCT_BY_ID)
  async getProductByIdController(
    ///
    @Payload() { id },
    @Ctx() context: RmqContext,
  ) {
    try {
      ack(context);

      return await this.getProductByIdUseCase.execute({ id });
    } catch (error) {
      return getErrorObject(error);
    }
  }

  @MessagePattern(productEventPatterns.UPDATE_PRODUCT)
  async updateProductsController(
    ///
    @Payload() { updateProduct }: { updateProduct: UpdateProductDto },
    @Ctx() context: RmqContext,
  ) {
    try {
      ack(context);

      return await this.updateProductUseCase.execute({ updateProduct });
    } catch (error) {
      return getErrorObject(error);
    }
  }

  @MessagePattern(productEventPatterns.DELETE_PRODUCT)
  async deleteProductsController(
    ///
    @Payload() { id },
    @Ctx() context: RmqContext,
  ) {
    try {
      ack(context);

      return await this.deleteProductUseCase.execute({ id });
    } catch (error) {
      return getErrorObject(error);
    }
  }
}
