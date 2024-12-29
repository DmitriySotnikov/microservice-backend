import { Injectable } from '@nestjs/common';
import { Product, CreateProductRepository } from 'src/core';
import { Failure } from 'src/core/exceptions';

@Injectable()
export class CreateProductUseCase {
  constructor(
    private readonly createProductRepository: CreateProductRepository,
  ) {}

  async execute({
    createProduct,
  }: {
    createProduct: any;
  }): Promise<Product | Failure> {
    try {
      return this.createProductRepository.execute(createProduct);
    } catch (error) {
      return error;
    }
  }
}
