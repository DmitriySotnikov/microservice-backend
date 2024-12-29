import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DeleteProductRepository } from 'src/core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from 'src/core/exceptions';

@Injectable()
export class SequelizeDeleteProductRepository
  implements DeleteProductRepository
{
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}

  async execute({ id }: { id: number }): Promise<number | Failure> {
    // await this.productModel.sequelize.query(``, {
    //   bind: { id },
    // });
    return id;
  }
}
