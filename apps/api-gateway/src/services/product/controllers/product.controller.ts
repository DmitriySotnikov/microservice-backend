import { Controller, Get, Inject, Res } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { prefix, routes } from '../routes';
import { Response } from 'express';
import { getRMQServiceResponse } from '../helpers';
import { commonVars } from 'src/configs/common.config';
import { productEventPatterns } from 'src/configs/rmq.config';

@ApiTags('public')
@Controller(prefix)
export class ProductController {
  constructor(
    /// RMQ
    @Inject(commonVars.PRODUCT_SERVICE)
    private readonly client: ClientProxy,
  ) {}
  ///
  @Get(routes.GET_PRODUCT)
  async getAllProductsController(
    ///
    @Res() response: Response,
  ): Promise<any> {
    ///
    return response.send(
      await getRMQServiceResponse({
        clientRMQ: this.client,
        payload: {},
        cmd: productEventPatterns.GET_PRODUCT,
      }),
    );
  }
}
