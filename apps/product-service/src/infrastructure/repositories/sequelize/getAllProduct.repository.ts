import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetAllProductsRepository, Product } from '../../../core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from '../../../core/exceptions';

@Injectable()
export class SequelizeGetAllProductRepository
  implements GetAllProductsRepository
{
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}

  async execute(): Promise<Product[] | Failure> {
    ///
    const products: ProductModel[] = await this.productModel.findAll({
      attributes: ['id', 'name'],
    });

    return products;
  }
}
