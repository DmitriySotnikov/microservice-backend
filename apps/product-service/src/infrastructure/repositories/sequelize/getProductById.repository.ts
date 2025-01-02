import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetProductByIdRepository, Product } from '../../../core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from '../../../core/exceptions';

@Injectable()
export class SequelizeGetProductByIdRepository
  implements GetProductByIdRepository
{
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}

  async execute({ id }: { id: number }): Promise<Product | Failure> {
    ///
    const product: Product = await this.productModel.findByPk(id, {
      attributes: ['id', 'name'],
    });

    if (!product) {
      return new Failure(new Error('Product not found'));
    }

    return product;
  }
}
