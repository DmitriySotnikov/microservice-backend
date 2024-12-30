import { Injectable } from '@nestjs/common';
import { Id, Product, ProductName } from 'src/core';
import { UpdateProductDto } from 'src/InterfaceAdapters/dtos/updateProductDto';

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
