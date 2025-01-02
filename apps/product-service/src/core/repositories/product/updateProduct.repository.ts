import { Product } from '../../entities/product.entity';
import { Failure } from '../../exceptions';

export abstract class UpdateProductRepository {
  abstract execute(product: Product): Promise<Product | Failure>;
}
