import { Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product, UpdateProductRepository } from 'src/core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from 'src/core/exceptions';
import { QueryTypes } from 'sequelize';

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
    const updatedProduct: [{ id: number; name: string }, number] =
      await this.productModel.sequelize.query(
        `
      UPDATE Products
      SET name = $name
      WHERE id = $id
      RETURNING id, name;
      `,
        {
          bind: { id: product.id.value, name: product.name.value },
          type: QueryTypes.UPDATE,
        },
      );

    if (!updatedProduct || !updatedProduct[0] || !updatedProduct[0][0]) {
      return new Failure(new Error('Failed to update product'));
    }

    return {
      id: updatedProduct[0][0].id,
      name: updatedProduct[0][0].name,
    };
  }
}
