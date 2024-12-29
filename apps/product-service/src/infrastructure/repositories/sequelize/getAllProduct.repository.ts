import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetAllProductsRepository, Product } from 'src/core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from 'src/core/exceptions';
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
      const products = (await this.productModel.sequelize.query(
        `
        SELECT
          id,
          name
        FROM products
        `,
        {
          type: QueryTypes.SELECT,
        },
      )) as Product[];
      return products;
    } catch (error) {
      console.log(error);
      return new Failure(error.message);
    }
  }
}
