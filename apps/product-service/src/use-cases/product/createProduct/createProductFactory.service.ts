import { Injectable } from '@nestjs/common';
import { ProductWithoutId } from '../../../core';
import { CreateProductDto } from '../../../interfaceAdapters/dtos/createProductDto';

@Injectable()
export class CreateProductFactoryService {
  createNewProduct(createProductDto: CreateProductDto) {
    const newProduct = new ProductWithoutId(
      // name
      createProductDto.name,
    );

    return newProduct;
  }
}
