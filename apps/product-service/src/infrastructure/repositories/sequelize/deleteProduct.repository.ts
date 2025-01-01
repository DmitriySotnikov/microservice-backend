import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { DeleteProductRepository, Id } from '../../../core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from '../../../core/exceptions';
import { QueryTypes } from 'sequelize';

@Injectable()
export class SequelizeDeleteProductRepository
  implements DeleteProductRepository
{
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}

  async execute({ id }: { id: number }): Promise<{ productId: Id } | Failure> {
    ///
    const [product] = await this.productModel.sequelize.query(
      `
      UPDATE Products
      SET deleted_at = now()
      WHERE id = $id
      RETURNING id
      `,
      {
        bind: { id },
        type: QueryTypes.UPDATE,
      },
    );

    if (!product || !product[0]) {
      return new Failure(new Error('Failed to deleted product'));
    }

    const updatedProduct = product[0] as { id: Id };

    return {
      productId: updatedProduct.id,
    };
  }
}
