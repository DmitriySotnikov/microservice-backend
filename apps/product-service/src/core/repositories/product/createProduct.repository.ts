import { Failure } from '../../exceptions';
import { Product, ProductWithoutId } from '../../entities/product.entity';

export abstract class CreateProductRepository {
  abstract execute(
    product: ProductWithoutId,
  ): Promise<{ productId: Product['id'] } | Failure>;
}
