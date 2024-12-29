import { Product } from '../../entities/product.entity';
import { Failure } from '../../exceptions';

export abstract class CreateProductRepository {
  abstract execute(product: Product): Promise<Product | Failure>;
}
