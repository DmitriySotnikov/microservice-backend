import { Injectable } from '@nestjs/common';
import { Product, UpdateProductRepository } from '../../../core';
import { Failure } from '../../../core/exceptions';
import { UpdateProductFactoryService } from './updateProductFactory.service';
import { UpdateProductDto } from 'src/interfaceAdapters/dtos/updateProductDto';

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
  }): Promise<{ id: Product['id']['value']; name: Product['name']['value'] } | Failure> {
    try {
      const product =
        this.updateProductFactoryService.updateProduct(updateProduct);
      return this.updateProductRepository.execute(product);
    } catch (error) {
      return error;
    }
  }
}
