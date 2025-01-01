import { Product } from '../../entities/product.entity';
import { Failure } from '../../exceptions';

export abstract class UpdateProductRepository {
  abstract execute(
    product: Product,
  ): Promise<
    { id: Product['id']['value']; name: Product['name']['value'] } | Failure
  >;
}
