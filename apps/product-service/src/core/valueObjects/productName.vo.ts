export class ProductName {
  public readonly name: string;

  constructor(name: string) {
    if (!name || !name?.trim()?.length) {
      throw new Error('Product name cannot be empty');
    }
    this.name = name;
  }

  get value(): string {
    return this.name;
  }

  equals(other: ProductName): boolean {
    return other instanceof ProductName && this.name === other.name;
  }
}
