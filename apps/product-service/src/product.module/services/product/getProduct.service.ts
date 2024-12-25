import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from '../../../models/product/Product.model';

@Injectable()
export class GetProductService {
  constructor(
    @InjectModel(Product)
    private productRepository: typeof Product,
  ) {}
  ///
  async get({}: {}) {
    ///

    return { status: 'ok' };
  }
}
