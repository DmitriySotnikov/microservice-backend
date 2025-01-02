import { Injectable } from '@nestjs/common';
import { CreateProductRepository, Product } from '../../../core';
import { Failure } from 'src/core/exceptions';
import { CreateProductFactoryService } from './createProductFactory.service';
import { CreateProductDto } from 'src/interfaceAdapters/dtos/createProductDto';

@Injectable()
export class CreateProductUseCase {
  constructor(
    private readonly createProductRepository: CreateProductRepository,
    private readonly createProductFactoryService: CreateProductFactoryService,
  ) {}

  async execute({
    createProduct,
  }: {
    createProduct: CreateProductDto;
  }): Promise<{ productId: Product['id'] } | Failure> {
    try {
      const productToCreate =
        this.createProductFactoryService.createNewProduct(createProduct);
      return this.createProductRepository.execute(productToCreate);
    } catch (error) {
      return error;
    }
  }
}
