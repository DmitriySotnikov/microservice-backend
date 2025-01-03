import { Injectable } from '@nestjs/common';
import { Product } from '../../../core';
import { UpdateProductDto } from 'src/interfaceAdapters/dtos/updateProductDto';

@Injectable()
export class UpdateProductFactoryService {
  updateProduct(updateProductDto: UpdateProductDto) {
    const updateProduct = new Product({
      id: updateProductDto.id,
      name: updateProductDto.name,
    });

    return updateProduct;
  }
}
