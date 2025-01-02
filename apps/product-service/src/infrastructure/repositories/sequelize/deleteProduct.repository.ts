import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DeleteProductRepository } from '../../../core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from '../../../core/exceptions';

@Injectable()
export class SequelizeDeleteProductRepository
  implements DeleteProductRepository
{
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}

  async execute({
    id,
  }: {
    id: number;
  }): Promise<{ message: string } | Failure> {
    ///
    const product = await this.productModel.destroy({
      where: { id },
    });

    if (!product) {
      return new Failure(new Error('Failed to deleted product'));
    }

    return {
      message: 'Resource deleted successfully.',
    };
  }
}
