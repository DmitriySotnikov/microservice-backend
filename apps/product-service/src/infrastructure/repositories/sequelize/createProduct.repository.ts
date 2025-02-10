import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductRepository, Product } from 'src/core';
import { ProductModel } from '../../orm/sequelize/models/Product.model';
import { Failure } from '../../../core/exceptions';

@Injectable()
export class SequelizeCreateProductRepository
  implements CreateProductRepository
{
  constructor(
    @InjectModel(ProductModel)
    private readonly productModel: typeof ProductModel,
  ) {}

  async execute(
    product: Product,
  ): Promise<{ productId: Product['id'] } | Failure> {
    const newProduct = await this.productModel.create({
      name: product.name,
    });

    if (!newProduct) {
      return new Failure(new Error('Failed to create product'));
    }

    return { productId: newProduct.id };
  }
}
