import { Injectable } from '@nestjs/common';
import { Product, GetProductByIdRepository } from 'src/core';
import { Failure } from 'src/core/exceptions';

@Injectable()
export class GetProductByIdUseCase {
  constructor(
    private readonly getProductByIdRepository: GetProductByIdRepository,
  ) {}

  async execute({ id }: { id: number }): Promise<Product | Failure> {
    try {
      return this.getProductByIdRepository.execute({ id });
    } catch (error) {
      return error;
    }
  }
}
