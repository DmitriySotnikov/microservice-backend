import { ProductName } from '../../valueObjects/productName.vo';

describe('ProductName', () => {
  ///
  it('Should create a valid product name', () => {
    const name = 'Same Product';
    const productName = new ProductName(name);
    expect(productName.value).toBe(name);
  });

  it('should throw error for empty name', () => {
    expect(() => new ProductName('')).toThrow('Product name cannot be empty');
    expect(() => new ProductName('   ')).toThrow(
      'Product name cannot be empty',
    );
  });

  it('Should throw an error when creating a product name with invalid input', () => {
    expect(() => new ProductName('A')).toThrow(
      'Product name cannot be less than 3 characters',
    );
    expect(() => new ProductName('Ab')).toThrow(
      'Product name cannot be less than 3 characters',
    );
  });

  it('should return correct value through getter', () => {
    const name = 'Same Product';
    const productName = new ProductName(name);
    expect(productName.value).toBe(name);
  });

  it('should correctly compare equal product names', () => {
    const name = 'Same Product';
    const productName1 = new ProductName(name);
    const productName2 = new ProductName(name);
    expect(productName1.equals(productName2)).toBe(true);
  });

  it('should correctly compare different product names', () => {
    const productName1 = new ProductName('Product One');
    const productName2 = new ProductName('Product Two');
    expect(productName1.equals(productName2)).toBe(false);
  });

  it('should handle names with leading/trailing spaces', () => {
    const productName = new ProductName('  Valid Product  ');
    expect(productName.value).toBe('Valid Product');
  });
});
