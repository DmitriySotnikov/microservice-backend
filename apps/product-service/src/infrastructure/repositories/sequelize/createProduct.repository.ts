import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductRepository, Id, Product } from 'src/core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from '../../../core/exceptions';
import { QueryTypes } from 'sequelize';

@Injectable()
export class SequelizeCreateProductRepository
  implements CreateProductRepository
{
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}

  async execute(product: Product): Promise<{ productId: Id["value"] } | Failure> {
    ///
    const [newProduct] = await this.productModel.sequelize.query(
      `
      INSERT INTO Products (name)
      VALUES ($name)
      RETURNING id;
      `,
      {
        type: QueryTypes.INSERT,
        bind: { name: product.name.value },
      },
    );

    if (!newProduct || !newProduct[0] || !newProduct[0].id) {
      return new Failure(new Error('Failed to create product'));
    }

    return { productId: newProduct[0].id };
  }
}
