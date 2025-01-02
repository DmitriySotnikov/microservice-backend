import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product, UpdateProductRepository } from '../../../core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from '../../../core/exceptions';

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
    const [updatedProduct] = await this.productModel.update(
      {
        name: product.name,
      },
      {
        where: { id: product.id },
      },
    );

    if (!updatedProduct) {
      return new Failure(new Error('Failed to update product'));
    }

    return product;
  }
}
