import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { Body, Controller, Get } from '@nestjs/common';
import { productEventPatterns } from '../../config/rmq.config';
import { ack, getErrorObject } from '../../infrastructure/helpers/helpers';
import { CreateProductUseCase } from 'src/use-cases/product/createProduct.use-case';
import { GetAllProductsUseCase } from 'src/use-cases/product/getAllProducts.use-case';

@Controller()
export class ProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private getAllProductsUseCase: GetAllProductsUseCase
  ) {}

  @MessagePattern(productEventPatterns.CREATE_PRODUCT)
  async getProductController(
    ///
    @Payload() {},
    @Ctx() context: RmqContext,
    @Body() createProduct: any,
  ) {
    try {
      ack(context);

      return await this.createProductUseCase.execute({ createProduct });
    } catch (error) {
      return getErrorObject(error);
    }
  }

    @MessagePattern(productEventPatterns.GET_PRODUCT)
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
}
