import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { productEventPatterns } from '../../config/rmq.config';
import { ack, getErrorObject } from '../../helpers';
import { GetProductService } from '../services/product/getProduct.service';

@Controller()
export class ProductController {
  constructor(
    ///
    private getProductService: GetProductService,
  ) {}

  @MessagePattern(productEventPatterns.GET_PRODUCT)
  async getProductController(
    ///
    @Payload() {},
    @Ctx() context: RmqContext,
  ) {
    try {
      ack(context);

      return await this.getProductService.get({});
    } catch (error) {
      return getErrorObject(error);
    }
  }
}
