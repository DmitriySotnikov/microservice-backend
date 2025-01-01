import { Injectable } from '@nestjs/common';
import { CreateProductRepository, Id } from '../../../core';
import { Failure } from 'src/core/exceptions';
import { CreateProductFactoryService } from './createProductFactory.service';
import { CreateProductDto } from 'src/InterfaceAdapters/dtos/createProductDto';

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
  }): Promise<{ productId: Id } | Failure> {
    try {
      const productToCreate =
        this.createProductFactoryService.createNewProduct(createProduct);
      return this.createProductRepository.execute(productToCreate);
    } catch (error) {
      return error;
    }
  }
}
