import { UpdateProductRepository } from '../../../core/repositories/product/updateProduct.repository';
import { Failure } from '../../../core/exceptions';
import { UpdateProductFactoryService } from './updateProductFactory.service';
import { UpdateProductUseCase } from './updateProduct.use-case';
import { UpdateProductDto } from '../../../interfaceAdapters/dtos/updateProductDto';
import { Product } from '../../../core';

describe('UpdateProductUseCase (Integration)', () => {
  let updateProductFactoryService: UpdateProductFactoryService;

  beforeEach(() => {
    updateProductFactoryService = new UpdateProductFactoryService();
  });

  const updateTestSetup = (
    updateProductRepository: UpdateProductRepository,
  ) => {
    return new UpdateProductUseCase(
      updateProductRepository,
      updateProductFactoryService,
    );
  };

  const updateProductDto: UpdateProductDto = {
    id: 1,
    name: 'Test Product',
  };

  it('should update a product successfully', async () => {
    const MockUpdateProductRepository: UpdateProductRepository = {
      execute: async () => {
        const mockProduct = new Product({ id: 1, name: 'Test Product' });
        return await {
          id: mockProduct.id,
          name: mockProduct.name,
        };
      },
    };

    const useCase = updateTestSetup(MockUpdateProductRepository);
    const result = await useCase.execute({ updateProduct: updateProductDto });

    expect(result).toEqual({ id: 1, name: 'Test Product' });
    expect(result).toMatchObject({ id: 1, name: 'Test Product' });
  });

  it('should handle product creation failure', async () => {
    const MockUpdateProductRepository: UpdateProductRepository = {
      execute: async () => await new Failure(Error('Error updating product')),
    };

    const useCase = updateTestSetup(MockUpdateProductRepository);
    const result = await useCase.execute({ updateProduct: updateProductDto });

    expect(result).toBeInstanceOf(Failure);
  });
});
