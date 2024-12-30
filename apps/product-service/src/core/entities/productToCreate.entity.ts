import { ProductName } from '../valueObjects/productName.vo';

export class ProductToCreate {
  constructor(public readonly name: ProductName) {}
}
