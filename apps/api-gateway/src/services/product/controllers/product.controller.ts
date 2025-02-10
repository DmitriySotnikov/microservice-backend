import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { prefix, routes } from '../routes';
import { Response } from 'express';
import { getRMQServiceResponse } from '../helpers';
import { commonVars } from 'src/configs/common.config';
import { productEventPatterns } from 'src/configs/rmq.config';
import { UpdateProductDTO } from '../dtos/updateProductDTO';
import { CreateProductDTO } from '../dtos/createProductDTO';

@ApiTags('Product')
@Controller(prefix)
export class ProductController {
  constructor(
    @Inject(commonVars.PRODUCT_SERVICE)
    private readonly client: ClientProxy,
  ) {}
  @Post(routes.CREATE_PRODUCT)
  async createProductController(
    @Res() response: Response,
    @Body() createProduct: CreateProductDTO,
  ): Promise<any> {
    return response.send(
      await getRMQServiceResponse({
        clientRMQ: this.client,
        payload: { createProduct },
        cmd: productEventPatterns.CREATE_PRODUCT,
      }),
    );
  }

  @Get(routes.GET_PRODUCT)
  async getAllProductsController(
    @Res() response: Response,
  ): Promise<any> {
    return response.send(
      await getRMQServiceResponse({
        clientRMQ: this.client,
        payload: {},
        cmd: productEventPatterns.GET_ALL_PRODUCTS,
      }),
    );
  }

  @Get(routes.GET_PRODUCT_BY_ID)
  async getProductByIdController(
    @Res() response: Response,
    @Param('id') id: string,
  ): Promise<any> {
    return response.send(
      await getRMQServiceResponse({
        clientRMQ: this.client,
        payload: { id },
        cmd: productEventPatterns.GET_PRODUCT_BY_ID,
      }),
    );
  }

  @Put(routes.UPDATE_PRODUCT)
  async updateProductController(
    @Res() response: Response,
    @Body() updateProduct: UpdateProductDTO,
  ): Promise<any> {
    return response.send(
      await getRMQServiceResponse({
        clientRMQ: this.client,
        payload: { updateProduct },
        cmd: productEventPatterns.UPDATE_PRODUCT,
      }),
    );
  }

  @Delete(routes.DELETE_PRODUCT)
  async deleteProductController(
    @Res() response: Response,
    @Param('id') id: string,
  ): Promise<any> {
    return response.send(
      await getRMQServiceResponse({
        clientRMQ: this.client,
        payload: { id },
        cmd: productEventPatterns.DELETE_PRODUCT,
      }),
    );
  }
}
