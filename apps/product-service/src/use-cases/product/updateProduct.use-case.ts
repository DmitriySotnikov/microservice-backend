import { Injectable } from '@nestjs/common';
import { Product, UpdateProductRepository } from 'src/core';
import { Failure } from 'src/core/exceptions';

@Injectable()
export class UpdateProductsUseCase {
  constructor(
    private readonly updateProductRepository: UpdateProductRepository,
  ) {}

  async execute(
    createProduct: any,
  ): Promise<Product | Failure> {
    try {
      return this.updateProductRepository.execute(createProduct);
    } catch (error) {
      return error;
    }
  }
}
