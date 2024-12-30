import { Injectable } from '@nestjs/common';
import { DeleteProductRepository, Id } from 'src/core';
import { Failure } from 'src/core/exceptions';

@Injectable()
export class DeleteProductUseCase {
  constructor(
    private readonly deleteProductRepository: DeleteProductRepository,
  ) {}

  async execute({ id }: { id: number }): Promise<{ productId: Id } | Failure> {
    try {
      return this.deleteProductRepository.execute({ id });
    } catch (error) {
      return error;
    }
  }
}
