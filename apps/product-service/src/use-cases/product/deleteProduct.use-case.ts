import { Injectable } from '@nestjs/common';
import { DeleteProductRepository } from 'src/core';
import { Failure } from 'src/core/exceptions';

@Injectable()
export class DeleteProductUseCase {
  constructor(
    private readonly deleteProductRepository: DeleteProductRepository,
  ) {}

  async execute({ id }: { id: number }): Promise<number | Failure> {
    try {
      return this.deleteProductRepository.execute({ id });
    } catch (error) {
      return error;
    }
  }
}
