import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductRepository, Product } from 'src/core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from 'src/core/exceptions';

@Injectable()
export class SequelizeCreateProductRepository
  implements CreateProductRepository
{
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}

  async execute(product: Product): Promise<Product | Failure> {
    // await this.product.sequelize.query(``, {
    //   bind: { product },
    // });
    return product;
  }
}
