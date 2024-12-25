import { Controller, Get, Inject, Res } from '@nestjs/common';
import { commonVars } from '../../../config/common.config';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { prefix, routes } from '../routes';
import { Response } from 'express';
import { productEventPatterns } from '../../../config/rmq.config';
import { getRMQServiceResponse } from '../helpers';

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
  async getProductsWithFilterController(
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
