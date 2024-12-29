import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product, UpdateProductRepository } from 'src/core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from 'src/core/exceptions';

@Injectable()
export class SequelizeUpdateProductRepository
  implements UpdateProductRepository
{
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}

  async execute(product: Product): Promise<Product | Failure> {
    ///
    await this.productModel.sequelize.query(``, {
      bind: { product },
    });

    return product;
  }
}
