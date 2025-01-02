import { CreateProductDto } from '../../../interfaceAdapters/dtos/createProductDto';
import { CreateProductRepository } from '../../../core';
import { CreateProductUseCase } from './createProduct.use-case';
import { CreateProductFactoryService } from './createProductFactory.service';
import { Failure } from '../../../core/exceptions';

describe('CreateProductUseCase (Integration)', () => {
  ///
  let createProductFactoryService: CreateProductFactoryService;

  beforeEach(() => {
    createProductFactoryService = new CreateProductFactoryService();
  });

  const createTestSetup = (
    MockCreateProductRepository: CreateProductRepository,
  ) => {
    return new CreateProductUseCase(
      MockCreateProductRepository,
      createProductFactoryService,
    );
  };

  const createProductDto: CreateProductDto = {
    name: 'Test Product',
  };

  it('should create a product successfully', async () => {
    const MockCreateProductRepository: CreateProductRepository = {
      execute: async () => ({ productId: 1 }),
    };

    const useCase = createTestSetup(MockCreateProductRepository);
    const result = await useCase.execute({ createProduct: createProductDto });

    expect(result).toHaveProperty('productId');
  });

  it('should handle product creation failure', async () => {
    const MockCreateProductRepository: CreateProductRepository = {
      execute: async () => new Failure(Error('Error creating product')),
    };

    const useCase = createTestSetup(MockCreateProductRepository);
    const result = await useCase.execute({ createProduct: createProductDto });

    expect(result).toBeInstanceOf(Failure);
  });
});
