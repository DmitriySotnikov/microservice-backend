import { Injectable } from '@nestjs/common';
import { ProductName, ProductToCreate } from '../../../core';
import { CreateProductDto } from 'src/interfaceAdapters/dtos/createProductDto';

@Injectable()
export class CreateProductFactoryService {
  createNewProduct(createProductDto: CreateProductDto) {
    const newProduct = new ProductToCreate(
      // name
      new ProductName(createProductDto.name),
    );

    return newProduct;
  }
}
