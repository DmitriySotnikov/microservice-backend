import { Product } from 'src/core/entities/product.entity';
import { Failure } from '../../exceptions';

export abstract class GetProductByIdRepository {
  abstract execute({ id }: { id: Product['id'] }): Promise<Product | Failure>;
}
