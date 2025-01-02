import { Injectable } from '@nestjs/common';
import { DeleteProductRepository } from '../../../core';
import { Failure } from '../../../core/exceptions';

@Injectable()
export class DeleteProductUseCase {
  constructor(
    private readonly deleteProductRepository: DeleteProductRepository,
  ) {}

  async execute({
    id,
  }: {
    id: number;
  }): Promise<{ message: string } | Failure> {
    try {
      return this.deleteProductRepository.execute({ id });
    } catch (error) {
      return error;
    }
  }
}
