import { Injectable } from '@nestjs/common';
import { Product, UpdateProductRepository } from 'src/core';
import { Failure } from 'src/core/exceptions';
import { UpdateProductFactoryService } from './updateProductFactory.service';
import { UpdateProductDto } from 'src/InterfaceAdapters/dtos/updateProductDto';

@Injectable()
export class UpdateProductUseCase {
  constructor(
    private readonly updateProductRepository: UpdateProductRepository,
    private readonly updateProductFactoryService: UpdateProductFactoryService,
  ) {}

  async execute({
    updateProduct,
  }: {
    updateProduct: UpdateProductDto;
  }): Promise<Product | Failure> {
    try {
      const product =
        this.updateProductFactoryService.updateProduct(updateProduct);
      return this.updateProductRepository.execute(product);
    } catch (error) {
      return error;
    }
  }
}
