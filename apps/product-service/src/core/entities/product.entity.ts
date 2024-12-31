import { Id } from '../valueObjects/id.vo';
import { ProductName } from '../valueObjects/productName.vo';

export class Product {
  constructor(
    ///
    public readonly id: Id,
    public readonly name: ProductName,
  ) {}
}
