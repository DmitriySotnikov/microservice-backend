import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetProductByIdRepository, Product } from '../../../core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from '../../../core/exceptions';
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
    try {
      ///
      const product: { id: Product['id']; name: Product['name'] }[] =
        await this.productModel.sequelize.query(
        `
        SELECT
          id,
          name
        FROM Products
        WHERE id = $id
        ORDER BY name;
        `,
          {
            bind: { id },
            type: QueryTypes.SELECT,
          },
        );

      if (!product?.length) {
        return new Failure(new Error('Product not found'));
      }

      return product[0];
    } catch (error) {
      return new Failure(error);
    }
  }
}
