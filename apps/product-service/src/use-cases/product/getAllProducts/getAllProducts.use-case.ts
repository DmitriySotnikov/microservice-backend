import { Injectable } from '@nestjs/common';
import { Product, GetAllProductsRepository } from 'src/core';
import { Failure } from 'src/core/exceptions';

@Injectable()
export class GetAllProductsUseCase {
  constructor(
    private readonly getAllProductsRepository: GetAllProductsRepository,
  ) {}

  async execute(): Promise<Product[] | Failure> {
    try {
      return this.getAllProductsRepository.execute();
    } catch (error) {
      return error;
    }
  }
}
