import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetAllProductsRepository, Product } from '../../../core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from '../../../core/exceptions';
import { QueryTypes } from 'sequelize';

@Injectable()
export class SequelizeGetAllProductRepository
  implements GetAllProductsRepository
{
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}

  async execute(): Promise<Product[] | Failure> {
    try {
      const products: Product[] = await this.productModel.sequelize.query(
        `
        SELECT
          id,
          name
        FROM Products
        ORDER BY name;
        `,
        {
          type: QueryTypes.SELECT,
        },
      );
      return products;
    } catch (error) {
      return new Failure(error);
    }
  }
}
