import { Product, ProductWithoutId } from './product.entity';
import { errorMessages } from '../../config/common.config';

describe('ProductWithoutId', () => {
  it('should create a product with valid name', () => {
    const product = new ProductWithoutId({ name: 'Valid Product' });
    expect(product.name).toBe('Valid Product');
  });

  it('should trim whitespace from product name', () => {
    const product = new ProductWithoutId({ name: '  Product Name  ' });
    expect(product.name).toBe('Product Name');
  });

  it('should throw error for empty name', () => {
    expect(() => new ProductWithoutId({ name: '' })).toThrow(
      errorMessages.PRODUCT_ENTITY_NAME_ERROR,
    );
    expect(() => new ProductWithoutId({ name: '   ' })).toThrow(
      errorMessages.PRODUCT_ENTITY_NAME_ERROR,
    );
  });

  it('should throw error for null name', () => {
    expect(() => new ProductWithoutId({ name: null })).toThrow(
      errorMessages.PRODUCT_ENTITY_NAME_ERROR,
    );
  });

  it('should throw error for undefined name', () => {
    expect(() => new ProductWithoutId({ name: undefined })).toThrow(
      errorMessages.PRODUCT_ENTITY_NAME_ERROR,
    );
  });

  it('should throw error for name less than 3 characters', () => {
    expect(() => new ProductWithoutId({ name: 'ab' })).toThrow(
      errorMessages.PRODUCT_ENTITY_NAME_ERROR,
    );
    expect(() => new ProductWithoutId({ name: '  a  ' })).toThrow(
      errorMessages.PRODUCT_ENTITY_NAME_ERROR,
    );
  });

  it('should accept name with exactly 3 characters', () => {
    const product = new ProductWithoutId({ name: 'abc' });
    expect(product.name).toBe('abc');
  });
});

describe('Product', () => {
  it('should create a product with valid id and name', () => {
    const product = new Product({ id: 1, name: 'Valid Product' });
    expect(product.id).toBe(1);
    expect(product.name).toBe('Valid Product');
  });

  it('should throw error for zero id', () => {
    expect(() => new Product({ id: 0, name: 'Valid Product' })).toThrow(
      errorMessages.PRODUCT_ENTITY_ID_ERROR,
    );
  });

  it('should throw error for negative id', () => {
    expect(() => new Product({ id: -1, name: 'Valid Product' })).toThrow(
      errorMessages.PRODUCT_ENTITY_ID_ERROR,
    );
  });

  it('should throw error for non-numeric id', () => {
    expect(() => new Product({ id: NaN, name: 'Valid Product' })).toThrow(
      errorMessages.PRODUCT_ENTITY_ID_ERROR,
    );
  });

  it('should throw error for null id', () => {
    expect(() => new Product({ id: null, name: 'Valid Product' })).toThrow(
      errorMessages.PRODUCT_ENTITY_ID_ERROR,
    );
  });

  it('should throw error for undefined id', () => {
    expect(() => new Product({ id: undefined, name: 'Valid Product' })).toThrow(
      errorMessages.PRODUCT_ENTITY_ID_ERROR,
    );
  });

  it('should throw error for decimal id', () => {
    expect(() => new Product({ id: 1.5, name: 'Valid Product' })).toThrow(
      errorMessages.PRODUCT_ENTITY_ID_ERROR,
    );
  });
});
