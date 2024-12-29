import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetProductByIdRepository, Product } from 'src/core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from 'src/core/exceptions';
import { QueryTypes } from 'sequelize';

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
    const product = (await this.productModel.sequelize.query(``, {
      bind: { id },
      type: QueryTypes.SELECT,
    })[0]) as Product;

    return product;
  }
}
