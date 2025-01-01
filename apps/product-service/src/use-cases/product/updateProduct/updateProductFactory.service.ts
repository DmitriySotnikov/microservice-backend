import { Injectable } from '@nestjs/common';
import { Id, Product, ProductName } from '../../../core';
import { UpdateProductDto } from 'src/interfaceAdapters/dtos/updateProductDto';

@Injectable()
export class UpdateProductFactoryService {
  updateProduct(updateProductDto: UpdateProductDto) {
    const updateProduct = new Product(
      // id
      new Id(updateProductDto.id),
      // name
      new ProductName(updateProductDto.name),
    );

    return updateProduct;
  }
}
